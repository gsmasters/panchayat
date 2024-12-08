import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  Home,
  Users,
  Building2,
  Phone,
  BarChart2,
  HelpCircle,
  AlertCircle
} from 'lucide-react';

export function Sidebar() {
  const location = useLocation();

  const menuItems = [
    { icon: Home, label: "Home", path: '/' },
    { icon: Building2, label: "Departments", path: '/departments' },
    { icon: Users, label: "Staff", path: '/staff' },
    { icon: Phone, label: "Contacts", path: '/contacts' },
    { icon: BarChart2, label: "Statistics", path: '/statistics' },
    { icon: AlertCircle, label: "Grievances", path: '/grievances' },
    { icon: HelpCircle, label: "Help", path: '/help' }
  ];

  return (
    <motion.aside
      className="w-64 shrink-0"
      initial={{ x: -32, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      <nav className="bg-white rounded-xl shadow-sm p-3 space-y-1 sticky top-24">
        {menuItems.map((item, index) => (
          <motion.div
            key={index}
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: index * 0.1 }}
          >
            <Link
              to={item.path}
              className={`flex items-center gap-3 px-4 py-2.5 rounded-lg transition-colors ${
                location.pathname === item.path
                  ? 'bg-primary-50 text-primary-600'
                  : 'text-gray-700 hover:bg-gray-50 hover:text-primary-600'
              }`}
            >
              <item.icon className={`w-5 h-5 ${
                location.pathname === item.path
                  ? 'text-primary-600'
                  : 'text-gray-500'
              }`} />
              <span>{item.label}</span>
            </Link>
          </motion.div>
        ))}
      </nav>
    </motion.aside>
  );
}