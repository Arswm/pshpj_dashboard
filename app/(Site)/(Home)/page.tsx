'use client';
import LogoImage from '@/assets/images/logo-pshpj-min.png';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { MenuIcon } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

export default function Home() {
  const [openMenu, setOpenMenu] = useState(false);
  return (
    <>
      <div className={'min-h-dvh'}>
        <header className="w-full border-b border-customGray">
          <div className="container mx-auto p-4 xl:p-5 flex justify-between sm:justify-center items-center gap-4 lg:gap-14">
            <div className="w-[125px]">
              <Image src={LogoImage} alt="Logo" />
            </div>
            <nav className="hidden sm:block">
              <ul className="flex items-center gap-6 xl:gap-10 text-customGray text-xs lg:text-sm xl:text-base">
                <li>
                  <Link href="/">خانه</Link>
                </li>
                <li>
                  <Link href="/">دیگر سایت ها</Link>
                </li>
                <li>
                  <Link href="/">وبلاگ</Link>
                </li>
                <li>
                  <Link href="/">ارتباط با ما</Link>
                </li>
                <li>
                  <Link href="/">درباره ما</Link>
                </li>
                <li>
                  <Link href="/">مشتریان ما</Link>
                </li>
              </ul>
            </nav>

            <Link
              href="tel:02171053977"
              className="h-fit hidden md:block px-8 lg:px-16 py-2 bg-gradient-to-r from-[#23BD9A] to-[#21DCB2] text-white"
            >
              021-71053977
            </Link>

            <Button onClick={() => setOpenMenu((prev) => !prev)}>
              <MenuIcon className="!size-5" />
            </Button>
          </div>
          <div
            className={cn(
              'bg-red-500 translate-y-full transition-all duration-300 overflow-hidden',
              openMenu ? 'h-80' : 'h-0',
            )}
          >
            s
          </div>
        </header>
      </div>
    </>
  );
}
