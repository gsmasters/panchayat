import React from 'react';

const updates = [
  {
    date: '2024-03-15',
    title: 'New Online Payment System',
    description: 'Introducing a new digital payment system for all panchayat services.',
  },
  {
    date: '2024-03-10',
    title: 'Gram Sabha Meeting',
    description: 'Monthly Gram Sabha meeting scheduled for March 20th, 2024.',
  },
  {
    date: '2024-03-05',
    title: 'Development Projects',
    description: 'New road construction project approved for rural connectivity.',
  },
];

export function Updates() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8">Latest Updates</h2>
        <div className="space-y-6">
          {updates.map((update, index) => (
            <div
              key={index}
              className="border-l-4 border-blue-600 pl-4 hover:bg-gray-50 p-4 rounded"
            >
              <div className="text-sm text-gray-500 mb-1">
                {new Date(update.date).toLocaleDateString()}
              </div>
              <h3 className="text-xl font-semibold mb-2">{update.title}</h3>
              <p className="text-gray-600">{update.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}