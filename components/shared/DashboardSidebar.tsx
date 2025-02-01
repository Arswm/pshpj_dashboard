import Link from 'next/link';
import Image from 'next/image';
import React from 'react';
import {
  BuildingIcon,
  FolderOpenDot,
  HomeIcon,
  Rss,
  SettingsIcon,
  UserIcon,
  Users,
} from 'lucide-react';
import { FaUserShield } from 'react-icons/fa';

interface DashboardSidebarProps {
  className?: string;
}

const menuLinks = [
  {
    id: 1,
    url: '/dashboard',
    text: 'Dashboard',
    icon: <HomeIcon size={18}/>,
  },
  {
    id: 2,
    url: '/dashboard/users',
    text: 'Users',
    icon: <Users size={18}/>,
  },
  {
    id: 3,
    url: '/dashboard/settings',
    text: 'Settings',
    icon: <SettingsIcon size={18}/>,
  },
  {
    id: 4,
    url: '/dashboard/companies',
    text: 'Companies',
    icon: <BuildingIcon size={18}/>,
  },
  {
    id: 5,
    url: '/dashboard/blogs',
    text: 'Blogs',
    icon: <Rss size={18}/>,
  },
  {
    id: 6,
    url: '/dashboard/projects',
    text: 'Projects',
    icon: <FolderOpenDot size={18}/>,
  },
  {
    id: 7,
    url: '/dashboard/profile',
    text: 'Profile',
    icon: <UserIcon size={18}/>,
  },
  {
    id: 8 ,
    url : '/dashboard/roles' ,
    text : 'roles' , 
    icon : <FaUserShield size={18}/>
  },
];

const DashboardSidebar: React.FC<DashboardSidebarProps> = ({ className }) => {

  return (
    <aside className={`p-4 ${className}`}>
      <div className="mb-14 mt-2 pb-12">
        <Image src={'/images/logo.svg'} width={400} height={200} alt={''} className="w-full px-4" />
      </div>
      <nav className="text-white font-bold">
        <ul className="space-y-4">
          {menuLinks.map((item) => {
            return (
              <li key={item.id}>
                <Link href={item.url} className={'hover:underline inline-flex items-center gap-2'}>
                  <span className='flex items-center'>
                  {item.icon}
                  </span>
                  {item.text}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </aside>
  );
};

export default DashboardSidebar;
