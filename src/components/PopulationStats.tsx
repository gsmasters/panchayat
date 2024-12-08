import React from 'react';
import { Users, GraduationCap, UserCheck, UsersRound } from 'lucide-react';
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
  Cell,
} from 'recharts';

const populationData = {
  total: { male: 37546, female: 36335, total: 73881 },
  st: { male: 608, female: 566, total: 1174 },
  sc: { male: 3990, female: 3938, total: 7928 },
  others: { male: 32948, female: 31831, total: 64779 }
};

const literacyData = {
  male: { number: 19963, percentage: 53.17 },
  female: { number: 14394, percentage: 39.61 },
  total: { number: 34357, percentage: 46.50 }
};

const COLORS = ['#1B3280', '#F7941D', '#2E7D32', '#C62828'];

export function PopulationStats() {
  const barData = Object.entries(populationData).map(([category, data]) => ({
    name: category.toUpperCase(),
    Male: data.male,
    Female: data.female,
  }));

  const pieData = Object.entries(populationData).map(([category, data]) => ({
    name: category.toUpperCase(),
    value: data.total,
  }));

  return (
    <div className="space-y-8">
      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <StatCard
          icon={Users}
          label="Total Population"
          value={populationData.total.total.toLocaleString()}
        />
        <StatCard
          icon={GraduationCap}
          label="Literacy Rate"
          value={`${literacyData.total.percentage}%`}
        />
        <StatCard
          icon={UserCheck}
          label="Male Population"
          value={populationData.total.male.toLocaleString()}
        />
        <StatCard
          icon={UsersRound}
          label="Female Population"
          value={populationData.total.female.toLocaleString()}
        />
      </div>

      {/* Charts */}
      <div className="grid md:grid-cols-2 gap-8">
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-6">Population Distribution</h2>
          <ResponsiveContainer width="100%" height={400}>
            <BarChart data={barData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="Male" fill="#1B3280" />
              <Bar dataKey="Female" fill="#F7941D" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-6">Category Distribution</h2>
          <ResponsiveContainer width="100%" height={400}>
            <PieChart>
              <Pie
                data={pieData}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                outerRadius={150}
                fill="#8884d8"
                dataKey="value"
              >
                {pieData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}

function StatCard({ icon: Icon, label, value }: { icon: any; label: string; value: string }) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <Icon className="w-8 h-8 text-primary mb-2" />
      <h3 className="text-lg font-semibold">{label}</h3>
      <p className="text-2xl font-bold text-primary">{value}</p>
    </div>
  );
}