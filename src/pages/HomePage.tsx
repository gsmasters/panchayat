import React from 'react';
import { motion } from 'framer-motion';
import { MandalStatistics } from '../components/MandalStatistics';
import { DepartmentsList } from '../components/departments/DepartmentsList';

export function HomePage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="space-y-8"
    >
      <header className="bg-gradient-to-br from-primary-600 to-primary-800 text-white rounded-xl shadow-lg p-8">
        <motion.h1 
          className="text-4xl font-bold mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          Welcome to MPDO Office Kuppam Mandal
        </motion.h1>
        <motion.p 
          className="text-xl text-primary-100"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          Serving the community with dedication and excellence
        </motion.p>
      </header>

      <MandalStatistics />

      <section className="space-y-6">
        <h2 className="text-2xl font-bold text-gray-900">Our Departments</h2>
        <DepartmentsList 
          searchTerm="" 
          onDepartmentClick={() => {}} 
        />
      </section>
    </motion.div>
  );
}