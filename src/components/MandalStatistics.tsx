import React from 'react';
import { motion } from 'framer-motion';
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
  Cell
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

export function MandalStatistics() {
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
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white rounded-xl shadow-sm p-8 space-y-8"
    >
      <h2 className="text-2xl font-bold text-gray-900">Mandal Statistics</h2>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <StatCard
          icon={Users}
          label="Total Population"
          value={populationData.total.total.toLocaleString()}
          color="bg-blue-50"
          iconColor="text-blue-600"
        />
        <StatCard
          icon={GraduationCap}
          label="Literacy Rate"
          value={`${literacyData.total.percentage}%`}
          color="bg-green-50"
          iconColor="text-green-600"
        />
        <StatCard
          icon={UserCheck}
          label="Male Population"
          value={populationData.total.male.toLocaleString()}
          color="bg-orange-50"
          iconColor="text-orange-600"
        />
        <StatCard
          icon={UsersRound}
          label="Female Population"
          value={populationData.total.female.toLocaleString()}
          color="bg-purple-50"
          iconColor="text-purple-600"
        />
      </div>

      {/* Charts */}
      <div className="grid md:grid-cols-2 gap-8">
        <div className="bg-gray-50 p-6 rounded-xl">
          <h3 className="text-lg font-semibold mb-6">Population Distribution</h3>
          <ResponsiveContainer width="100%" height={300}>
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

        <div className="bg-gray-50 p-6 rounded-xl">
          <h3 className="text-lg font-semibold mb-6">Category Distribution</h3>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={pieData}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                outerRadius={100}
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
    </motion.section>
  );
}

interface StatCardProps {
  icon: any;
  label: string;
  value: string;
  color: string;
  iconColor: string;
}

function StatCard({ icon: Icon, label, value, color, iconColor }: StatCardProps) {
  return (
    <motion.div
      className={`${color} p-6 rounded-xl`}
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.2 }}
    >
      <div className="flex items-center gap-4">
        <div className={`${iconColor} p-3 rounded-full bg-white`}>
          <Icon className="w-6 h-6" />
        </div>
        <div>
          <p className="text-gray-600 text-sm">{label}</p>
          <p className="text-2xl font-bold text-gray-900">{value}</p>
        </div>
      </div>
    </motion.div>
  );
}