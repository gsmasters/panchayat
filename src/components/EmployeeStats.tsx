import React from 'react';
import { Users, Building2, UserCheck, Briefcase } from 'lucide-react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell
} from 'recharts';

const COLORS = ['#1B3280', '#F7941D', '#2E7D32', '#C62828'];

const employeeData = {
  totalStaff: 34,
  workingStaff: 34,
  departments: 11,
  categories: [
    { name: 'MPDO Office', count: 11 },
    { name: 'Panchayat Secretaries', count: 23 }
  ],
  designations: [
    { name: 'Grade-III', count: 2 },
    { name: 'Grade-IV', count: 12 },
    { name: 'Grade-V', count: 9 }
  ]
};

export function EmployeeStats() {
  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Employee Statistics</h2>
        
        {/* Summary Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
          <StatCard
            icon={Users}
            label="Total Staff"
            value={employeeData.totalStaff}
            color="bg-blue-50"
            iconColor="text-blue-600"
          />
          <StatCard
            icon={UserCheck}
            label="Working Staff"
            value={employeeData.workingStaff}
            color="bg-green-50"
            iconColor="text-green-600"
          />
          <StatCard
            icon={Building2}
            label="Departments"
            value={employeeData.departments}
            color="bg-orange-50"
            iconColor="text-orange-600"
          />
          <StatCard
            icon={Briefcase}
            label="Designations"
            value={employeeData.designations.length}
            color="bg-purple-50"
            iconColor="text-purple-600"
          />
        </div>

        {/* Charts */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Staff Distribution */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-6">Staff Distribution</h3>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={employeeData.categories}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ name, percent }) => `${name} (${(percent * 100).toFixed(0)}%)`}
                  outerRadius={100}
                  fill="#8884d8"
                  dataKey="count"
                >
                  {employeeData.categories.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>

          {/* Grade Distribution */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-6">Grade Distribution</h3>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={employeeData.designations}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="count" fill="#1B3280" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </section>
  );
}

interface StatCardProps {
  icon: any;
  label: string;
  value: number;
  color: string;
  iconColor: string;
}

function StatCard({ icon: Icon, label, value, color, iconColor }: StatCardProps) {
  return (
    <div className={`${color} p-6 rounded-lg shadow-md`}>
      <div className="flex items-center gap-4">
        <div className={`${iconColor} p-3 rounded-full bg-white`}>
          <Icon className="w-6 h-6" />
        </div>
        <div>
          <p className="text-gray-600 text-sm">{label}</p>
          <p className="text-2xl font-bold text-gray-900">{value}</p>
        </div>
      </div>
    </div>
  );
}