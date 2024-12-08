import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { HomePage } from './pages/HomePage';
import { DepartmentsPage } from './pages/DepartmentsPage';
import { StatisticsPage } from './pages/StatisticsPage';
import { HelpPage } from './pages/HelpPage';

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/departments/*" element={<DepartmentsPage />} />
      <Route path="/statistics" element={<StatisticsPage />} />
      <Route path="/help" element={<HelpPage />} />
    </Routes>
  );
}