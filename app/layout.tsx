import type { Metadata } from 'next';
import localFont from 'next/font/local';
import React from 'react';
import './globals.css';
import { Toaster } from '@/components/ui/sonner';

const yekanBakh = localFont({
  variable: '--app-font',
  src: [
    {
      path: './assets/fonts/YekanBakhFaNum-Black.woff',
      weight: '900',
      style: 'normal',
    },
    {
      path: './assets/fonts/YekanBakhFaNum-Bold.woff',
      weight: '700',
      style: 'normal',
    },
    {
      path: './assets/fonts/YekanBakhFaNum-Medium.woff',
      weight: '500',
      style: 'normal',
    },
    {
      path: './assets/fonts/YekanBakhFaNum-Regular.woff',
      weight: '400',
      style: 'normal',
    },
    {
      path: './assets/fonts/YekanBakhFaNum-Light.woff',
      weight: '300',
      style: 'normal',
    },
  ],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'اتوماسیون پردیس شگفت پارس جنوب',
  description: 'پنل اتوماسیون سازمانی پردیس شگفت پارس جنوب',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="fa" dir="rtl">
      <body className={`${yekanBakh.variable} antialiased`}>
        <main>{children}</main>
        
        <div className="font-primary">
        <Toaster dir='rtl' visibleToasts={20} richColors closeButton className='font-primary'/>
        <div className='font-primary'>

        </div>
      </body>
    </html>
  );
}
