import React from 'react';
import DashboardLayout from '@/components/layouts/DashboardLayout';

export default function dashboard({ children }: { children: React.ReactNode }) {
  return <DashboardLayout>{children}</DashboardLayout>;
}
