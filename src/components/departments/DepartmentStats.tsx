import React from 'react';
import { departments } from '../../data/departmentData';

export function DepartmentStats() {
  const totalStaff = departments.reduce((acc, dept) => acc + dept.staff, 0);

  return (
    <section className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Department Statistics</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-gray-50 p-4 rounded-lg">
          <h3 className="text-lg font-semibold text-gray-900 mb-2">Total Staff</h3>
          <p className="text-3xl font-bold text-primary">{totalStaff}</p>
        </div>
        <div className="bg-gray-50 p-4 rounded-lg">
          <h3 className="text-lg font-semibold text-gray-900 mb-2">Departments</h3>
          <p className="text-3xl font-bold text-primary">{departments.length}</p>
        </div>
        <div className="bg-gray-50 p-4 rounded-lg">
          <h3 className="text-lg font-semibold text-gray-900 mb-2">Active Projects</h3>
          <p className="text-3xl font-bold text-primary">45+</p>
        </div>
      </div>
    </section>
  );
}