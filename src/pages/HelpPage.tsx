import React from 'react';
import { motion } from 'framer-motion';
import { HelpCircle } from 'lucide-react';
import { Help } from '../components/Help';

export function HelpPage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="space-y-8"
    >
      <header className="bg-white rounded-lg shadow-sm p-6">
        <div className="flex items-center gap-4">
          <HelpCircle className="w-8 h-8 text-primary-600" />
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Help & Support</h1>
            <p className="mt-2 text-gray-600">Find answers to common questions and get assistance</p>
          </div>
        </div>
      </header>
      
      <Help />
    </motion.div>
  );
}