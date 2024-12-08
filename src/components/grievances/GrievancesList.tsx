import React from 'react';
import { Clock, CheckCircle, AlertTriangle } from 'lucide-react';
import { FloatingCard } from '../ui/FloatingCard';
import { motion } from 'framer-motion';

const sampleGrievances = [
  {
    id: 1,
    title: "Water Supply Issue",
    status: "resolved",
    date: "2024-03-15",
    category: "water"
  },
  {
    id: 2,
    title: "Street Light Maintenance",
    status: "pending",
    date: "2024-03-18",
    category: "electricity"
  },
  {
    id: 3,
    title: "Road Repair Request",
    status: "in-progress",
    date: "2024-03-20",
    category: "infrastructure"
  }
];

export function GrievancesList() {
  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'resolved':
        return <CheckCircle className="w-5 h-5 text-green-500" />;
      case 'pending':
        return <Clock className="w-5 h-5 text-yellow-500" />;
      case 'in-progress':
        return <AlertTriangle className="w-5 h-5 text-blue-500" />;
      default:
        return null;
    }
  };

  return (
    <FloatingCard>
      <h2 className="text-xl font-semibold mb-4">Recent Grievances</h2>
      <div className="space-y-4">
        {sampleGrievances.map((grievance, index) => (
          <motion.div
            key={grievance.id}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ scale: 1.02 }}
            className="border rounded-lg p-4 hover:bg-gray-50 transition-all duration-200 cursor-pointer"
          >
            <div className="flex items-start justify-between">
              <div>
                <h3 className="font-medium text-gray-900">{grievance.title}</h3>
                <p className="text-sm text-gray-500">
                  {new Date(grievance.date).toLocaleDateString()}
                </p>
              </div>
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.5 }}
              >
                {getStatusIcon(grievance.status)}
              </motion.div>
            </div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="mt-2"
            >
              <span className="inline-block px-2 py-1 text-xs font-medium rounded-full bg-primary-100 text-primary-800">
                {grievance.category}
              </span>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </FloatingCard>
  );
}