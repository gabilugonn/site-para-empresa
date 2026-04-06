import React from 'react';
import { MoreHorizontal, Search, Filter, Plus } from 'lucide-react';
import { cn } from '../lib/utils';

interface DataTableProps {
  title: string;
  data: any[];
  columns: {
    header: string;
    accessor: string;
    render?: (val: any, row: any) => React.ReactNode;
  }[];
}

export const DataTable: React.FC<DataTableProps> = ({ title, data, columns }) => {
  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">{title}</h1>
          <p className="text-slate-500 text-sm">Gerencie e organize os dados de {title.toLowerCase()}.</p>
        </div>
        <button className="flex items-center justify-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2.5 rounded-xl font-medium transition-all shadow-lg shadow-indigo-200">
          <Plus className="w-4 h-4" />
          Adicionar Novo
        </button>
      </div>

      <div className="glass-card rounded-2xl overflow-hidden">
        <div className="p-4 border-b border-slate-100 flex flex-col sm:flex-row gap-4 items-center justify-between">
          <div className="relative w-full sm:w-72">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input 
              type="text" 
              placeholder="Pesquisar..." 
              className="w-full pl-10 pr-4 py-2 bg-slate-50 border-none rounded-xl text-sm focus:ring-2 focus:ring-indigo-500/20"
            />
          </div>
          <div className="flex items-center gap-2 w-full sm:w-auto">
            <button className="flex-1 sm:flex-none flex items-center justify-center gap-2 px-4 py-2 border border-slate-200 rounded-xl text-sm font-medium text-slate-600 hover:bg-slate-50">
              <Filter className="w-4 h-4" />
              Filtros
            </button>
            <button className="flex-1 sm:flex-none px-4 py-2 border border-slate-200 rounded-xl text-sm font-medium text-slate-600 hover:bg-slate-50">
              Exportar
            </button>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-slate-50/50">
                {columns.map((col, i) => (
                  <th key={i} className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider">
                    {col.header}
                  </th>
                ))}
                <th className="px-6 py-4 text-right"></th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {data.map((row, i) => (
                <tr key={i} className="hover:bg-slate-50/50 transition-colors group">
                  {columns.map((col, j) => (
                    <td key={j} className="px-6 py-4 text-sm text-slate-600">
                      {col.render ? col.render(row[col.accessor], row) : row[col.accessor]}
                    </td>
                  ))}
                  <td className="px-6 py-4 text-right">
                    <button className="p-2 rounded-lg hover:bg-slate-100 text-slate-400 opacity-0 group-hover:opacity-100 transition-opacity">
                      <MoreHorizontal className="w-4 h-4" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="p-4 border-t border-slate-100 flex items-center justify-between">
          <p className="text-xs text-slate-500">Mostrando {data.length} resultados</p>
          <div className="flex items-center gap-2">
            <button className="px-3 py-1 border border-slate-200 rounded-lg text-xs font-medium text-slate-400 cursor-not-allowed">Anterior</button>
            <button className="px-3 py-1 border border-slate-200 rounded-lg text-xs font-medium text-indigo-600 hover:bg-indigo-50">Próximo</button>
          </div>
        </div>
      </div>
    </div>
  );
};
