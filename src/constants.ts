import { Client, Project, FinancialRecord } from './types';

export const MOCK_CLIENTS: Client[] = [
  { id: '1', name: 'TechFlow Solutions', email: 'contact@techflow.com', status: 'Active', lastContact: '2024-03-15' },
  { id: '2', name: 'Global Logistics Inc', email: 'info@globallogistics.com', status: 'Active', lastContact: '2024-03-20' },
  { id: '3', name: 'Creative Minds Agency', email: 'hello@creativeminds.io', status: 'Pending', lastContact: '2024-03-18' },
  { id: '4', name: 'Urban Real Estate', email: 'sales@urbanre.com', status: 'Inactive', lastContact: '2024-02-10' },
  { id: '5', name: 'HealthFirst Systems', email: 'support@healthfirst.org', status: 'Active', lastContact: '2024-03-22' },
];

export const MOCK_PROJECTS: Project[] = [
  { id: '1', name: 'Website Redesign', client: 'TechFlow Solutions', progress: 75, dueDate: '2024-04-10', status: 'In Progress' },
  { id: '2', name: 'Supply Chain Audit', client: 'Global Logistics Inc', progress: 100, dueDate: '2024-03-01', status: 'Completed' },
  { id: '3', name: 'Brand Identity', client: 'Creative Minds Agency', progress: 30, dueDate: '2024-05-15', status: 'In Progress' },
  { id: '4', name: 'Mobile App Dev', client: 'HealthFirst Systems', progress: 10, dueDate: '2024-06-20', status: 'On Hold' },
];

export const MOCK_FINANCES: FinancialRecord[] = [
  { id: '1', date: '2024-03-20', description: 'Project Milestone: TechFlow', amount: 5000, type: 'Income', category: 'Services' },
  { id: '2', date: '2024-03-18', description: 'Cloud Hosting Subscription', amount: 250, type: 'Expense', category: 'Infrastructure' },
  { id: '3', date: '2024-03-15', description: 'Consulting Fee: Global Logistics', amount: 3200, type: 'Income', category: 'Consulting' },
  { id: '4', date: '2024-03-10', description: 'Office Supplies', amount: 120, type: 'Expense', category: 'Operations' },
  { id: '5', date: '2024-03-05', description: 'Software Licenses', amount: 800, type: 'Expense', category: 'Software' },
];

export const REVENUE_DATA = [
  { name: 'Jan', revenue: 4000, expenses: 2400 },
  { name: 'Feb', revenue: 3000, expenses: 1398 },
  { name: 'Mar', revenue: 9800, expenses: 2000 },
  { name: 'Apr', revenue: 3908, expenses: 2780 },
  { name: 'May', revenue: 4800, expenses: 1890 },
  { name: 'Jun', revenue: 3800, expenses: 2390 },
];
