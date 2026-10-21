import React from 'react';
import { RiskLevel } from '../../types/legal.types';

export const RISK_METADATA: Record<
  RiskLevel,
  {
    label: string;
    shortLabel: string;
    colorClass: string;
    borderClass: string;
    bgClass: string;
    dotClass: string;
    description: string;
  }
> = {
  unacceptable: {
    label: 'Riesgo Inaceptable (Prohibido)',
    shortLabel: 'Prohibido',
    colorClass: 'text-rose-400',
    borderClass: 'border-rose-500/30',
    bgClass: 'bg-rose-500/10',
    dotClass: 'bg-rose-500',
    description: 'Prácticas de IA prohibidas bajo Art. 5 (manipulación subliminal, puntuación social, biometría remota en tiempo real).',
  },
  high: {
    label: 'Alto Riesgo',
    shortLabel: 'Alto Riesgo',
    colorClass: 'text-amber-400',
    borderClass: 'border-amber-500/30',
    bgClass: 'bg-amber-500/10',
    dotClass: 'bg-amber-500',
    description: 'Sistemas con impacto en derechos fundamentales, empleo o infraestructuras críticas (Arts. 6, 9-15 y Anexos I/III).',
  },
  gpai: {
    label: 'Modelos GPAI / Uso General',
    shortLabel: 'GPAI',
    colorClass: 'text-violet-400',
    borderClass: 'border-violet-500/30',
    bgClass: 'bg-violet-500/10',
    dotClass: 'bg-violet-500',
    description: 'Modelos fundacionales y de propósito general, con obligaciones adicionales si presentan riesgo sistémico (Arts. 51-55).',
  },
  transparency: {
    label: 'Transparencia Específica',
    shortLabel: 'Transparencia',
    colorClass: 'text-sky-400',
    borderClass: 'border-sky-500/30',
    bgClass: 'bg-sky-500/10',
    dotClass: 'bg-sky-500',
    description: 'Obligaciones de marcado y divulgación para interacción con personas, deepfakes y texto sintético (Art. 50).',
  },
  minimal: {
    label: 'Riesgo Mínimo / Voluntario',
    shortLabel: 'Riesgo Mínimo',
    colorClass: 'text-emerald-400',
    borderClass: 'border-emerald-500/30',
    bgClass: 'bg-emerald-500/10',
    dotClass: 'bg-emerald-500',
    description: 'Sistemas sin requisitos regulatorios obligatorios directos; adhesión voluntaria a códigos de conducta (Art. 95).',
  },
  governance: {
    label: 'Gobernanza y Sanciones',
    shortLabel: 'Gobernanza',
    colorClass: 'text-indigo-400',
    borderClass: 'border-indigo-500/30',
    bgClass: 'bg-indigo-500/10',
    dotClass: 'bg-indigo-500',
    description: 'Estructuras de supervisión institucional (Oficina de IA, AESIA), régimen sancionador y plazos de aplicación.',
  },
};

export interface RiskBadgeProps {
  level: RiskLevel;
  size?: 'xs' | 'sm' | 'md';
  showDot?: boolean;
  className?: string;
}

const SIZE_STYLES: Record<'xs' | 'sm' | 'md', { container: string; dot: string }> = {
  xs: {
    container: 'text-[10px] px-1.5 py-0.5 gap-1 tracking-tight',
    dot: 'w-1.5 h-1.5',
  },
  sm: {
    container: 'text-xs px-2 py-0.5 gap-1.5',
    dot: 'w-2 h-2',
  },
  md: {
    container: 'text-sm px-2.5 py-1 gap-2',
    dot: 'w-2.5 h-2.5',
  },
};

export const RiskBadge: React.FC<RiskBadgeProps> = ({
  level,
  size = 'sm',
  showDot = true,
  className = '',
}) => {
  const meta = RISK_METADATA[level] ?? RISK_METADATA.minimal;
  const sizeConfig = SIZE_STYLES[size] ?? SIZE_STYLES.sm;

  return (
    <span
      className={`inline-flex items-center rounded-md border font-medium select-none whitespace-nowrap transition-colors ${meta.bgClass} ${meta.borderClass} ${meta.colorClass} ${sizeConfig.container} ${className}`}
      title={meta.description}
    >
      {showDot && (
        <span
          className={`rounded-full shrink-0 ${meta.dotClass} ${sizeConfig.dot}`}
          aria-hidden="true"
        />
      )}
      <span>{meta.shortLabel}</span>
    </span>
  );
};
