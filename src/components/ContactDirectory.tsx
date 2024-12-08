import React, { useState } from 'react';
import { Search, Phone, Mail, Users, Building2 } from 'lucide-react';
import { DataTable } from './DataTable';
import { TabPanel } from './TabPanel';
import { mandalOfficeStaff } from '../data/staffData';
import { mppDetails, zptcDetails, sarpanchDetails } from '../data/electedOfficials';
import { mandaLevelOfficers } from '../data/officerData';

const contactCategories = [
  { id: 'mandal-office', label: 'Mandal Office Staff' },
  { id: 'elected-officials', label: 'Elected Officials' },
  { id: 'mandal-officers', label: 'Mandal Level Officers' },
  { id: 'emergency', label: 'Emergency Contacts' }
];

export function ContactDirectory() {
  const [activeTab, setActiveTab] = useState('mandal-office');
  const [searchTerm, setSearchTerm] = useState('');

  const filterData = (data: any[]) => {
    return data.filter(item =>
      Object.values(item).some(value =>
        value.toString().toLowerCase().includes(searchTerm.toLowerCase())
      )
    );
  };

  return (
    <div className="space-y-6">
      {/* Header Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <StatCard
          icon={Users}
          label="Total Staff"
          value={mandalOfficeStaff.length.toString()}
        />
        <StatCard
          icon={Building2}
          label="Gram Panchayats"
          value="29"
        />
        <StatCard
          icon={Phone}
          label="MPDO Contact"
          value="94910 71391"
        />
        <StatCard
          icon={Mail}
          label="Email Support"
          value="kuppam.brgf@gmail.com"
        />
      </div>

      {/* Search Bar */}
      <div className="bg-white p-4 rounded-lg shadow">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="Search by name, position, or phone number..."
            className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>

      {/* Category Tabs */}
      <div className="bg-white rounded-lg shadow">
        <div className="border-b">
          <div className="flex overflow-x-auto">
            {contactCategories.map((category) => (
              <button
                key={category.id}
                className={`px-6 py-3 text-sm font-medium ${
                  activeTab === category.id
                    ? 'border-b-2 border-primary text-primary'
                    : 'text-gray-500 hover:text-gray-700'
                }`}
                onClick={() => setActiveTab(category.id)}
              >
                {category.label}
              </button>
            ))}
          </div>
        </div>

        <div className="p-6">
          <TabPanel id="mandal-office" active={activeTab === 'mandal-office'}>
            <DataTable
              columns={[
                { header: 'S.No', accessor: 'sno' },
                { header: 'Name', accessor: 'name' },
                { header: 'Position', accessor: 'position' },
                { header: 'Mobile', accessor: 'mobile' }
              ]}
              data={filterData(mandalOfficeStaff)}
            />
          </TabPanel>

          <TabPanel id="elected-officials" active={activeTab === 'elected-officials'}>
            <div className="space-y-8">
              <DataTable
                title="MPP Details"
                columns={[
                  { header: 'S.No', accessor: 'sno' },
                  { header: 'Name', accessor: 'name' },
                  { header: 'Phone', accessor: 'phone' }
                ]}
                data={filterData(mppDetails)}
              />
              <DataTable
                title="ZPTC Details"
                columns={[
                  { header: 'S.No', accessor: 'sno' },
                  { header: 'Name', accessor: 'name' },
                  { header: 'Phone', accessor: 'phone' }
                ]}
                data={filterData(zptcDetails)}
              />
              <DataTable
                title="Sarpanch Details"
                columns={[
                  { header: 'SL.NO', accessor: 'slNo' },
                  { header: 'Gram Panchayat', accessor: 'gramPanchayat' },
                  { header: 'Name', accessor: 'name' },
                  { header: 'Phone', accessor: 'phone' }
                ]}
                data={filterData(sarpanchDetails)}
              />
            </div>
          </TabPanel>

          <TabPanel id="mandal-officers" active={activeTab === 'mandal-officers'}>
            <DataTable
              columns={[
                { header: 'S.No', accessor: 'sNo' },
                { header: 'Name', accessor: 'name' },
                { header: 'Designation', accessor: 'designation' },
                { header: 'Mobile', accessor: 'mobileNumber' }
              ]}
              data={filterData(mandaLevelOfficers)}
            />
          </TabPanel>

          <TabPanel id="emergency" active={activeTab === 'emergency'}>
            <EmergencyContacts />
          </TabPanel>
        </div>
      </div>
    </div>
  );
}

function StatCard({ icon: Icon, label, value }: { icon: any; label: string; value: string }) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <Icon className="w-8 h-8 text-primary mb-2" />
      <h3 className="text-sm font-medium text-gray-600">{label}</h3>
      <p className="text-2xl font-bold text-primary">{value}</p>
    </div>
  );
}

function EmergencyContacts() {
  const emergencyContacts = [
    { name: 'Police Control Room', number: '100' },
    { name: 'Fire Service', number: '101' },
    { name: 'Ambulance', number: '108' },
    { name: 'Women Helpline', number: '181' },
    { name: 'Child Helpline', number: '1098' },
    { name: 'Disaster Management', number: '1077' }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {emergencyContacts.map((contact, index) => (
        <div key={index} className="bg-red-50 p-4 rounded-lg">
          <h3 className="font-semibold text-red-700">{contact.name}</h3>
          <p className="text-2xl font-bold text-red-600">{contact.number}</p>
        </div>
      ))}
    </div>
  );
}