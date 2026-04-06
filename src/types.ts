export interface Client {
  id: string;
  name: string;
  email: string;
  status: 'Active' | 'Inactive' | 'Pending';
  lastContact: string;
}

export interface Project {
  id: string;
  name: string;
  client: string;
  progress: number;
  dueDate: string;
  status: 'In Progress' | 'Completed' | 'On Hold';
}

export interface FinancialRecord {
  id: string;
  date: string;
  description: string;
  amount: number;
  type: 'Income' | 'Expense';
  category: string;
}

export interface DashboardStats {
  totalRevenue: number;
  activeProjects: number;
  newClients: number;
  pendingTasks: number;
}
