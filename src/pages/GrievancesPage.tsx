import React from 'react';
import { motion } from 'framer-motion';
import { AlertCircle } from 'lucide-react';
import { GrievanceForm } from '../components/grievances/GrievanceForm';
import { GrievancesList } from '../components/grievances/GrievancesList';

export function GrievancesPage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="space-y-8"
    >
      <header className="bg-white rounded-lg shadow-sm p-6">
        <div className="flex items-center gap-4">
          <AlertCircle className="w-8 h-8 text-primary-600" />
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Grievance Portal</h1>
            <p className="mt-2 text-gray-600">Submit and track your grievances</p>
          </div>
        </div>
      </header>

      <div className="grid md:grid-cols-2 gap-8">
        <GrievanceForm />
        <GrievancesList />
      </div>
    </motion.div>
  );
}