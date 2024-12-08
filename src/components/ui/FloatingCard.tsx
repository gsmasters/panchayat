import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '../../utils/cn';

interface FloatingCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export function FloatingCard({ children, className, ...props }: FloatingCardProps) {
  return (
    <motion.div
      className={cn(
        'bg-white rounded-lg shadow-sm p-6',
        'hover:shadow-lg transition-shadow duration-300',
        className
      )}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3 }}
      {...props}
    >
      {children}
    </motion.div>
  );
}