import React from 'react';
import { 
  TrendingUp, 
  Users, 
  Briefcase, 
  DollarSign,
  ArrowUpRight,
  ArrowDownRight
} from 'lucide-react';
import { 
  AreaChart, 
  Area, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  BarChart,
  Bar,
  Cell
} from 'recharts';
import { motion } from 'motion/react';
import { cn } from '../lib/utils';
import { REVENUE_DATA, MOCK_PROJECTS } from '../constants';

const StatCard = ({ title, value, icon: Icon, trend, trendValue, color }: any) => (
  <div className="glass-card p-6 rounded-2xl">
    <div className="flex items-start justify-between">
      <div>
        <p className="text-sm font-medium text-slate-500">{title}</p>
        <h3 className="text-2xl font-bold text-slate-900 mt-1">{value}</h3>
        <div className="flex items-center mt-2">
          {trend === 'up' ? (
            <ArrowUpRight className="w-4 h-4 text-emerald-500 mr-1" />
          ) : (
            <ArrowDownRight className="w-4 h-4 text-rose-500 mr-1" />
          )}
          <span className={trend === 'up' ? 'text-emerald-600 text-xs font-medium' : 'text-rose-600 text-xs font-medium'}>
            {trendValue}
          </span>
          <span className="text-slate-400 text-xs ml-1">vs mês passado</span>
        </div>
      </div>
      <div className={`p-3 rounded-xl bg-${color}-50 text-${color}-600`}>
        <Icon className="w-6 h-6" />
      </div>
    </div>
  </div>
);

export const Dashboard: React.FC = () => {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-2xl font-bold text-slate-900">Olá, G&L Admin</h1>
        <p className="text-slate-500">Aqui está o que está acontecendo na sua empresa hoje.</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard 
          title="Receita Total" 
          value="R$ 45.200,00" 
          icon={DollarSign} 
          trend="up" 
          trendValue="+12.5%" 
          color="indigo"
        />
        <StatCard 
          title="Projetos Ativos" 
          value="12" 
          icon={Briefcase} 
          trend="up" 
          trendValue="+2" 
          color="blue"
        />
        <StatCard 
          title="Novos Clientes" 
          value="8" 
          icon={Users} 
          trend="down" 
          trendValue="-5.2%" 
          color="purple"
        />
        <StatCard 
          title="Taxa de Conversão" 
          value="24.8%" 
          icon={TrendingUp} 
          trend="up" 
          trendValue="+4.1%" 
          color="emerald"
        />
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 glass-card p-6 rounded-2xl">
          <div className="flex items-center justify-between mb-6">
            <h3 className="font-bold text-slate-800">Visão Geral de Receita</h3>
            <select className="bg-slate-50 border-none text-sm rounded-lg focus:ring-0 text-slate-600">
              <option>Últimos 6 meses</option>
              <option>Último ano</option>
            </select>
          </div>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={REVENUE_DATA}>
                <defs>
                  <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#4f46e5" stopOpacity={0.1}/>
                    <stop offset="95%" stopColor="#4f46e5" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                <XAxis 
                  dataKey="name" 
                  axisLine={false} 
                  tickLine={false} 
                  tick={{ fill: '#94a3b8', fontSize: 12 }}
                  dy={10}
                />
                <YAxis 
                  axisLine={false} 
                  tickLine={false} 
                  tick={{ fill: '#94a3b8', fontSize: 12 }}
                />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: '#fff', 
                    borderRadius: '12px', 
                    border: 'none', 
                    boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)' 
                  }} 
                />
                <Area 
                  type="monotone" 
                  dataKey="revenue" 
                  stroke="#4f46e5" 
                  strokeWidth={3}
                  fillOpacity={1} 
                  fill="url(#colorRevenue)" 
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="glass-card p-6 rounded-2xl">
          <h3 className="font-bold text-slate-800 mb-6">Status dos Projetos</h3>
          <div className="space-y-6">
            {MOCK_PROJECTS.slice(0, 4).map((project) => (
              <div key={project.id} className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="font-medium text-slate-700">{project.name}</span>
                  <span className="text-slate-500">{project.progress}%</span>
                </div>
                <div className="w-full bg-slate-100 rounded-full h-2 overflow-hidden">
                  <motion.div 
                    initial={{ width: 0 }}
                    animate={{ width: `${project.progress}%` }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    className={cn(
                      "h-full rounded-full",
                      project.progress === 100 ? "bg-emerald-500" : "bg-indigo-600"
                    )}
                  />
                </div>
              </div>
            ))}
          </div>
          <button className="w-full mt-8 py-2.5 rounded-xl border border-slate-200 text-sm font-medium text-slate-600 hover:bg-slate-50 transition-colors">
            Ver todos os projetos
          </button>
        </div>
      </div>

      {/* Recent Activity */}
      <div className="glass-card rounded-2xl overflow-hidden">
        <div className="p-6 border-b border-slate-100 flex items-center justify-between">
          <h3 className="font-bold text-slate-800">Atividade Recente</h3>
          <button className="text-sm text-indigo-600 font-medium hover:underline">Ver tudo</button>
        </div>
        <div className="divide-y divide-slate-50">
          {[
            { user: 'Ana Silva', action: 'completou o projeto', target: 'Redesign Website', time: '2 horas atrás', color: 'bg-emerald-100 text-emerald-600' },
            { user: 'Carlos Oliveira', action: 'adicionou novo cliente', target: 'TechFlow', time: '5 horas atrás', color: 'bg-blue-100 text-blue-600' },
            { user: 'Sistema', action: 'gerou relatório mensal', target: 'Financeiro Março', time: 'Ontem', color: 'bg-slate-100 text-slate-600' },
          ].map((item, i) => (
            <div key={i} className="p-4 flex items-center gap-4 hover:bg-slate-50 transition-colors">
              <div className={cn("w-10 h-10 rounded-full flex items-center justify-center font-bold", item.color)}>
                {item.user[0]}
              </div>
              <div className="flex-1">
                <p className="text-sm text-slate-600">
                  <span className="font-bold text-slate-900">{item.user}</span> {item.action} <span className="font-medium text-indigo-600">{item.target}</span>
                </p>
                <p className="text-xs text-slate-400 mt-0.5">{item.time}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
