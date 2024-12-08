import React from 'react';
import { motion } from 'framer-motion';
import { BarChart } from 'lucide-react';
import { Statistics } from '../components/Statistics';

export function StatisticsPage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="space-y-8"
    >
      <header className="bg-white rounded-lg shadow-sm p-6">
        <div className="flex items-center gap-4">
          <BarChart className="w-8 h-8 text-primary-600" />
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Statistics</h1>
            <p className="mt-2 text-gray-600">Population and demographic statistics for Kuppam Mandal</p>
          </div>
        </div>
      </header>
      
      <Statistics />
    </motion.div>
  );
}