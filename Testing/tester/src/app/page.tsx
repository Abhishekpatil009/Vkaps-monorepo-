'use client';

import React, { useState, useEffect, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Building2, 
  Users, 
  CreditCard, 
  Activity, 
  Search, 
  Filter, 
  MoreHorizontal, 
  CheckCircle, 
  AlertCircle, 
  X, 
  Clock,
  Download, 
  ArrowUpDown,
  Briefcase,
  ChevronRight,
  Mail,
  Calendar,
  DollarSign
} from 'lucide-react';

// We assume Header is available from your previous file
// import Header from '@/components/Header';

// --- Types ---

interface Organization {
  id: string;
  name: string;
  email: string;
  plan: 'Starter' | 'Business' | 'Enterprise';
  status: 'Active' | 'Trial' | 'Suspended';
  totalCustomers: number;
  totalStaff: number;
  totalInvoices: number;
  totalDue: number; // stored in cents
  createdAt: string;
  adminName: string;
  paymentMethod: string;
}

// --- Mock Data ---

const MOCK_ORGS: Organization[] = [
  { id: '1', name: 'Acme Corp', email: 'admin@acme.com', plan: 'Enterprise', status: 'Active', totalCustomers: 1240, totalStaff: 45, totalInvoices: 120, totalDue: 0, createdAt: '2023-01-15', adminName: 'Alice Smith', paymentMethod: 'Visa •••• 4242' },
  { id: '2', name: 'TechStart Inc', email: 'contact@techstart.io', plan: 'Starter', status: 'Trial', totalCustomers: 50, totalStaff: 5, totalInvoices: 3, totalDue: 0, createdAt: '2023-10-01', adminName: 'Bob Jones', paymentMethod: 'Mastercard •••• 8888' },
  { id: '3', name: 'Global Logistics', email: 'billing@glogistics.net', plan: 'Business', status: 'Suspended', totalCustomers: 300, totalStaff: 12, totalInvoices: 45, totalDue: 25000, createdAt: '2023-05-20', adminName: 'Charlie Day', paymentMethod: 'Visa •••• 1111' },
  { id: '4', name: 'Designify', email: 'hello@designify.com', plan: 'Business', status: 'Active', totalCustomers: 450, totalStaff: 20, totalInvoices: 89, totalDue: 0, createdAt: '2023-03-10', adminName: 'Dana Lee', paymentMethod: 'Amex •••• 3000' },
  { id: '5', name: 'HealthPlus', email: 'admin@healthplus.org', plan: 'Enterprise', status: 'Active', totalCustomers: 2500, totalStaff: 120, totalInvoices: 340, totalDue: 12000, createdAt: '2022-11-05', adminName: 'Evan Wright', paymentMethod: 'Visa •••• 5555' },
  { id: '6', name: 'EduLearn', email: 'support@edulearn.edu', plan: 'Starter', status: 'Trial', totalCustomers: 20, totalStaff: 3, totalInvoices: 1, totalDue: 0, createdAt: '2023-10-25', adminName: 'Fiona Green', paymentMethod: 'N/A' },
  { id: '7', name: 'RetailPro', email: 'sales@retailpro.com', plan: 'Business', status: 'Active', totalCustomers: 890, totalStaff: 35, totalInvoices: 150, totalDue: 0, createdAt: '2023-02-14', adminName: 'George King', paymentMethod: 'Visa •••• 9999' },
];

// --- Components ---

