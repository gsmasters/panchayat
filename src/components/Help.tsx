import React from 'react';
import { HelpCircle, Phone, Mail, ExternalLink } from 'lucide-react';

export function Help() {
  const faqs = [
    {
      question: "How do I apply for certificates?",
      answer: "Visit your nearest Gram Sachivalayam with required documents. You can also apply online through the Meeseva portal."
    },
    {
      question: "What are the office timings?",
      answer: "The office is open from Monday to Saturday, 10:00 AM to 5:00 PM."
    },
    {
      question: "How can I pay property tax?",
      answer: "Property tax can be paid online through the AP Panchayat portal or at your local Gram Sachivalayam."
    },
    {
      question: "How do I register a grievance?",
      answer: "You can register grievances through the PGRS portal (https://pgrs.ap.gov.in/) or visit the office in person."
    }
  ];

  return (
    <div className="space-y-8">
      <header className="bg-white p-6 rounded-lg shadow-md">
        <h1 className="text-3xl font-bold text-gray-900">Help & Support</h1>
        <p className="mt-2 text-gray-600">
          Find answers to common questions and get assistance
        </p>
      </header>

      {/* Quick Contact */}
      <section className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Contact Information</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="flex items-start gap-4">
            <Phone className="w-6 h-6 text-primary" />
            <div>
              <h3 className="font-semibold">Phone</h3>
              <p className="text-gray-600">94910 71391</p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <Mail className="w-6 h-6 text-primary" />
            <div>
              <h3 className="font-semibold">Email</h3>
              <p className="text-gray-600">kuppam.brgf@gmail.com</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <div key={index} className="border-b border-gray-200 pb-4 last:border-0">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                <HelpCircle className="inline-block w-5 h-5 mr-2 text-primary" />
                {faq.question}
              </h3>
              <p className="text-gray-600 ml-7">{faq.answer}</p>
            </div>
          ))}
        </div>
      </section>

      {/* External Resources */}
      <section className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Useful Links</h2>
        <div className="grid md:grid-cols-2 gap-4">
          <a
            href="https://appanchayats.ap.gov.in/APPRPortal/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-primary hover:underline"
          >
            AP Panchayat Portal <ExternalLink className="w-4 h-4" />
          </a>
          <a
            href="https://pgrs.ap.gov.in/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-primary hover:underline"
          >
            Grievance Portal <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </section>
    </div>
  );
}