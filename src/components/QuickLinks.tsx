import React from 'react';
import { FileText, Download, HelpCircle, AlertCircle, ExternalLink } from 'lucide-react';

const links = [
  {
    icon: FileText,
    title: "Forms & Applications",
    description: "Access and download official forms",
    url: "/forms"
  },
  {
    icon: Download,
    title: "Downloads",
    description: "Important documents and guidelines",
    url: "/downloads"
  },
  {
    icon: HelpCircle,
    title: "FAQ",
    description: "Frequently asked questions",
    url: "/faq"
  },
  {
    icon: AlertCircle,
    title: "Emergency Contacts",
    description: "Important contact numbers",
    url: "/emergency"
  }
];

export function QuickLinks() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {links.map((link, index) => (
        <a
          key={index}
          href={link.url}
          className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow group"
        >
          <div className="flex items-start space-x-4">
            <link.icon className="h-6 w-6 text-primary group-hover:text-secondary" />
            <div>
              <h3 className="font-semibold text-gray-900 group-hover:text-primary flex items-center gap-2">
                {link.title}
                <ExternalLink className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity" />
              </h3>
              <p className="text-sm text-gray-600 mt-1">{link.description}</p>
            </div>
          </div>
        </a>
      ))}
    </div>
  );
}