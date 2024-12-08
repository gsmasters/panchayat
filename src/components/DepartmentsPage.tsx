import React from 'react';
import { Building2, Users, FileText, Landmark } from 'lucide-react';

const departments = [
  {
    name: "Panchayat Raj & Rural Development",
    description: "Oversees rural governance and development initiatives",
    icon: Building2,
    staff: 34
  },
  {
    name: "Panchayat Raj & Rural Development (Engineering)",
    description: "Handles infrastructure development and maintenance",
    icon: Building2,
    staff: 12
  },
  {
    name: "Irrigation Department",
    description: "Manages water resources and irrigation systems",
    icon: Landmark,
    staff: 8
  },
  {
    name: "Education Department",
    description: "Manages educational institutions and programs",
    icon: Users,
    staff: 15
  },
  {
    name: "Social Welfare/ Tribal Welfare Department",
    description: "Implements welfare schemes for marginalized communities",
    icon: Users,
    staff: 10
  },
  {
    name: "Agriculture Department",
    description: "Supports farmers and agricultural development",
    icon: Landmark,
    staff: 12
  },
  {
    name: "Animal Husbandry, Fisheries Department",
    description: "Promotes livestock and fisheries development",
    icon: Landmark,
    staff: 8
  },
  {
    name: "Revenue Department",
    description: "Handles land records and revenue collection",
    icon: FileText,
    staff: 28
  },
  {
    name: "Home Department",
    description: "Maintains law and order, handles security",
    icon: Building2,
    staff: 15
  },
  {
    name: "Energy Department",
    description: "Manages power distribution and energy resources",
    icon: Landmark,
    staff: 6
  },
  {
    name: "Medical, Health & Family Welfare",
    description: "Provides healthcare services and family welfare programs",
    icon: Users,
    staff: 20
  }
];

export function DepartmentsPage() {
  return (
    <div className="space-y-8">
      <header className="bg-white p-6 rounded-lg shadow-md">
        <h1 className="text-3xl font-bold text-gray-900">Departments</h1>
        <p className="mt-2 text-gray-600">
          Overview of various departments and their functions in Kuppam Mandal
        </p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {departments.map((dept, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <div className="flex items-center gap-4 mb-4">
              <dept.icon className="w-8 h-8 text-primary" />
              <h2 className="text-xl font-semibold text-gray-900">{dept.name}</h2>
            </div>
            <p className="text-gray-600 mb-4">{dept.description}</p>
            <div className="flex items-center gap-2 text-sm text-gray-500">
              <Users className="w-4 h-4" />
              <span>{dept.staff} Staff Members</span>
            </div>
          </div>
        ))}
      </div>

      {/* Department Statistics */}
      <section className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Department Statistics</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-gray-50 p-4 rounded-lg">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Total Staff</h3>
            <p className="text-3xl font-bold text-primary">
              {departments.reduce((acc, dept) => acc + dept.staff, 0)}
            </p>
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
    </div>
  );
}