import React from 'react';
import { motion } from 'framer-motion';
import { Building2, Users, ArrowRight } from 'lucide-react';
import { departments } from '../../data/departments';
import type { Department } from '../../types';

interface DepartmentsListProps {
  searchTerm: string;
  onDepartmentClick: (department: Department) => void;
}

export function DepartmentsList({ searchTerm, onDepartmentClick }: DepartmentsListProps) {
  const filteredDepartments = departments.filter(dept =>
    dept.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    dept.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
    dept.staff.some(staff => 
      staff.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      staff.position.toLowerCase().includes(searchTerm.toLowerCase()) ||
      staff.mobile.includes(searchTerm)
    )
  );

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
    >
      {filteredDepartments.map((dept, index) => (
        <motion.button
          key={dept.id}
          onClick={() => onDepartmentClick(dept)}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
          whileHover={{ 
            scale: 1.02,
            boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)"
          }}
          whileTap={{ scale: 0.98 }}
          className="bg-white rounded-xl p-6 text-left hover:shadow-xl transition-all duration-300 border border-gray-100"
        >
          <div className="flex items-center gap-4 mb-4">
            <div className="p-3 bg-primary-50 rounded-lg">
              <dept.icon className="w-6 h-6 text-primary-600" />
            </div>
            <h2 className="text-xl font-semibold text-gray-900">{dept.name}</h2>
          </div>
          <p className="text-gray-600 mb-4 line-clamp-2">{dept.description}</p>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 text-sm text-gray-500">
              <Users className="w-4 h-4" />
              <span>{dept.staff.length} Staff Members</span>
            </div>
            <ArrowRight className="w-5 h-5 text-primary-600" />
          </div>
        </motion.button>
      ))}
    </motion.div>
  );
}