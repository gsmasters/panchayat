import { Building2, Users, FileText, Landmark, Heart, Shield, Zap, BookOpen, Briefcase } from 'lucide-react';
import type { Department } from '../types';

export const departments: Department[] = [
  {
    id: 'panchayat-raj',
    name: "Panchayat Raj & Rural Development",
    description: "Oversees rural governance and development initiatives",
    icon: Building2,
    staff: [
      { sno: 1, name: "P.SAI LAHARI", position: "MPDO", mobile: "9491071391" },
      { sno: 2, name: "L VIJAYDATH", position: "EOPRD", mobile: "9440237609" },
      { sno: 3, name: "N. GANGADHARAM", position: "ADMINISTRATIVE OFFICER", mobile: "9985569187" },
      { sno: 4, name: "S.A. SHABBEER AHMED", position: "SENIOR ASSISTANT", mobile: "9494747440" },
      { sno: 5, name: "E. SESHADRI", position: "JUNIOR ASSISTANT", mobile: "9494072682" },
      { sno: 6, name: "B. RAMU NAICK", position: "TYPIST", mobile: "9966505098" },
      { sno: 7, name: "RAMAKRISHANA", position: "OFFICE SUBORDINATE", mobile: "9959868799" },
      { sno: 8, name: "VENKATESH", position: "OFFICE SUBORDINATE", mobile: "9550133409" },
      { sno: 9, name: "H MALLIGA", position: "OFFICE SUBORDINATE", mobile: "7799102114" },
      { sno: 10, name: "VENKATAPATHI", position: "OFFICE SUBORDINATE", mobile: "9154461724" }
    ],
    head: {
      name: "P.SAI LAHARI",
      position: "MPDO",
      mobile: "9491071391"
    }
  },
  {
    id: 'education',
    name: "Education Department",
    description: "Manages educational institutions and programs",
    icon: BookOpen,
    staff: [
      { sno: 1, name: "SHAIK MAHABOOB BASHA", position: "MANDAL EDUCATIONAL OFFICER", mobile: "9481108991" },
      { sno: 2, name: "Sri.Rajaram", position: "MANDAL EDUCATIONAL OFFICER 2", mobile: "9441862325" }
    ],
    head: {
      name: "SHAIK MAHABOOB BASHA",
      position: "MANDAL EDUCATIONAL OFFICER",
      mobile: "9481108991"
    }
  },
  {
    id: 'engineering',
    name: "Engineering Department",
    description: "Handles infrastructure and engineering works",
    icon: Building2,
    staff: [
      { sno: 1, name: "T Guruvareddy", position: "DEE PR", mobile: "9440044134" },
      { sno: 2, name: "Purushotham", position: "DEE RWS & S", mobile: "9100121835" },
      { sno: 3, name: "Venkateswar rao", position: "DE- Housing", mobile: "7093931002" },
      { sno: 4, name: "GuruPrasad", position: "DE-R & B", mobile: "7013222106" },
      { sno: 5, name: "S.Ganenaik", position: "DE - Irrigation", mobile: "7901090342" },
      { sno: 6, name: "Abhishaik", position: "AE Housing", mobile: "7093931056" },
      { sno: 7, name: "Madhu Sudhan", position: "AE-RWS & S", mobile: "9100121836" },
      { sno: 8, name: "Krishnaiah", position: "AE-PR", mobile: "9010399189" },
      { sno: 9, name: "Krishna Naik", position: "AE-R & B", mobile: "9440818948" },
      { sno: 10, name: "C.M. Sandhya Vandana", position: "AEE-Irrigation", mobile: "9494160360" }
    ],
    head: {
      name: "T Guruvareddy",
      position: "DEE PR",
      mobile: "9440044134"
    }
  },
  {
    id: 'revenue',
    name: "Revenue Department",
    description: "Handles land records and revenue collection",
    icon: FileText,
    staff: [
      { sno: 1, name: "Chittibabu", position: "Mandal Revenue Officer", mobile: "9491077081" },
      { sno: 2, name: "Surya Prakesh", position: "HDT (Tahsildar Office)", mobile: "9573056183" }
    ],
    head: {
      name: "Chittibabu",
      position: "Mandal Revenue Officer",
      mobile: "9491077081"
    }
  },
  {
    id: 'agriculture',
    name: "Agriculture Department",
    description: "Supports farmers and agricultural development",
    icon: Landmark,
    staff: [
      { sno: 1, name: "Smt.S.Amruthavalli", position: "Mandal Agricultural Officer", mobile: "8886612540" },
      { sno: 2, name: "Dimpul Priya", position: "Horticulture Officer", mobile: "7731881596" },
      { sno: 3, name: "Ampaiah", position: "Sericulture Officer", mobile: "7396166656" }
    ],
    head: {
      name: "Smt.S.Amruthavalli",
      position: "Mandal Agricultural Officer",
      mobile: "8886612540"
    }
  },
  {
    id: 'medical',
    name: "Medical & Health",
    description: "Provides healthcare services and family welfare programs",
    icon: Heart,
    staff: [
      { sno: 1, name: "Maheswari", position: "PHC Paipalyam", mobile: "9344468441" },
      { sno: 2, name: "Raja Sekhar", position: "PHC Kangundi", mobile: "7981902590" },
      { sno: 3, name: "Mary Suseela", position: "PHC Mallanuru", mobile: "9703077823" },
      { sno: 4, name: "R. Vanajakshmi", position: "PHC N.Kothapalli", mobile: "9652110683" }
    ],
    head: {
      name: "Maheswari",
      position: "PHC Paipalyam",
      mobile: "9344468441"
    }
  },
  {
    id: 'animal-husbandry',
    name: "Animal Husbandry Department",
    description: "Manages livestock and veterinary services",
    icon: Shield,
    staff: [
      { sno: 1, name: "Reddy Kumari", position: "AD-Veterinary", mobile: "9441007345" },
      { sno: 2, name: "Kodanda", position: "Veterinary Assistant Surgeon Animal Husbandry", mobile: "7981538462" },
      { sno: 3, name: "Kodanda", position: "Veterinary Assistant Surgeon (Paipalyam)", mobile: "7981538462" }
    ],
    head: {
      name: "Reddy Kumari",
      position: "AD-Veterinary",
      mobile: "9441007345"
    }
  },
  {
    id: 'social-welfare',
    name: "Social Welfare Department",
    description: "Implements welfare schemes for marginalized communities",
    icon: Users,
    staff: [
      { sno: 1, name: "U Arunasree", position: "CDPO", mobile: "9440814498" },
      { sno: 2, name: "Meenakshmi", position: "ASWO", mobile: "9490322528" },
      { sno: 3, name: "Murali", position: "Social Welfare (bc hostel chellepalle)", mobile: "9491066219" }
    ],
    head: {
      name: "U Arunasree",
      position: "CDPO",
      mobile: "9440814498"
    }
  },
  {
    id: 'energy',
    name: "Energy Department",
    description: "Manages power distribution and energy resources",
    icon: Zap,
    staff: [
      { sno: 1, name: "Munirathnam", position: "AD-KRESCO", mobile: "9440625640" }
    ],
    head: {
      name: "Munirathnam",
      position: "AD-KRESCO",
      mobile: "9440625640"
    }
  },
  {
    id: 'police',
    name: "Police Department",
    description: "Maintains law and order in the mandal",
    icon: Shield,
    staff: [
      { sno: 1, name: "Eswar Reddy", position: "Police CI(Urban)", mobile: "9440796737" },
      { sno: 2, name: "Subba Reddy", position: "Police SI", mobile: "7013636392" },
      { sno: 3, name: "Anvesh Naidu", position: "Exercise SI", mobile: "8187809160" }
    ],
    head: {
      name: "Eswar Reddy",
      position: "Police CI(Urban)",
      mobile: "9440796737"
    }
  }
];