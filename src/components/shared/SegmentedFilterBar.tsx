import React from 'react';

export interface FilterOption<T extends string> {
  id: T;
  label: string;
  count?: number | string;
  icon?: React.ReactNode;
}

export interface SegmentedFilterBarProps<T extends string> {
  options: FilterOption<T>[];
  value: T;
  onChange: (value: T) => void;
  size?: 'sm' | 'md';
  className?: string;
}

export function SegmentedFilterBar<T extends string>({
  options,
  value,
  onChange,
  size = 'sm',
  className = '',
}: SegmentedFilterBarProps<T>): React.ReactElement {
  const sizeStyles = {
    sm: {
      btn: 'px-2.5 py-1 text-xs gap-1.5',
      count: 'text-[10px] px-1.5 py-0.5',
    },
    md: {
      btn: 'px-3.5 py-1.5 text-sm gap-2',
      count: 'text-xs px-2 py-0.5',
    },
  }[size];

  return (
    <div
      role="tablist"
      className={`inline-flex flex-wrap items-center gap-1 p-1 rounded-lg bg-slate-900/90 border border-slate-800/80 shadow-inner select-none max-w-full ${className}`}
    >
      {options.map((option) => {
        const isActive = option.id === value;
        return (
          <button
            key={option.id}
            role="tab"
            type="button"
            aria-selected={isActive}
            onClick={() => onChange(option.id)}
            className={`relative flex items-center justify-center rounded-md font-medium whitespace-nowrap transition-all duration-150 ${sizeStyles.btn} ${
              isActive
                ? 'bg-slate-800 text-white shadow-sm border border-slate-700/80 font-semibold'
                : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/40 border border-transparent'
            }`}
          >
            {option.icon && (
              <span
                className={`shrink-0 ${
                  isActive ? 'text-indigo-400' : 'text-slate-400 group-hover:text-slate-300'
                }`}
                aria-hidden="true"
              >
                {option.icon}
              </span>
            )}
            <span>{option.label}</span>
            {option.count !== undefined && (
              <span
                className={`rounded-full font-mono shrink-0 ml-0.5 font-medium ${sizeStyles.count} ${
                  isActive
                    ? 'bg-indigo-500/20 text-indigo-300 border border-indigo-500/30'
                    : 'bg-slate-800/90 text-slate-400 border border-slate-700/40'
                }`}
              >
                {option.count}
              </span>
            )}
          </button>
        );
      })}
    </div>
  );
}
