'use client'; // Ensures interactive logic for the sidebar is client-rendered

import DashboardSidebar from '@/components/shared/DashboardSidebar';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { AlignJustify, CircleX, ListCheck, LogOut, MessageCircle, User } from 'lucide-react';
import Link from 'next/link';
import React, { useState } from 'react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '../ui/dropdown-menu';

interface DashboardLayoutProps {
  children: React.ReactNode;
}

const DashboardLayout: React.FC<DashboardLayoutProps> = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <div className="flex h-screen relative">
      {/* Sidebar */}
      <div
        className={`fixed bg-navy-blue text-white h-full w-80 right-0 z-40 transform transition-transform duration-300 ${
          sidebarOpen ? 'translate-x-0' : 'translate-x-full'
        } md:translate-x-0`}
      >
        <DashboardSidebar />
      </div>

      {/* Main Content */}
      <main className="flex-1 mr-0 md:mr-80">
        <header className="flex relative py-4 p-4 border-b">
          <DropdownMenu open={openMenu} onOpenChange={setOpenMenu}>
            <DropdownMenuTrigger className="outline-none border-none ring-0">
              <div className="flex gap-2 items-center">
                <Avatar className={'select-none'}>
                  <AvatarImage src="https://github.com/shadcn.png" />
                  <AvatarFallback className={'text-xs'}>name</AvatarFallback>
                </Avatar>
                <div className={'select-none'}>
                  <p className={'text-sm'}>آرسام دیوبندی</p>
                  <p className={'text-xs text-gray-500'}>برنامه نویس ...</p>
                </div>
              </div>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="px-4" onClick={() => setOpenMenu(false)}>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <Link
                  href={'/dashboard/profile'}
                  className={'text-gray-400 font-medium inline-flex gap-2 items-center'}
                >
                  <User size={20} />
                  حساب کاربری
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link
                  href={'/dashboard/profile'}
                  className={'text-gray-400 font-medium inline-flex gap-2 items-center'}
                >
                  <ListCheck size={20} />
                  ماموریت ها
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link
                  href={'/dashboard/profile'}
                  className={'text-gray-400 font-medium inline-flex gap-2 items-center'}
                >
                  <MessageCircle size={20} />
                  پیام ها
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <div className={'inline-flex gap-2 py-2 text-gray-400 items-center select-none'}>
                  <LogOut size={20} />
                  خروج از حساب
                </div>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </header>
        {/* Sidebar Toggle Button (Visible on Small Screens) */}
        <button
          onClick={() => setSidebarOpen(!sidebarOpen)}
          className="absolute top-4 left-4 md:hidden p-2 bg-gray-800 text-white rounded"
        >
          {sidebarOpen ? <CircleX /> : <AlignJustify />}
        </button>
        <div className="md:p-12 bg-[#f1f5f9] min-h-[calc(92dvh)]">{children}</div>
      </main>
    </div>
  );
};

export default DashboardLayout;
