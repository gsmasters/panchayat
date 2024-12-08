import React from 'react';
import { Facebook, Twitter, Youtube, Mail, Phone } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <div className="space-y-2">
              <p className="flex items-center gap-2">
                <Phone size={16} />
                <span>Toll Free: 1800-XXX-XXXX</span>
              </p>
              <p className="flex items-center gap-2">
                <Mail size={16} />
                <span>support@appanchayats.gov.in</span>
              </p>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-blue-400">RTI</a></li>
              <li><a href="#" className="hover:text-blue-400">Tenders</a></li>
              <li><a href="#" className="hover:text-blue-400">Downloads</a></li>
              <li><a href="#" className="hover:text-blue-400">FAQ</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Connect With Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-blue-400"><Facebook /></a>
              <a href="#" className="hover:text-blue-400"><Twitter /></a>
              <a href="#" className="hover:text-blue-400"><Youtube /></a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p>© 2024 Gram Panchayat Portal. Government of Andhra Pradesh.</p>
          <p className="mt-2 text-sm text-gray-400">
            Last Updated: {new Date().toLocaleDateString()}
          </p>
        </div>
      </div>
    </footer>
  );
}