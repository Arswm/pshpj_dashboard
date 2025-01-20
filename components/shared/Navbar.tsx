'use client';
import LogoImage from '@/public/images/navbar/logo-pshpj-min.png';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { IoChevronUp, IoClose } from 'react-icons/io5';
import { RxHamburgerMenu } from 'react-icons/rx';

export default function Navbar() {
  const [openMenu, setOpenMenu] = useState(false);
  const [isOpemDropdown, setIsOpemDropdown] = useState(false);
  return (
    <header className="sticky left-0 right-0 top-0 bg-white z-30 w-full border-b border-gray-50 shadow-sm">
      <div className="container mx-auto p-4 xl:p-5 flex justify-between sm:justify-center items-center gap-4 lg:gap-14">
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
                <IoChevronUp className="size-4 transition-all group-hover:rotate-180" />
              </div>

              <div className="absolute border border-customBlue bg-white p-2 rounded left-0 right-0 hidden group-hover:block">
                <div className="h-full w-full flex flex-col items-center justify-center">
                  <ul>
                    <li>
                      <Link
                        className="px-1 py-2 block text-gray-900 md:text-xs lg:text-sm hover:text-primary"
                        href="#"
                      >
                        پلاسینگ
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="px-1 py-2 block text-gray-900 md:text-xs lg:text-sm hover:text-primary"
                        href="#"
                      >
                        نارینگ
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="px-1 py-2 block text-gray-900 md:text-xs lg:text-sm hover:text-primary"
                        href="#"
                      >
                        یک پیامک
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="px-1 py-2 block text-gray-900 md:text-xs lg:text-sm hover:text-primary"
                        href="#"
                      >
                        گرافیک دینگ
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="px-1 py-2 block text-gray-900 md:text-xs lg:text-sm hover:text-primary"
                        href="#"
                      >
                        چاپزی
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="px-1 py-2 block text-gray-900 md:text-xs lg:text-sm hover:text-primary"
                        href="#"
                      >
                        کجاباما
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </li>
            <li className="hover:text-primary">
              <Link href="/">وبلاگ</Link>
            </li>
            <li className="hover:text-primary">
              <Link href="/">ارتباط با ما</Link>
            </li>
            <li className="hover:text-primary">
              <Link href="/">درباره ما</Link>
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

        <Button className="sm:hidden" onClick={() => setOpenMenu((prev) => !prev)}>
          {openMenu ? <IoClose className="!size-5" /> : <RxHamburgerMenu className="!size-5" />}
        </Button>
      </div>

      {/* mobile */}
      <div
        className={cn(
          'sm:hidden transition-all absolute left-0 right-0 top-full duration-300 overflow-hidden bg-gray-50',
          openMenu ? 'h-auto' : 'h-0',
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
              <IoChevronUp
                className={cn('size-4 transition-all', isOpemDropdown ? 'rotate-180' : 'rotate-0')}
              />
            </div>

            {isOpemDropdown && (
              <ul className="px-4 py-1 space-y-4 text-xs border-b ">
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
