import { useState } from 'react';
import { Layout } from './components/Layout';
import { Dashboard } from './components/Dashboard';
import { DataTable } from './components/DataTable';
import { MOCK_CLIENTS, MOCK_PROJECTS, MOCK_FINANCES } from './constants';
import { cn } from './lib/utils';

export default function App() {
  const [activeTab, setActiveTab] = useState('dashboard');

  const renderContent = () => {
    switch (activeTab) {
      case 'dashboard':
        return <Dashboard />;
      case 'clients':
        return (
          <DataTable 
            title="Clientes" 
            data={MOCK_CLIENTS}
            columns={[
              { 
                header: 'Nome', 
                accessor: 'name',
                render: (val, row) => (
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-indigo-100 text-indigo-700 flex items-center justify-center font-bold text-xs">
                      {val[0]}
                    </div>
                    <div>
                      <p className="font-semibold text-slate-900">{val}</p>
                      <p className="text-xs text-slate-400">{row.email}</p>
                    </div>
                  </div>
                )
              },
              { header: 'Email', accessor: 'email' },
              { 
                header: 'Status', 
                accessor: 'status',
                render: (val) => (
                  <span className={cn(
                    "px-2.5 py-1 rounded-full text-xs font-medium",
                    val === 'Active' ? "bg-emerald-100 text-emerald-700" :
                    val === 'Pending' ? "bg-amber-100 text-amber-700" :
                    "bg-slate-100 text-slate-700"
                  )}>
                    {val === 'Active' ? 'Ativo' : val === 'Pending' ? 'Pendente' : 'Inativo'}
                  </span>
                )
              },
              { header: 'Último Contato', accessor: 'lastContact' },
            ]}
          />
        );
      case 'projects':
        return (
          <DataTable 
            title="Projetos" 
            data={MOCK_PROJECTS}
            columns={[
              { header: 'Projeto', accessor: 'name', render: (val) => <span className="font-semibold text-slate-900">{val}</span> },
              { header: 'Cliente', accessor: 'client' },
              { 
                header: 'Progresso', 
                accessor: 'progress',
                render: (val) => (
                  <div className="flex items-center gap-3 w-32">
                    <div className="flex-1 bg-slate-100 rounded-full h-1.5 overflow-hidden">
                      <div className="bg-indigo-600 h-full rounded-full" style={{ width: `${val}%` }} />
                    </div>
                    <span className="text-xs font-medium text-slate-500">{val}%</span>
                  </div>
                )
              },
              { 
                header: 'Status', 
                accessor: 'status',
                render: (val) => (
                  <span className={cn(
                    "px-2.5 py-1 rounded-full text-xs font-medium",
                    val === 'Completed' ? "bg-emerald-100 text-emerald-700" :
                    val === 'In Progress' ? "bg-blue-100 text-blue-700" :
                    "bg-amber-100 text-amber-700"
                  )}>
                    {val === 'Completed' ? 'Concluído' : val === 'In Progress' ? 'Em Andamento' : 'Em Espera'}
                  </span>
                )
              },
              { header: 'Prazo', accessor: 'dueDate' },
            ]}
          />
        );
      case 'finances':
        return (
          <DataTable 
            title="Financeiro" 
            data={MOCK_FINANCES}
            columns={[
              { header: 'Data', accessor: 'date' },
              { header: 'Descrição', accessor: 'description', render: (val) => <span className="font-medium text-slate-900">{val}</span> },
              { header: 'Categoria', accessor: 'category' },
              { 
                header: 'Valor', 
                accessor: 'amount',
                render: (val, row) => (
                  <span className={cn(
                    "font-bold",
                    row.type === 'Income' ? "text-emerald-600" : "text-rose-600"
                  )}>
                    {row.type === 'Income' ? '+' : '-'} R$ {val.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
                  </span>
                )
              },
            ]}
          />
        );
      case 'settings':
        return (
          <div className="max-w-2xl mx-auto space-y-8">
            <h1 className="text-2xl font-bold text-slate-900">Configurações</h1>
            <div className="glass-card rounded-2xl p-6 space-y-6">
              <div className="space-y-4">
                <h3 className="font-bold text-slate-800">Perfil da Empresa</h3>
                <div className="grid grid-cols-1 gap-4">
                  <div className="space-y-1">
                    <label className="text-xs font-bold text-slate-500 uppercase">Nome da Empresa</label>
                    <input type="text" defaultValue="G&L Organizer" className="w-full px-4 py-2 bg-slate-50 border-none rounded-xl text-sm focus:ring-2 focus:ring-indigo-500/20" />
                  </div>
                  <div className="space-y-1">
                    <label className="text-xs font-bold text-slate-500 uppercase">Email de Contato</label>
                    <input type="email" defaultValue="admin@gl.com" className="w-full px-4 py-2 bg-slate-50 border-none rounded-xl text-sm focus:ring-2 focus:ring-indigo-500/20" />
                  </div>
                </div>
              </div>
              <div className="pt-6 border-t border-slate-100 flex justify-end">
                <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-2 rounded-xl font-medium transition-all">
                  Salvar Alterações
                </button>
              </div>
            </div>
          </div>
        );
      default:
        return <Dashboard />;
    }
  };

  return (
    <Layout activeTab={activeTab} setActiveTab={setActiveTab}>
      {renderContent()}
    </Layout>
  );
}
