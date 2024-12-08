import { LucideIcon } from 'lucide-react';

export interface StaffMember {
  sno: number;
  name: string;
  position: string;
  mobile: string;
}

export interface DepartmentHead {
  name: string;
  position: string;
  mobile: string;
}

export interface Department {
  id: string;
  name: string;
  description: string;
  icon: LucideIcon;
  staff: StaffMember[];
  head: DepartmentHead;
}

export interface PopulationStats {
  male: number;
  female: number;
  total: number;
}

export interface LiteracyStats {
  number: number;
  percentage: number;
}