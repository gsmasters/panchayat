import React, { useState } from 'react';
import { DataTable } from './DataTable';
import { mandalOfficeStaff, panchayatSecretaries } from '../data/staffData';
import { Search, Users, Phone, Mail } from 'lucide-react';

const staffColumns = [
  { header: 'S.No', accessor: 'sno' },
  { header: 'Name', accessor: 'name' },
  { header: 'Position', accessor: 'position' },
  { header: 'Mobile Number', accessor: 'mobile' }
];

export function StaffDirectory() {
  const [searchTerm, setSearchTerm] = useState('');

  const filterData = (data: any[]) => {
    return data.filter(item =>
      Object.values(item).some(value =>
        value.toString().toLowerCase().includes(searchTerm.toLowerCase())
      )
    );
  };

  return (
    <div className="space-y-8">
      {/* Search Bar */}
      <div className="bg-white p-4 rounded-lg shadow flex items-center gap-4">
        <div className="flex-1 relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="Search staff by name, position, or phone number..."
            className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <Users className="w-8 h-8 text-primary mb-2" />
          <h3 className="text-lg font-semibold">Total Staff</h3>
          <p className="text-2xl font-bold text-primary">
            {mandalOfficeStaff.length + panchayatSecretaries.length}
          </p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <Phone className="w-8 h-8 text-primary mb-2" />
          <h3 className="text-lg font-semibold">Emergency Contact</h3>
          <p className="text-xl text-primary">94910 71391</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <Mail className="w-8 h-8 text-primary mb-2" />
          <h3 className="text-lg font-semibold">Email Support</h3>
          <p className="text-sm text-primary">kuppam.brgf@gmail.com</p>
        </div>
      </div>

      <DataTable
        title="Mandal Office Staff"
        columns={staffColumns}
        data={filterData(mandalOfficeStaff)}
      />
      <DataTable
        title="Panchayat Secretaries"
        columns={staffColumns}
        data={filterData(panchayatSecretaries)}
      />
    </div>
  );
}