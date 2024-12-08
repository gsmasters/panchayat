import React from 'react';
import { Target, Flag, Users, Building, CheckCircle } from 'lucide-react';

const missionPoints = [
  "Empower Local Communities through active participation",
  "Deliver Essential Services efficiently",
  "Promote Sustainable Development",
  "Enhance Infrastructure",
  "Strengthen Governance"
];

const committees = [
  {
    name: "Planning and Finance Committee",
    description: "Oversees budget preparation, financial management, and resource allocation"
  },
  {
    name: "Agriculture and Allied Sectors Committee",
    description: "Focuses on agricultural development, irrigation, animal husbandry"
  },
  {
    name: "Education Committee",
    description: "Addresses issues related to primary and secondary education"
  },
  {
    name: "Health and Sanitation Committee",
    description: "Ensures healthcare services and sanitation facilities"
  },
  {
    name: "Social Welfare Committee",
    description: "Looks after welfare of marginalized communities"
  }
];

export function VisionMission() {
  return (
    <div className="space-y-12">
      {/* Vision Section */}
      <section className="bg-white rounded-lg shadow-md p-8">
        <div className="flex items-center gap-4 mb-6">
          <Target className="w-8 h-8 text-primary" />
          <h2 className="text-3xl font-bold text-gray-900">Vision</h2>
        </div>
        <p className="text-lg text-gray-700 leading-relaxed">
          To achieve balanced and inclusive development across all villages within the Mandal, 
          enhancing the quality of life for residents through efficient governance, 
          infrastructure development, and social welfare initiatives.
        </p>
      </section>

      {/* Mission Section */}
      <section className="bg-white rounded-lg shadow-md p-8">
        <div className="flex items-center gap-4 mb-6">
          <Flag className="w-8 h-8 text-primary" />
          <h2 className="text-3xl font-bold text-gray-900">Mission</h2>
        </div>
        <ul className="space-y-4">
          {missionPoints.map((point, index) => (
            <li key={index} className="flex items-start gap-3">
              <CheckCircle className="w-6 h-6 text-green-500 mt-1" />
              <span className="text-lg text-gray-700">{point}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* Committees Section */}
      <section className="bg-white rounded-lg shadow-md p-8">
        <div className="flex items-center gap-4 mb-6">
          <Users className="w-8 h-8 text-primary" />
          <h2 className="text-3xl font-bold text-gray-900">Standing Committees</h2>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          {committees.map((committee, index) => (
            <div key={index} className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {committee.name}
              </h3>
              <p className="text-gray-700">{committee.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Core Values Section */}
      <section className="bg-white rounded-lg shadow-md p-8">
        <div className="flex items-center gap-4 mb-6">
          <Building className="w-8 h-8 text-primary" />
          <h2 className="text-3xl font-bold text-gray-900">Core Values</h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {['Transparency', 'Accountability', 'Sustainability', 'Participation', 'Equity', 'Innovation'].map((value, index) => (
            <div key={index} className="bg-gray-50 p-4 rounded-lg text-center">
              <span className="text-lg font-semibold text-primary">{value}</span>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}