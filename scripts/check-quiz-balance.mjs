// Auditoría anti-sesgo: detecta preguntas cuya respuesta correcta se adivina por longitud.
// Uso: node scripts/check-quiz-balance.mjs [archivo.mjs ...]
import path from 'node:path';
import { pathToFileURL } from 'node:url';

export const MAX_RATIO = 1.2; // correcta / distractor más largo
export const MIN_RATIO = 0.75; // correcta / distractor más corto (evita "la más corta")

export function auditQuestion(q) {
  const lens = q.options.map((o) => o.length);
  const correct = lens[q.correctOptionIndex];
  const others = lens.filter((_, i) => i !== q.correctOptionIndex);
  const issues = [];
  if (q.options.length !== 4) issues.push('options!=4');
  if (correct / Math.max(...others) > MAX_RATIO) issues.push(`demasiado larga (${correct} vs max ${Math.max(...others)})`);
  if (correct / Math.min(...others) < MIN_RATIO) issues.push(`demasiado corta (${correct} vs min ${Math.min(...others)})`);
  return issues;
}

export function auditBank(bank) {
  const failures = bank.map((q) => ({ id: q.id, issues: auditQuestion(q) })).filter((r) => r.issues.length);
  const longestWins = bank.filter((q) => {
    const lens = q.options.map((o) => o.length);
    return lens.indexOf(Math.max(...lens)) === q.correctOptionIndex;
  }).length;
  const positions = [0, 0, 0, 0];
  bank.forEach((q) => positions[q.correctOptionIndex]++);
  const shortOnly = bank.filter((q) => Math.max(...q.options.map((o) => o.length)) <= 60).length;
  return { total: bank.length, failures, longestWins, positions, shortOnly };
}

if (process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href) {
  const files = process.argv.slice(2);
  const targets = files.length
    ? files
    : ['quiz-bank-data.mjs', 'quiz-bank-part1.mjs', 'quiz-bank-part1b.mjs', 'quiz-bank-part2.mjs', 'quiz-bank-part2b.mjs', 'quiz-bank-part3.mjs', 'quiz-bank-part3b.mjs'].map((f) =>
        path.join(path.dirname(new URL(import.meta.url).pathname), f),
      );
  let bank = [];
  for (const f of targets) {
    const m = await import(pathToFileURL(path.resolve(f)).href);
    bank = bank.concat(...Object.values(m).filter(Array.isArray));
  }
  const r = auditBank(bank);
  console.log(`total=${r.total} longestWins=${r.longestWins} (${((r.longestWins / r.total) * 100).toFixed(1)}%) shortOnly(<=60ch)=${r.shortOnly} positions=${r.positions.join('/')}`);
  for (const f of r.failures) console.log(`  ${f.id}: ${f.issues.join('; ')}`);
  process.exitCode = r.failures.length ? 1 : 0;
}
