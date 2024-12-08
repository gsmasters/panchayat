import React from 'react';
import { PopulationStats } from './PopulationStats';

export function Statistics() {
  return (
    <div className="space-y-8">
      <header className="bg-white p-6 rounded-lg shadow-md">
        <h1 className="text-3xl font-bold text-gray-900">Statistics</h1>
        <p className="mt-2 text-gray-600">
          Population and demographic statistics for Kuppam Mandal
        </p>
      </header>

      <PopulationStats />
    </div>
  );
}