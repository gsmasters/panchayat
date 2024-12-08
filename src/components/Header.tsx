import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Building2, Home, BarChart2, HelpCircle } from 'lucide-react';

export function Header() {
  const location = useLocation();
  
  const menuItems = [
    { icon: Home, label: "Home", path: '/' },
    { icon: Building2, label: "Departments", path: '/departments' },
    { icon: BarChart2, label: "Statistics", path: '/statistics' },
    { icon: HelpCircle, label: "Help", path: '/help' }
  ];

  return (
    <motion.header
      className="bg-white shadow-sm sticky top-0 z-50"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex items-center gap-4">
            <Building2 className="h-10 w-10 text-primary-600" />
            <div>
              <h1 className="text-2xl font-bold text-gray-900">MPDO Office</h1>
              <p className="text-sm text-gray-600">Kuppam Mandal</p>
            </div>
          </Link>

          <nav className="hidden md:flex items-center gap-2">
            {menuItems.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Link
                  to={item.path}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${
                    location.pathname === item.path
                      ? 'bg-primary-50 text-primary-600'
                      : 'text-gray-700 hover:bg-gray-50 hover:text-primary-600'
                  }`}
                >
                  <item.icon className="w-4 h-4" />
                  <span>{item.label}</span>
                </Link>
              </motion.div>
            ))}
          </nav>

          <a
            href="https://pgrs.ap.gov.in/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-primary-600 text-white px-4 py-2 rounded-lg hover:bg-primary-700 transition-colors"
          >
            File Grievance
          </a>
        </div>
      </div>
    </motion.header>
  );
}