import React from 'react';
import { Bell, ArrowRight } from 'lucide-react';

const announcements = [
  {
    id: 1,
    title: "Important Notice: Gram Sabha Meeting",
    date: "2024-03-20",
    content: "Monthly Gram Sabha meeting scheduled at Community Hall. All residents are requested to attend.",
    type: "meeting"
  },
  {
    id: 2,
    title: "Property Tax Payment Deadline",
    date: "2024-03-31",
    content: "Last date for property tax payment without penalty is approaching.",
    type: "deadline"
  },
  {
    id: 3,
    title: "New Digital Services Launch",
    date: "2024-03-25",
    content: "Online certificate application services will be available from next week.",
    type: "update"
  }
];

export function Announcements() {
  return (
    <section className="bg-white shadow-lg rounded-lg overflow-hidden">
      <div className="bg-primary p-4 flex items-center justify-between">
        <div className="flex items-center gap-2 text-white">
          <Bell className="h-5 w-5" />
          <h2 className="text-lg font-semibold">Latest Announcements</h2>
        </div>
        <button className="text-white flex items-center gap-1 text-sm hover:text-secondary">
          View All <ArrowRight className="h-4 w-4" />
        </button>
      </div>
      <div className="divide-y divide-gray-200">
        {announcements.map((announcement) => (
          <div key={announcement.id} className="p-4 hover:bg-gray-50">
            <div className="flex justify-between items-start mb-2">
              <h3 className="font-semibold text-gray-900">{announcement.title}</h3>
              <span className="text-sm text-gray-500">{announcement.date}</span>
            </div>
            <p className="text-gray-600 text-sm">{announcement.content}</p>
          </div>
        ))}
      </div>
    </section>
  );
}