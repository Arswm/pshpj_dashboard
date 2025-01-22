import Footer from '@/components/shared/Footer';
import Navbar from '@/components/shared/Navbar';
import { ReactNode } from 'react';

export default function SiteLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  );
}
