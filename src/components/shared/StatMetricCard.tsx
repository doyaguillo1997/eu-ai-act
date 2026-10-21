import React from 'react';

export interface StatMetricCardProps {
  title: string;
  value: string | number;
  subtitle?: string;
  icon?: React.ReactNode;
  trend?: {
    value: string | number;
    isPositive?: boolean;
    label?: string;
  };
  progress?: {
    current: number;
    total: number;
    label?: string;
  };
  className?: string;
}

export const StatMetricCard: React.FC<StatMetricCardProps> = ({
  title,
  value,
  subtitle,
  icon,
  trend,
  progress,
  className = '',
}) => {
  const percentage =
    progress && progress.total > 0
      ? Math.min(100, Math.max(0, Math.round((progress.current / progress.total) * 100)))
      : null;

  return (
    <div
      className={`rounded-xl border border-slate-800/80 bg-slate-900/80 p-4 shadow-sm transition-all duration-150 hover:border-slate-700/60 ${className}`}
    >
      <div className="flex items-start justify-between gap-3">
        <div className="min-w-0">
          <p className="text-xs font-medium text-slate-400 uppercase tracking-wider truncate">
            {title}
          </p>
          <div className="mt-1 flex items-baseline gap-2">
            <span className="text-2xl font-bold font-mono tracking-tight text-slate-100">
              {value}
            </span>
            {trend && (
              <span
                className={`text-xs font-semibold px-1.5 py-0.5 rounded ${
                  trend.isPositive
                    ? 'text-emerald-400 bg-emerald-500/10 border border-emerald-500/20'
                    : 'text-rose-400 bg-rose-500/10 border border-rose-500/20'
                }`}
              >
                {trend.isPositive ? '+' : ''}
                {trend.value}
                {trend.label ? ` ${trend.label}` : ''}
              </span>
            )}
          </div>
          {subtitle && <p className="mt-1 text-xs text-slate-400">{subtitle}</p>}
        </div>

        {icon && (
          <div className="shrink-0 p-2 rounded-lg bg-slate-800/80 border border-slate-700/50 text-indigo-400">
            {icon}
          </div>
        )}
      </div>

      {progress && percentage !== null && (
        <div className="mt-3 pt-3 border-t border-slate-800/60">
          <div className="flex justify-between items-center text-xs mb-1.5">
            <span className="text-slate-400">{progress.label ?? 'Progreso'}</span>
            <span className="font-mono text-slate-300 font-semibold">{percentage}%</span>
          </div>
          <div className="h-1.5 w-full bg-slate-800 rounded-full overflow-hidden">
            <div
              className="h-full bg-indigo-500 rounded-full transition-all duration-300 ease-out"
              style={{ width: `${percentage}%` }}
            />
          </div>
        </div>
      )}
    </div>
  );
};
