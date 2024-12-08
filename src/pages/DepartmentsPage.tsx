import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search } from 'lucide-react';
import { DepartmentsList } from '../components/departments/DepartmentsList';
import { DepartmentDetails } from '../components/departments/DepartmentDetails';
import { departments } from '../data/departments';
import type { Department } from '../types';

export function DepartmentsPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedDepartment, setSelectedDepartment] = useState<Department | null>(null);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="space-y-8"
    >
      <header className="bg-white rounded-lg shadow-sm p-6">
        <h1 className="text-3xl font-bold text-gray-900">Departments & Staff</h1>
        <p className="mt-2 text-gray-600">Browse departments and contact staff members</p>
      </header>

      <div className="bg-white rounded-lg shadow-sm p-4">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="Search departments, staff, or contact numbers..."
            className="w-full pl-10 pr-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-shadow"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>

      <AnimatePresence mode="wait">
        {selectedDepartment ? (
          <DepartmentDetails
            department={selectedDepartment}
            onBack={() => setSelectedDepartment(null)}
          />
        ) : (
          <DepartmentsList
            departments={departments}
            searchTerm={searchTerm}
            onDepartmentClick={setSelectedDepartment}
          />
        )}
      </AnimatePresence>
    </motion.div>
  );
}