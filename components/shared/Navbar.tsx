'use client';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import LogoImage from '@/public/images/navbar/logo-pshpj-min.png';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { IoChevronDown, IoClose } from 'react-icons/io5';
import { RxHamburgerMenu } from 'react-icons/rx';

const anotherSites = [
  {
    title: 'پلاسینگ',
    href: 'https://plusing.ir/',
  },
  {
    title: 'نارینگ',
    href: 'https://naring.agency/',
  },
  {
    title: 'یک پیامک',
    href: 'https://yekpayamak.com/',
  },
  {
    title: 'گرافیک دینگ',
    href: 'https://graphicding.com/',
  },
  {
    title: 'چاپزی',
    href: 'https://chapzi.com',
  },
  {
    title: 'کجاباما',
    href: 'https://kojabama.com',
  },
];

export default function Navbar() {
  const [openMenu, setOpenMenu] = useState(false);
  const [isOpemDropdown, setIsOpemDropdown] = useState(false);
  return (
    <header className=" bg-white w-full border-b border-gray-50 shadow-sm relative">
      <div className="sm:container mx-auto p-4 flex justify-between sm:justify-center items-center gap-4 lg:gap-14">
        <div className="w-[125px]">
          <Image src={LogoImage} alt="Logo" />
        </div>
        <nav className="hidden sm:block">
          <ul className="flex items-center gap-6 xl:gap-10 text-customGray text-xs lg:text-sm xl:text-base">
            <li className="hover:text-primary">
              <Link href="/">خانه</Link>
            </li>
            <li className="hover:text-primary relative group">
              <div className="flex items-center gap-2 cursor-pointer">
                <span> دیگر سایت ها</span>
                <IoChevronDown className="size-4 transition-all group-hover:rotate-180" />
              </div>

              <div className="absolute shadow shadow-primary bg-white p-2 rounded left-0 right-0 hidden group-hover:block">
                <div className="h-full w-full flex flex-col items-center justify-center">
                  <ul>
                    {anotherSites.map((item) => (
                      <li key={item.title}>
                        <Link
                          className="px-1 py-3 block text-gray-900 md:text-xs lg:text-sm hover:text-primary"
                          href={item.href}
                        >
                          {item.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </li>
            <li className="hover:text-primary">
              <Link href="/">وبلاگ</Link>
            </li>
            <li className="hover:text-primary">
              <Link href="/contact">ارتباط با ما</Link>
            </li>
            <li className="hover:text-primary">
              <Link href="/about">درباره ما</Link>
            </li>
            <li className="hover:text-primary">
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

        <Button
          className="sm:hidden"
          onClick={() => {
            setOpenMenu((prev) => !prev);
            setIsOpemDropdown(false);
          }}
        >
          {openMenu ? <IoClose className="!size-5" /> : <RxHamburgerMenu className="!size-5" />}
        </Button>
      </div>

      {/* mobile */}
      <div
        className={cn(
          'sm:hidden transition-all absolute left-0 right-0 top-full duration-300 overflow-hidden bg-gray-50 z-50',
          openMenu ? 'h-60' : 'h-0',
          openMenu && isOpemDropdown && 'h-[420px]',
        )}
      >
        <ul className="flex flex-col text-customGray text-sm">
          <li>
            <Link className="p-2 block hover:text-primary" href="/">
              خانه
            </Link>
          </li>
          <li className="hover:text-primary group">
            <div
              onClick={() => setIsOpemDropdown((prev) => !prev)}
              className="p-2 flex items-center gap-2 cursor-pointer"
            >
              <span> دیگر سایت ها</span>
              <IoChevronDown
                className={cn('size-4 transition-all', isOpemDropdown ? 'rotate-180' : 'rotate-0')}
              />
            </div>

            {isOpemDropdown && (
              <ul className="px-4 py-1 space-y-4 text-xs border-b bg-gray-100">
                <li>
                  <Link
                    className=" block text-gray-900 md:text-xs lg:text-sm hover:text-primary"
                    href="#"
                  >
                    پلاسینگ
                  </Link>
                </li>
                <li>
                  <Link
                    className=" block text-gray-900 md:text-xs lg:text-sm hover:text-primary"
                    href="#"
                  >
                    نارینگ
                  </Link>
                </li>
                <li>
                  <Link
                    className=" block text-gray-900 md:text-xs lg:text-sm hover:text-primary"
                    href="#"
                  >
                    یک پیامک
                  </Link>
                </li>
                <li>
                  <Link
                    className=" block text-gray-900 md:text-xs lg:text-sm hover:text-primary"
                    href="#"
                  >
                    گرافیک دینگ
                  </Link>
                </li>
                <li>
                  <Link
                    className=" block text-gray-900 md:text-xs lg:text-sm hover:text-primary"
                    href="#"
                  >
                    چاپزی
                  </Link>
                </li>
                <li>
                  <Link
                    className=" block text-gray-900 md:text-xs lg:text-sm hover:text-primary"
                    href="#"
                  >
                    کجاباما
                  </Link>
                </li>
              </ul>
            )}
          </li>
          <li>
            <Link className="p-2 block hover:text-primary" href="/">
              وبلاگ
            </Link>
          </li>
          <li>
            <Link className="p-2 block hover:text-primary" href="/">
              ارتباط با ما
            </Link>
          </li>
          <li>
            <Link className="p-2 block hover:text-primary" href="/">
              درباره ما
            </Link>
          </li>
          <li>
            <Link className="p-2 block hover:text-primary" href="/">
              مشتریان ما
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
}
