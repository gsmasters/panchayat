import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Users, Phone, Mail, Building2, Crown } from 'lucide-react';
import type { Department } from '../../types';

interface DepartmentDetailsProps {
  department: Department;
  onBack: () => void;
}

export function DepartmentDetails({ department, onBack }: DepartmentDetailsProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="space-y-6"
    >
      <motion.button
        onClick={onBack}
        className="flex items-center gap-2 text-primary-600 hover:text-primary-700 font-medium"
        whileHover={{ x: -5 }}
        whileTap={{ scale: 0.95 }}
      >
        <ArrowLeft className="w-4 h-4" />
        Back to Departments
      </motion.button>

      <div className="bg-white rounded-xl shadow-sm p-8">
        <div className="flex items-center gap-6 mb-8">
          <div className="p-4 bg-primary-50 rounded-xl">
            <department.icon className="w-12 h-12 text-primary-600" />
          </div>
          <div>
            <h2 className="text-3xl font-bold text-gray-900">{department.name}</h2>
            <p className="text-gray-600 mt-2">{department.description}</p>
          </div>
        </div>

        {/* Department Head */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8 bg-gradient-to-r from-primary-50 to-primary-100 p-6 rounded-xl"
        >
          <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
            <Crown className="w-5 h-5 text-primary-600" />
            Department Head
          </h3>
          <div className="flex items-center justify-between">
            <div>
              <h4 className="font-semibold text-gray-900">{department.head.name}</h4>
              <p className="text-sm text-gray-600">{department.head.position}</p>
            </div>
            <motion.a
              href={`tel:${department.head.mobile}`}
              className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white text-primary-600 hover:bg-primary-50 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Phone className="w-4 h-4" />
              {department.head.mobile}
            </motion.a>
          </div>
        </motion.div>

        {/* Staff Members */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="space-y-6"
        >
          <h3 className="text-xl font-semibold text-gray-900 flex items-center gap-2">
            <Users className="w-5 h-5 text-primary-600" />
            Staff Members
          </h3>
          <div className="grid gap-4">
            {department.staff.map((member, index) => (
              <motion.div
                key={member.sno}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.01, backgroundColor: '#f8fafc' }}
                className="flex items-center justify-between p-6 bg-gray-50 rounded-xl hover:shadow-md transition-all duration-300"
              >
                <div>
                  <h4 className="font-semibold text-gray-900">{member.name}</h4>
                  <p className="text-sm text-gray-600 mt-1">{member.position}</p>
                </div>
                <motion.a
                  href={`tel:${member.mobile}`}
                  className="flex items-center gap-2 px-4 py-2 rounded-lg bg-primary-50 text-primary-600 hover:bg-primary-100 transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Phone className="w-4 h-4" />
                  {member.mobile}
                </motion.a>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}