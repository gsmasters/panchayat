import React from 'react';
import { Users } from 'lucide-react';
import { Department } from '../../types';

interface DepartmentCardProps {
  department: Department;
}

export function DepartmentCard({ department }: DepartmentCardProps) {
  const Icon = department.icon;

  return (
    <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
      <div className="flex items-center gap-4 mb-4">
        <Icon className="w-8 h-8 text-primary" />
        <h2 className="text-xl font-semibold text-gray-900">{department.name}</h2>
      </div>
      <p className="text-gray-600 mb-4">{department.description}</p>
      <div className="flex items-center gap-2 text-sm text-gray-500">
        <Users className="w-4 h-4" />
        <span>{department.staff} Staff Members</span>
      </div>
    </div>
  );
}