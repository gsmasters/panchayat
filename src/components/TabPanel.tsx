import React from 'react';

interface TabPanelProps {
  id: string;
  active: boolean;
  children: React.ReactNode;
}

export function TabPanel({ id, active, children }: TabPanelProps) {
  if (!active) return null;

  return (
    <div
      id={`tabpanel-${id}`}
      role="tabpanel"
      aria-labelledby={`tab-${id}`}
    >
      {children}
    </div>
  );
}