const StatusBadge = ({ status }: { status: Organization['status'] }) => {
  const styles = {
    Active: 'bg-green-50 text-green-700 border-green-200',
    Trial: 'bg-yellow-50 text-yellow-700 border-yellow-200',
    Suspended: 'bg-red-50 text-red-700 border-red-200',
  };

  const icons = {
    Active: CheckCircle,
    Trial: Clock,
    Suspended: AlertCircle,
  };

  const Icon = icons[status];

  return (
    <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium border ${styles[status]}`}>
      <Icon size={12} />
      {status}
    </span>
  );
};

const PlanBadge = ({ plan }: { plan: Organization['plan'] }) => {
  const styles = {
    Starter: 'bg-gray-100 text-gray-600',
    Business: 'bg-blue-50 text-blue-600',
    Enterprise: 'bg-purple-50 text-purple-600',
  };
  return (
    <span className={`px-2.5 py-0.5 rounded-md text-xs font-semibold ${styles[plan]}`}>
      {plan}
    </span>
  );
};

const StatsCard = ({ title, value, label, icon: Icon, delay }: any) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.4, delay }}
    className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow"
  >
    <div className="flex items-start justify-between mb-4">
      <div className="p-3 bg-orange-50 rounded-xl text-orange-600">
        <Icon size={24} />
      </div>
      <span className="text-xs font-semibold bg-green-50 text-green-600 px-2 py-1 rounded-full">
        +12%
      </span>
    </div>
    <div className="space-y-1">
      <h3 className="text-2xl font-bold text-gray-900">{value}</h3>
      <p className="text-sm text-gray-500">{title}</p>
    </div>
  </motion.div>
);

const Drawer = ({ isOpen, onClose, org }: { isOpen: boolean; onClose: () => void; org: Organization | null }) => {
  return (
    <AnimatePresence>
      {isOpen && org && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/20 backdrop-blur-sm z-50"
          />
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed right-0 top-0 bottom-0 w-full max-w-md bg-white shadow-2xl z-50 border-l border-gray-100 flex flex-col"
          >
            {/* Drawer Header */}
            <div className="p-6 border-b border-gray-100 flex items-center justify-between bg-gray-50/50">
              <div>
                <h2 className="text-xl font-bold text-gray-900">{org.name}</h2>
                <p className="text-sm text-gray-500 mt-1">{org.email}</p>
              </div>
              <button onClick={onClose} className="p-2 hover:bg-gray-200 rounded-full transition-colors text-gray-500">
                <X size={20} />
              </button>
            </div>

            {/* Drawer Content */}
            <div className="flex-1 overflow-y-auto p-6 space-y-8">
              
              {/* Status Section */}
              <div className="flex items-center justify-between p-4 bg-white border border-gray-100 rounded-xl shadow-sm">
                <div>
                  <p className="text-sm text-gray-500 mb-1">Current Status</p>
                  <StatusBadge status={org.status} />
                </div>
                <div className="text-right">
                  <p className="text-sm text-gray-500 mb-1">Current Plan</p>
                  <PlanBadge plan={org.plan} />
                </div>
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 bg-gray-50 rounded-xl">
                  <p className="text-xs text-gray-500 uppercase tracking-wider mb-1">Users</p>
                  <p className="text-xl font-bold text-gray-900">{org.totalStaff}</p>
                </div>
                <div className="p-4 bg-gray-50 rounded-xl">
                  <p className="text-xs text-gray-500 uppercase tracking-wider mb-1">Customers</p>
                  <p className="text-xl font-bold text-gray-900">{org.totalCustomers}</p>
                </div>
                <div className="p-4 bg-gray-50 rounded-xl">
                  <p className="text-xs text-gray-500 uppercase tracking-wider mb-1">Invoices</p>
                  <p className="text-xl font-bold text-gray-900">{org.totalInvoices}</p>
                </div>
                <div className="p-4 bg-gray-50 rounded-xl">
                  <p className="text-xs text-gray-500 uppercase tracking-wider mb-1">Due Amount</p>
                  <p className={`text-xl font-bold ${org.totalDue > 0 ? 'text-red-600' : 'text-gray-900'}`}>
                    ${(org.totalDue / 100).toFixed(2)}
                  </p>
                </div>
              </div>

              {/* Admin Details */}
              <div className="space-y-3">
                <h3 className="text-sm font-bold text-gray-900 uppercase tracking-wider">Primary Contact</h3>
                <div className="flex items-center gap-4 p-4 border border-gray-100 rounded-xl">
                  <div className="h-10 w-10 rounded-full bg-orange-100 flex items-center justify-center text-orange-600 font-bold">
                    {org.adminName.charAt(0)}
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-900">{org.adminName}</p>
                    <p className="text-sm text-gray-500">{org.email}</p>
                  </div>
                </div>
              </div>

              {/* Payment Info */}
              <div className="space-y-3">
                <h3 className="text-sm font-bold text-gray-900 uppercase tracking-wider">Payment Method</h3>
                <div className="flex items-center gap-3 text-sm text-gray-600">
                  <CreditCard size={16} />
                  <span>{org.paymentMethod}</span>
                </div>
              </div>
            </div>

            {/* Drawer Footer Actions */}
            <div className="p-6 border-t border-gray-100 bg-gray-50 space-y-3">
              <button className="w-full py-2.5 bg-orange-500 hover:bg-orange-600 text-white rounded-xl font-medium transition-colors shadow-lg shadow-orange-500/20">
                View All Invoices
              </button>
              {org.status !== 'Suspended' ? (
                <button className="w-full py-2.5 bg-white border border-gray-200 text-red-600 hover:bg-red-50 rounded-xl font-medium transition-colors">
                  Suspend Organization
                </button>
              ) : (
                <button className="w-full py-2.5 bg-white border border-gray-200 text-green-600 hover:bg-green-50 rounded-xl font-medium transition-colors">
                  Re-activate Organization
                </button>
              )}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

// --- Main Page Component ---

export default function SuperAdminDashboard() {
  const [data, setData] = useState<Organization[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [search, setSearch] = useState('');
  const [statusFilter, setStatusFilter] = useState<'All' | Organization['status']>('All');
  const [selectedOrg, setSelectedOrg] = useState<Organization | null>(null);

  // Simulate Fetch
  useEffect(() => {
    setTimeout(() => {
      setData(MOCK_ORGS);
      setIsLoading(false);
    }, 1000);
  }, []);

  // Filter Logic
  const filteredData = useMemo(() => {
    return data.filter(org => {
      const matchesSearch = org.name.toLowerCase().includes(search.toLowerCase()) || 
                            org.email.toLowerCase().includes(search.toLowerCase());
      const matchesStatus = statusFilter === 'All' || org.status === statusFilter;
      return matchesSearch && matchesStatus;
    });
  }, [data, search, statusFilter]);

  // Stats Calculation
  const stats = useMemo(() => {
    return {
      total: data.length,
      active: data.filter(o => o.status === 'Active').length,
      revenue: data.reduce((acc, curr) => acc + (curr.plan === 'Enterprise' ? 299 : curr.plan === 'Business' ? 99 : 29), 0) * 1000 // Mock revenue
    };
  }, [data]);

  return (
    <div className="min-h-screen bg-gray-50/50 font-sans">
      {/* <Header /> Using the provided Header component */}

      <main className="max-w-7xl mx-auto px-6 py-8">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
          <div>
            <h1 className="text-2xl font-bold text-gray-900 tracking-tight">Dashboard Overview</h1>
            <p className="text-sm text-gray-500 mt-1">Monitor all registered organizations and performance.</p>
          </div>
          <button className="flex items-center gap-2 bg-white border border-gray-200 px-4 py-2 rounded-xl text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors shadow-sm">
            <Download size={16} />
            Export Report
          </button>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          <StatsCard title="Total Organizations" value={stats.total} icon={Building2} delay={0.1} />
          <StatsCard title="Active Orgs" value={stats.active} icon={Activity} delay={0.2} />
          <StatsCard title="Total Customers" value="5,230" icon={Users} delay={0.3} />
          <StatsCard title="Monthly Revenue" value={`$${(stats.revenue / 100).toLocaleString()}`} icon={CreditCard} delay={0.4} />
        </div>

        {/* Filters & Actions Bar */}
        <div className="bg-white p-4 rounded-2xl border border-gray-100 shadow-sm mb-6 flex flex-col md:flex-row gap-4 items-center justify-between">
          <div className="relative w-full md:w-96 group">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-orange-500 transition-colors" size={18} />
            <input 
              type="text" 
              placeholder="Search by name or email..." 
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-sm outline-none focus:ring-2 focus:ring-orange-100 focus:border-orange-500 transition-all"
            />
          </div>
          
          <div className="flex items-center gap-3 w-full md:w-auto">
            <div className="flex items-center gap-2 px-3 py-2 bg-gray-50 rounded-xl border border-gray-200">
              <Filter size={16} className="text-gray-500" />
              <select 
                value={statusFilter}
                onChange={(e) => setStatusFilter(e.target.value as any)}
                className="bg-transparent text-sm text-gray-700 outline-none cursor-pointer"
              >
                <option value="All">All Status</option>
                <option value="Active">Active</option>
                <option value="Trial">Trial</option>
                <option value="Suspended">Suspended</option>
              </select>
            </div>
            
            <button className="flex items-center gap-2 px-3 py-2 bg-gray-50 rounded-xl border border-gray-200 text-sm text-gray-700 hover:bg-gray-100 transition-colors cursor-pointer">
              <ArrowUpDown size={16} />
              Sort
            </button>
          </div>
        </div>

        {/* Organizations Table */}
        <div className="bg-white border border-gray-100 rounded-2xl shadow-sm overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-gray-50/50 border-b border-gray-100 text-xs font-semibold text-gray-500 uppercase tracking-wider">
                  <th className="px-6 py-4">Organization</th>
                  <th className="px-6 py-4">Status</th>
                  <th className="px-6 py-4">Plan</th>
                  <th className="px-6 py-4 text-right">Users</th>
                  <th className="px-6 py-4 text-right">Due Amount</th>
                  <th className="px-6 py-4 text-right">Joined</th>
                  <th className="px-6 py-4 text-center">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-50">
                {isLoading ? (
                  // Skeleton Loading Rows
                  [...Array(5)].map((_, i) => (
                    <tr key={i} className="animate-pulse">
                      <td className="px-6 py-4"><div className="h-4 w-32 bg-gray-100 rounded"></div><div className="h-3 w-20 bg-gray-50 rounded mt-2"></div></td>
                      <td className="px-6 py-4"><div className="h-6 w-20 bg-gray-100 rounded-full"></div></td>
                      <td className="px-6 py-4"><div className="h-4 w-24 bg-gray-100 rounded"></div></td>
                      <td className="px-6 py-4 text-right"><div className="h-4 w-8 bg-gray-100 rounded ml-auto"></div></td>
                      <td className="px-6 py-4 text-right"><div className="h-4 w-16 bg-gray-100 rounded ml-auto"></div></td>
                      <td className="px-6 py-4 text-right"><div className="h-4 w-24 bg-gray-100 rounded ml-auto"></div></td>
                      <td className="px-6 py-4 text-center"><div className="h-8 w-8 bg-gray-100 rounded-full mx-auto"></div></td>
                    </tr>
                  ))
                ) : filteredData.length > 0 ? (
                  filteredData.map((org) => (
                    <tr key={org.id} className="group hover:bg-orange-50/30 transition-colors">
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-3">
                          <div className="h-10 w-10 rounded-lg bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center text-gray-500 font-bold text-lg">
                            {org.name.charAt(0)}
                          </div>
                          <div>
                            <p className="text-sm font-semibold text-gray-900">{org.name}</p>
                            <p className="text-xs text-gray-500">{org.email}</p>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <StatusBadge status={org.status} />
                      </td>
                      <td className="px-6 py-4">
                        <PlanBadge plan={org.plan} />
                      </td>
                      <td className="px-6 py-4 text-right text-sm text-gray-600">
                        <div className="flex flex-col">
                          <span className="font-medium">{org.totalCustomers} <span className="text-gray-400 text-xs">customers</span></span>
                          <span className="text-xs text-gray-400">{org.totalStaff} staff</span>
                        </div>
                      </td>
                      <td className="px-6 py-4 text-right">
                        <p className={`text-sm font-medium ${org.totalDue > 0 ? 'text-red-600' : 'text-gray-900'}`}>
                          {org.totalDue > 0 ? `$${(org.totalDue / 100).toFixed(2)}` : '-'}
                        </p>
                        {org.totalDue > 0 && <span className="text-[10px] text-red-500 font-medium">Overdue</span>}
                      </td>
                      <td className="px-6 py-4 text-right text-sm text-gray-500">
                        {new Date(org.createdAt).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                      </td>
                      <td className="px-6 py-4 text-center">
                        <button 
                          onClick={() => setSelectedOrg(org)}
                          className="p-2 rounded-lg text-gray-400 hover:text-orange-600 hover:bg-orange-50 transition-all"
                        >
                          <MoreHorizontal size={18} />
                        </button>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan={7} className="px-6 py-12 text-center">
                      <div className="flex flex-col items-center justify-center">
                        <div className="bg-gray-50 p-4 rounded-full mb-3">
                          <Search size={24} className="text-gray-400" />
                        </div>
                        <p className="text-gray-900 font-medium">No organizations found</p>
                        <p className="text-gray-500 text-sm mt-1">Try adjusting your filters or search query.</p>
                      </div>
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
          
          {/* Pagination Footer */}
          <div className="px-6 py-4 border-t border-gray-100 flex items-center justify-between bg-gray-50/30">
            <p className="text-xs text-gray-500">Showing <span className="font-semibold text-gray-900">{filteredData.length}</span> of <span className="font-semibold text-gray-900">{MOCK_ORGS.length}</span> results</p>
            <div className="flex items-center gap-2">
              <button className="px-3 py-1.5 border border-gray-200 rounded-lg text-xs font-medium text-gray-600 disabled:opacity-50 hover:bg-white transition-colors" disabled>Previous</button>
              <button className="px-3 py-1.5 border border-gray-200 rounded-lg text-xs font-medium text-gray-600 hover:bg-white transition-colors">Next</button>
            </div>
          </div>
        </div>
      </main>

      {/* Detail Drawer */}
      <Drawer 
        isOpen={!!selectedOrg} 
        onClose={() => setSelectedOrg(null)} 
        org={selectedOrg} 
      />
    </div>
  );
}