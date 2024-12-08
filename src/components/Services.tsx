import React from 'react';
import { FileText, Home, Users, Building2, Landmark, Phone } from 'lucide-react';

const services = [
  {
    icon: FileText,
    title: 'Certificates',
    description: 'Apply for birth, death, and residence certificates',
  },
  {
    icon: Home,
    title: 'Property Tax',
    description: 'Pay and view your property tax details',
  },
  {
    icon: Users,
    title: 'Pension Services',
    description: 'Apply and track pension applications',
  },
  {
    icon: Building2,
    title: 'Building Permissions',
    description: 'Apply for building permits and approvals',
  },
  {
    icon: Landmark,
    title: 'Trade License',
    description: 'Apply for new trade licenses and renewals',
  },
  {
    icon: Phone,
    title: 'Grievance Cell',
    description: 'Register and track your complaints',
  },
];

export function Services() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              <service.icon className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
              <button className="mt-4 text-blue-600 font-medium hover:text-blue-800">
                Learn More →
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}