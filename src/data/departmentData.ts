import { Building2, Users, FileText, Landmark, Heart, Shield, Zap } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

interface Department {
  name: string;
  description: string;
  icon: LucideIcon;
  staff: number;
}

export const departments: Department[] = [
  {
    name: "Panchayat Raj & Rural Development",
    description: "Oversees rural governance and development initiatives",
    icon: Building2,
    staff: 34
  },
  {
    name: "Panchayat Raj & Rural Development (Engineering)",
    description: "Handles infrastructure development and maintenance",
    icon: Building2,
    staff: 12
  },
  {
    name: "Irrigation Department",
    description: "Manages water resources and irrigation systems",
    icon: Landmark,
    staff: 8
  },
  {
    name: "Education Department",
    description: "Manages educational institutions and programs",
    icon: Users,
    staff: 15
  },
  {
    name: "Social Welfare/ Tribal Welfare Department",
    description: "Implements welfare schemes for marginalized communities",
    icon: Heart,
    staff: 10
  },
  {
    name: "Agriculture Department",
    description: "Supports farmers and agricultural development",
    icon: Landmark,
    staff: 12
  },
  {
    name: "Animal Husbandry, Fisheries Department",
    description: "Promotes livestock and fisheries development",
    icon: Landmark,
    staff: 8
  },
  {
    name: "Revenue Department",
    description: "Handles land records and revenue collection",
    icon: FileText,
    staff: 28
  },
  {
    name: "Home Department",
    description: "Maintains law and order, handles security",
    icon: Shield,
    staff: 15
  },
  {
    name: "Energy Department",
    description: "Manages power distribution and energy resources",
    icon: Zap,
    staff: 6
  },
  {
    name: "Medical, Health & Family Welfare",
    description: "Provides healthcare services and family welfare programs",
    icon: Heart,
    staff: 20
  }
];