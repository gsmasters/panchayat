import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Button } from './ui/Button';
import { Container } from './ui/Container';

export function Hero() {
  return (
    <div className="relative bg-gradient-to-br from-primary-900 to-primary-700 text-white overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1599930113854-d6d7fd521f10?auto=format&fit=crop&q=80"
          alt="Andhra Pradesh Landscape"
          className="w-full h-full object-cover opacity-20"
        />
      </div>
      <Container className="relative py-20">
        <motion.div 
          className="max-w-3xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <motion.h1 
            className="text-4xl md:text-6xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            Welcome to Gram Panchayat Portal
          </motion.h1>
          <motion.p 
            className="text-xl mb-8 text-gray-100"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            Empowering rural governance and development in Andhra Pradesh
          </motion.p>
          <motion.div 
            className="flex flex-wrap gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <Button
              variant="secondary"
              size="lg"
              icon={<ArrowRight className="w-5 h-5" />}
            >
              Explore Services
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white hover:text-primary-900"
            >
              File Grievance
            </Button>
          </motion.div>
        </motion.div>
      </Container>
    </div>
  );
}