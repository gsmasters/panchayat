import React from 'react';
import { motion } from 'framer-motion';
import { Hero } from './Hero';
import { Updates } from './Updates';
import { Services } from './Services';
import { EmployeeStats } from './EmployeeStats';
import { Announcements } from './Announcements';
import { QuickLinks } from './QuickLinks';
import { Container } from './ui/Container';

export function HomePage() {
  return (
    <motion.div 
      className="space-y-12"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <Hero />
      <Container>
        <EmployeeStats />
        
        <div className="grid md:grid-cols-3 gap-8 mt-12">
          <div className="md:col-span-2">
            <h2 className="text-2xl font-bold mb-6">Quick Access</h2>
            <QuickLinks />
          </div>
          <div>
            <h2 className="text-2xl font-bold mb-6">Updates</h2>
            <Announcements />
          </div>
        </div>
      </Container>

      <Services />
      <Updates />
    </motion.div>
  );
}