import { IServicedFrontInfoProps } from './components/ServicedFrontInfo/types';
import {
  Car,
  Baby,
  MapPinned,
  CookingPot,
  GlassWater,
  Goal,
  HeartHandshake,
  Infinity,
  MonitorSmartphone,
  Speech,
  Users,
} from 'lucide-react';

export const frontItems: IServicedFrontInfoProps[] = [
  {
    icon: <GlassWater size={30} color="black" />,
    title: 'Water',
    description: 'Meeting urgent water demands;',
  },
  {
    icon: <CookingPot size={30} color="black" />,
    title: 'Solidarity kitchens',
    description:
      'Assisting in the operation of the kitchens with the delivery of supplies and distribution of lunch boxes;',
  },
  {
    icon: <Infinity size={30} color="black" />,
    title: 'Connections',
    description:
      'Manage reliable data on the demand for shelters and the availability of donations;',
  },
  {
    icon: <HeartHandshake size={30} color="black" />,
    title: 'Communities',
    description: 'Mapping and integrating community leaders;',
  },
  {
    icon: <Speech size={30} color="black" />,
    title: 'Communication',
    description:
      'Keep information about the initiative up to date and available to everyone;',
  },
  {
    icon: <MapPinned size={30} color="black" />,
    title: 'Data and Geolocation',
    description:
      'Providing public data on the floods and the demands of the crisis scenario with the support of IPH UFRGS and our volunteer operations;',
  },
  {
    icon: <Goal size={30} color="black" />,
    title: 'Expansion',
    description: 'Structuring the growth of the operation and partnerships;',
  },
  {
    icon: <Car size={30} color="black" />,
    title: 'Logistics',
    description:
      'Connecting transport from distribution and sorting centers to shelters;',
  },
  {
    icon: <Baby size={30} color="black" />,
    title: 'Looking at the child',
    description: 'Protecting and supporting children in shelters;',
  },
  {
    icon: <Users size={30} color="black" />,
    title: 'People',
    description:
      'Recruiting, welcoming, orienting, training and directing new volunteers and godparents;',
  },
  {
    icon: <MonitorSmartphone size={30} color="black" />,
    title: 'Technology',
    description: 'Develop a digital solution based on reliable public data.',
  },
];
