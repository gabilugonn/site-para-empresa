import React, { useState } from 'react';
import { 
  LayoutDashboard, 
  Users, 
  Briefcase, 
  Wallet, 
  Settings, 
  Menu, 
  X, 
  Bell, 
  Search,
  LogOut
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { cn } from '../lib/utils';

interface LayoutProps {
  children: React.ReactNode;
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

export const Layout: React.FC<LayoutProps> = ({ children, activeTab, setActiveTab }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const menuItems = [
    { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
    { id: 'clients', label: 'Clientes', icon: Users },
    { id: 'projects', label: 'Projetos', icon: Briefcase },
    { id: 'finances', label: 'Financeiro', icon: Wallet },
    { id: 'settings', label: 'Configurações', icon: Settings },
  ];

  const handleTabClick = (id: string) => {
    setActiveTab(id);
    if (window.innerWidth < 1024) {
      setIsSidebarOpen(false);
    }
  };

  return (
    <div className="min-h-screen flex bg-slate-50">
      {/* Backdrop for mobile */}
      <AnimatePresence>
        {isSidebarOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsSidebarOpen(false)}
            className="fixed inset-0 bg-slate-900/20 backdrop-blur-sm z-40 lg:hidden"
          />
        )}
      </AnimatePresence>

      {/* Sidebar */}
      <aside 
        className={cn(
          "fixed inset-y-0 left-0 z-50 w-64 bg-white border-r border-slate-200 transition-transform duration-300 ease-in-out lg:relative lg:translate-x-0",
          !isSidebarOpen && "-translate-x-full lg:w-20"
        )}
      >
        <div className="h-full flex flex-col">
          {/* Logo */}
          <div className="h-16 flex items-center px-6 border-b border-slate-100 justify-between">
            <div className="flex items-center">
              <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center text-white font-bold text-xl">
                G
              </div>
              {isSidebarOpen && (
                <span className="ml-3 font-bold text-xl tracking-tight text-slate-800 truncate">G&L Organizer</span>
              )}
            </div>
            {isSidebarOpen && (
              <button 
                onClick={() => setIsSidebarOpen(false)}
                className="p-2 rounded-lg hover:bg-slate-100 lg:hidden"
              >
                <X className="w-5 h-5 text-slate-500" />
              </button>
            )}
          </div>

          {/* Navigation */}
          <nav className="flex-1 py-6 px-3 space-y-1">
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleTabClick(item.id)}
                className={cn(
                  "w-full flex items-center px-3 py-2.5 rounded-xl transition-all duration-200 group",
                  activeTab === item.id 
                    ? "bg-indigo-50 text-indigo-700" 
                    : "text-slate-500 hover:bg-slate-50 hover:text-slate-900"
                )}
              >
                <item.icon className={cn(
                  "w-5 h-5 transition-colors",
                  activeTab === item.id ? "text-indigo-600" : "text-slate-400 group-hover:text-slate-600"
                )} />
                {isSidebarOpen && (
                  <span className="ml-3 font-medium">{item.label}</span>
                )}
                {activeTab === item.id && isSidebarOpen && (
                  <motion.div 
                    layoutId="active-pill"
                    className="ml-auto w-1.5 h-1.5 rounded-full bg-indigo-600"
                  />
                )}
              </button>
            ))}
          </nav>

          {/* User Profile */}
          <div className="p-4 border-t border-slate-100">
            <div className={cn(
              "flex items-center p-2 rounded-xl bg-slate-50",
              !isSidebarOpen && "justify-center"
            )}>
              <div className="w-8 h-8 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-700 font-semibold">
                GL
              </div>
              {isSidebarOpen && (
                <div className="ml-3 overflow-hidden">
                  <p className="text-sm font-semibold text-slate-900 truncate">G&L Admin</p>
                  <p className="text-xs text-slate-500 truncate">admin@gl.com</p>
                </div>
              )}
              {isSidebarOpen && (
                <button className="ml-auto p-1.5 text-slate-400 hover:text-slate-600">
                  <LogOut className="w-4 h-4" />
                </button>
              )}
            </div>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col min-w-0 overflow-hidden">
        {/* Header */}
        <header className="h-16 bg-white border-b border-slate-200 flex items-center justify-between px-4 lg:px-8 sticky top-0 z-40">
          <div className="flex items-center gap-4">
            <button 
              onClick={() => setIsSidebarOpen(!isSidebarOpen)}
              className="p-2 rounded-lg hover:bg-slate-100 lg:flex"
            >
              <Menu className="w-5 h-5 text-slate-600" />
            </button>
            <div className="hidden md:flex items-center bg-slate-100 rounded-full px-4 py-1.5 w-64 lg:w-96">
              <Search className="w-4 h-4 text-slate-400" />
              <input 
                type="text" 
                placeholder="Pesquisar dados..." 
                className="bg-transparent border-none focus:ring-0 text-sm ml-2 w-full placeholder:text-slate-400"
              />
            </div>
          </div>

          <div className="flex items-center gap-3">
            <button className="p-2 rounded-full hover:bg-slate-100 relative">
              <Bell className="w-5 h-5 text-slate-600" />
              <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-red-500 rounded-full border-2 border-white"></span>
            </button>
            <div className="h-8 w-px bg-slate-200 mx-2 hidden sm:block"></div>
            <div className="hidden sm:block text-right">
              <p className="text-sm font-medium text-slate-900">Segunda-feira</p>
              <p className="text-xs text-slate-500">06 de Abril, 2026</p>
            </div>
          </div>
        </header>

        {/* Content Area */}
        <main className="flex-1 overflow-y-auto p-4 lg:p-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
            >
              {children}
            </motion.div>
          </AnimatePresence>
        </main>
      </div>
    </div>
  );
};
