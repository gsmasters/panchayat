import React from 'react';
import { motion } from 'framer-motion';
import { Phone } from 'lucide-react';
import { ContactDirectory } from '../components/ContactDirectory';

export function ContactsPage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="space-y-8"
    >
      <header className="bg-white rounded-lg shadow-sm p-6">
        <div className="flex items-center gap-4">
          <Phone className="w-8 h-8 text-primary-600" />
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Contact Directory</h1>
            <p className="mt-2 text-gray-600">Important contacts and emergency numbers</p>
          </div>
        </div>
      </header>
      
      <ContactDirectory />
    </motion.div>
  );
}