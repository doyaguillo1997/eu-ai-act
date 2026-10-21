import React from 'react';
import { EnterpriseRole } from '../../types/legal.types';
import { Building2, Check, Layers } from 'lucide-react';

export interface RoleOptionMeta {
  id: EnterpriseRole;
  label: string;
  shortLabel: string;
  articleRef: string;
}

export const ENTERPRISE_ROLE_OPTIONS: RoleOptionMeta[] = [
  {
    id: 'deployer',
    label: 'Desplegador (Empresa Usuaria)',
    shortLabel: 'Desplegador',
    articleRef: 'Art. 3.4 / Art. 26',
  },
  {
    id: 'provider',
    label: 'Proveedor (Desarrollador / Marca)',
    shortLabel: 'Proveedor',
    articleRef: 'Art. 3.3 / Art. 16',
  },
  {
    id: 'gpai_provider',
    label: 'Proveedor Modelo GPAI',
    shortLabel: 'Proveedor GPAI',
    articleRef: 'Art. 53 / Art. 55',
  },
  {
    id: 'importer',
    label: 'Importador Extra-UE',
    shortLabel: 'Importador',
    articleRef: 'Art. 3.6 / Art. 23',
  },
  {
    id: 'distributor',
    label: 'Distribuidor Comercial',
    shortLabel: 'Distribuidor',
    articleRef: 'Art. 3.7 / Art. 24',
  },
];

export interface MultiRoleSelectorProps {
  selectedRoles: EnterpriseRole[];
  onToggleRole: (role: EnterpriseRole) => void;
  onSetRoles?: (roles: EnterpriseRole[]) => void;
  compact?: boolean;
  className?: string;
}

export const MultiRoleSelector: React.FC<MultiRoleSelectorProps> = ({
  selectedRoles,
  onToggleRole,
  onSetRoles,
  compact = false,
  className = '',
}) => {
  const isDualInHouse =
    selectedRoles.length === 2 &&
    selectedRoles.includes('provider') &&
    selectedRoles.includes('deployer');

  const isAllSelected = selectedRoles.length === ENTERPRISE_ROLE_OPTIONS.length;

  const handleBadgeCycleCombo = () => {
    if (!onSetRoles) return;
    if (selectedRoles.length === 1) {
      onSetRoles(['provider', 'deployer']);
    } else if (isDualInHouse) {
      onSetRoles(ENTERPRISE_ROLE_OPTIONS.map((r) => r.id));
    } else {
      onSetRoles(['deployer']);
    }
  };

  return (
    <div
      className={`max-w-full overflow-hidden rounded-xl border border-slate-800/80 bg-slate-900/70 p-3 shadow-sm ${className}`}
    >
      <div className="flex flex-wrap items-center justify-between gap-2 mb-2.5">
        <div className="flex flex-wrap items-center gap-1.5 min-w-0">
          <Building2 className="w-4 h-4 text-indigo-400 shrink-0" />
          <span className="text-xs font-semibold text-slate-200 leading-snug">
            {compact ? 'Roles activos:' : 'Roles Activos de tu Empresa (Combinables):'}
          </span>
          <button
            type="button"
            onClick={handleBadgeCycleCombo}
            title="Haz clic para alternar combinación rápida: 1 Rol → Combo Modelo Propio (Proveedor+Desplegador) → Todos los roles"
            className="font-mono text-[10px] px-2 py-0.5 rounded-full bg-indigo-500/15 hover:bg-indigo-500/25 text-indigo-300 border border-indigo-500/30 whitespace-nowrap transition-colors cursor-pointer"
          >
            {selectedRoles.length === 1
              ? '1 rol activo ▾'
              : `${selectedRoles.length} roles combinados ▾`}
          </button>
        </div>

        {onSetRoles && (
          <div className="flex flex-wrap items-center gap-1.5 max-w-full">
            <button
              type="button"
              onClick={() => onSetRoles(['provider', 'deployer'])}
              className={`font-mono text-[10px] px-2 py-0.5 rounded border transition-colors truncate max-w-full ${
                isDualInHouse
                  ? 'bg-amber-500/20 text-amber-300 border-amber-500/50 font-semibold'
                  : 'bg-slate-800/80 text-slate-400 border-slate-700 hover:text-slate-200'
              }`}
              title="Combo típico de empresa que desarrolla su propio modelo para explotarlo internamente o con clientes (Proveedor + Desplegador)"
            >
              {compact
                ? '★ Combo Modelo Propio'
                : '★ Combo Modelo Propio (Proveedor + Desplegador)'}
            </button>
            <button
              type="button"
              onClick={() =>
                onSetRoles(
                  isAllSelected
                    ? ['deployer']
                    : ENTERPRISE_ROLE_OPTIONS.map((r) => r.id)
                )
              }
              className="font-mono text-[10px] px-2 py-0.5 rounded bg-slate-800/80 hover:bg-slate-700 text-slate-300 border border-slate-700 transition-colors whitespace-nowrap"
            >
              {isAllSelected
                ? 'Solo Desplegador'
                : compact
                ? 'Todos (5)'
                : 'Seleccionar todos'}
            </button>
          </div>
        )}
      </div>

      <div className="flex flex-wrap items-center gap-1.5 max-w-full">
        {ENTERPRISE_ROLE_OPTIONS.map((role) => {
          const isSelected = selectedRoles.includes(role.id);
          return (
            <button
              key={role.id}
              type="button"
              aria-pressed={isSelected}
              onClick={() => onToggleRole(role.id)}
              className={`inline-flex items-center gap-1.5 rounded-lg border font-medium transition-all select-none max-w-full ${
                compact ? 'px-2 py-1 text-[11px]' : 'px-3 py-1.5 text-xs'
              } ${
                isSelected
                  ? 'bg-indigo-600 text-white border-indigo-500 shadow-sm font-semibold'
                  : 'bg-slate-950/60 text-slate-400 border-slate-800 hover:border-slate-700 hover:text-slate-200'
              }`}
            >
              <span
                className={`w-3.5 h-3.5 shrink-0 rounded flex items-center justify-center border ${
                  isSelected
                    ? 'bg-amber-400 text-slate-950 border-amber-300'
                    : 'bg-slate-900 border-slate-700 text-transparent'
                }`}
              >
                <Check className="w-2.5 h-2.5 stroke-[3]" />
              </span>
              <span className="truncate">{compact ? role.shortLabel : role.label}</span>
              <span
                className={`font-mono text-[10px] px-1.5 py-0.5 rounded shrink-0 transition-colors ${
                  isSelected
                    ? 'bg-white/20 text-white font-medium border border-white/20'
                    : 'bg-slate-800/80 text-slate-400 border border-slate-700/60'
                }`}
              >
                {role.articleRef}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
};
