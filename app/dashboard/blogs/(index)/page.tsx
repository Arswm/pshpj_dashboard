import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import {
  Eye,
  FilePenLine,
  Folder,
  LucideImage,
  Music,
  PlusCircle,
  StickyNote,
  Trash,
} from 'lucide-react';

import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Button } from '@/components/ui/button';

import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from '@/components/ui/pagination';

function BlogsPage() {
  return (
    <div className={'container'}>
      <section className={'grid md:grid-cols-5 gap-4 border bg-white shadow-md'}>
        <Link href={'#'} className={'flex items-center gap-2 p-2 rounded border-e py-6'}>
          <div
            className={
              'bg-purple-100 min-h-11 h-full flex justify-center items-center px-4 rounded-sm'
            }
          >
            <Folder className={'text-purple-600'} />
          </div>
          <div className={'space-y-1.5'}>
            <h3 className={'text-purple-600 text-sm'}>تعداد کل مقالات</h3>
            <p className={'text-xs'}>192 عدد</p>
          </div>
        </Link>
        <Link href={'#'} className={'flex items-center gap-2 p-2 rounded border-e py-6'}>
          <div
            className={
              'bg-green-100 min-h-11 h-full flex justify-center items-center px-4 rounded-sm'
            }
          >
            <LucideImage className={'text-green-600'} />
          </div>
          <div className={'space-y-1.5'}>
            <h3 className={'text-green-600 text-sm'}>تعداد کل مقالات</h3>
            <p className={'text-xs'}>192 عدد</p>
          </div>
        </Link>
        <Link href={'#'} className={'flex items-center gap-2 p-2 rounded border-e py-6'}>
          <div
            className={
              'bg-blue-100 min-h-11 h-full flex justify-center items-center px-4 rounded-sm'
            }
          >
            <Music className={'text-blue-600'} />
          </div>
          <div className={'space-y-1.5'}>
            <h3 className={'text-blue-600 text-sm'}>مقالات پیش نویس</h3>
            <p className={'text-xs'}>192 عدد</p>
          </div>
        </Link>
        <Link href={'#'} className={'flex items-center gap-2 p-2 rounded border-e py-6'}>
          <div
            className={
              'bg-orange-100 min-h-11 h-full flex justify-center items-center px-4 rounded-sm'
            }
          >
            <Music className={'text-orange-600'} />
          </div>
          <div className={'space-y-1.5'}>
            <h3 className={'text-orange-600 text-sm'}>مقالات زباله دان</h3>
            <p className={'text-xs'}>192 عدد</p>
          </div>
        </Link>
        <Link href={'#'} className={'flex items-center gap-2 p-2 rounded border-e py-6'}>
          <div
            className={
              'bg-sky-100 min-h-11 h-full flex justify-center items-center px-4 rounded-sm'
            }
          >
            <StickyNote className={'text-sky-600'} />
          </div>
          <div className={'space-y-1.5'}>
            <h3 className={'text-sky-600 text-sm'}>دسته بندی و برچسب</h3>
            <p className={'text-xs'}>192 عدد</p>
          </div>
        </Link>
      </section>

      <section className={'mt-14 '}>
        <div className={'grid md:grid-cols-5 gap-4'}>
          <Select>
            <SelectTrigger className="bg-white h-10">
              <SelectValue placeholder="انتخاب دسته بندی" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="light">options ...</SelectItem>
              <SelectItem value="dark">options ...</SelectItem>
              <SelectItem value="system">options ...</SelectItem>
            </SelectContent>
          </Select>

          <Select>
            <SelectTrigger className="bg-white h-10">
              <SelectValue placeholder="انتخاب زبان" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="light">options ...</SelectItem>
              <SelectItem value="dark">options ...</SelectItem>
              <SelectItem value="system">options ...</SelectItem>
            </SelectContent>
          </Select>

          <Select>
            <SelectTrigger className="bg-white h-10">
              <SelectValue placeholder="نمایش تاریخ" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="light">options ...</SelectItem>
              <SelectItem value="dark">options ...</SelectItem>
              <SelectItem value="system">options ...</SelectItem>
            </SelectContent>
          </Select>

          <Select>
            <SelectTrigger className="bg-white h-10">
              <SelectValue placeholder="نمایش تاریخ" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="light">options ...</SelectItem>
              <SelectItem value="dark">options ...</SelectItem>
              <SelectItem value="system">options ...</SelectItem>
            </SelectContent>
          </Select>

          <Select>
            <SelectTrigger className="bg-white h-10">
              <SelectValue placeholder="نمایش تاریخ" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="light">options ...</SelectItem>
              <SelectItem value="dark">options ...</SelectItem>
              <SelectItem value="system">options ...</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="flex justify-between py-4 bg-white border mt-12 items-center px-6">
          <h3 className={'text-md'}>لیست مقالات</h3>
          <Link href={'/dashboard/blogs/create'}>
            <Button variant={'primary'} className={'text-sm'}>
              <PlusCircle />
              افزودن مقاله جدید
            </Button>
          </Link>
        </div>
        <div className="flex gap-2 py-4 bg-white px-4 border-b border-e border-s items-center">
          <input type="checkbox" className="w-4 h-4" />
          <div className="flex-1 text-center">
            <p>عنوان مقالات</p>
          </div>
          <div className="flex-1 text-center">
            <p>دسته بندی</p>
          </div>
          <div className="flex-1 text-center">
            <p>برچسب</p>
          </div>
          <div className="flex-1 text-center">
            <p>نویسنده</p>
          </div>
          <div className="flex-1 text-center">
            <p>وضعیت</p>
          </div>
          <div className="flex-1 text-center">
            <p>سئو</p>
          </div>
          <div className="flex-1 text-center">
            <p>عملیات</p>
          </div>
        </div>

        {/* loop over posts */}
        <div className="flex gap-2 py-4 bg-white px-4 border-b border-e border-s items-center">
          <input type="checkbox" className="w-4 h-4" />
          <div className="flex justify-center flex-1 text-center text-sm items-center">
            <div className="flex items-center justify-start gap-2 ps-2">
              <Image
                className="w-16 h-16 object-cover rounded-md"
                src={'/images/blog-page/blog-images-placeholder.png'}
                width={128}
                height={128}
                alt=""
              />

              <p className="text-wrap max-w-28 line-clamp-2 truncate text-ellipsis">مقاله تست</p>
            </div>
          </div>
          <div className="flex justify-center flex-1 text-center text-sm items-center">
            <p>گرافیک</p>
          </div>
          <div className="flex justify-center flex-1 text-center text-sm items-center">
            <p>گرافیک دیجیتال</p>
          </div>
          <div className="flex justify-center flex-1 text-center text-sm items-center">
            <p>آرسام دیوبندی</p>
          </div>
          <div className="flex flex-col gap-2 justify-center flex-1 text-center text-sm items-center">
            <p className="bg-green-200 px-2 py-1 rounded w-fit mx-auto">منتشر شده</p>
          </div>
          <div className="flex justify-center flex-1 text-center text-sm items-center">
            <p className="text-sky-600">4.8%</p>
          </div>

          <TooltipProvider>
            <div className="flex justify-center flex-1 text-center text-sm items-center gap-3">
              <Tooltip>
                <TooltipTrigger>
                  <FilePenLine size={20} />
                </TooltipTrigger>
                <TooltipContent>
                  <span>ویرایش مقاله</span>
                </TooltipContent>
              </Tooltip>

              <Tooltip>
                <TooltipTrigger>
                  <Trash size={20} />
                </TooltipTrigger>
                <TooltipContent>
                  <span>زباله دان</span>
                </TooltipContent>
              </Tooltip>

              <Tooltip>
                <TooltipTrigger>
                  <Eye size={20} />
                </TooltipTrigger>
                <TooltipContent>
                  <span>پیش نمایش</span>
                </TooltipContent>
              </Tooltip>
            </div>
          </TooltipProvider>
        </div>

        <div className="flex gap-2 py-4 bg-white px-4 border-b border-e border-s items-center">
          <input type="checkbox" className="w-4 h-4" />
          <div className="flex justify-center flex-1 text-center text-sm items-center">
            <div className="flex items-center justify-start gap-2 ps-2">
              <Image
                className="w-16 h-16 object-cover rounded-md"
                src={'/images/blog-page/blog-images-placeholder.png'}
                width={128}
                height={128}
                alt=""
              />

              <p className="text-wrap max-w-28 line-clamp-2 truncate text-ellipsis">مقاله تست</p>
            </div>
          </div>
          <div className="flex justify-center flex-1 text-center text-sm items-center">
            <p>گرافیک</p>
          </div>
          <div className="flex justify-center flex-1 text-center text-sm items-center">
            <p>گرافیک دیجیتال</p>
          </div>
          <div className="flex justify-center flex-1 text-center text-sm items-center">
            <p>آرسام دیوبندی</p>
          </div>
          <div className="flex flex-col gap-2 justify-center flex-1 text-center text-sm items-center">
            <p className="bg-gray-100 px-2 py-1 rounded w-fit mx-auto">زمان بندی شده</p>
          </div>
          <div className="flex justify-center flex-1 text-center text-sm items-center">
            <p className="text-sky-600">4.8%</p>
          </div>

          <TooltipProvider>
            <div className="flex justify-center flex-1 text-center text-sm items-center gap-3">
              <Tooltip>
                <TooltipTrigger>
                  <FilePenLine size={20} />
                </TooltipTrigger>
                <TooltipContent>
                  <span>ویرایش مقاله</span>
                </TooltipContent>
              </Tooltip>

              <Tooltip>
                <TooltipTrigger>
                  <Trash size={20} />
                </TooltipTrigger>
                <TooltipContent>
                  <span>زباله دان</span>
                </TooltipContent>
              </Tooltip>

              <Tooltip>
                <TooltipTrigger>
                  <Eye size={20} />
                </TooltipTrigger>
                <TooltipContent>
                  <span>پیش نمایش</span>
                </TooltipContent>
              </Tooltip>
            </div>
          </TooltipProvider>
        </div>

        <div className="flex gap-2 py-4 bg-white px-4 border-b border-e border-s items-center">
          <input type="checkbox" className="w-4 h-4" />
          <div className="flex justify-center flex-1 text-center text-sm items-center">
            <div className="flex items-center justify-start gap-2 ps-2">
              <Image
                className="w-16 h-16 object-cover rounded-md"
                src={'/images/blog-page/blog-images-placeholder.png'}
                width={128}
                height={128}
                alt=""
              />

              <p className="text-wrap max-w-28 line-clamp-2 truncate text-ellipsis">مقاله تست</p>
            </div>
          </div>
          <div className="flex justify-center flex-1 text-center text-sm items-center">
            <p>گرافیک</p>
          </div>
          <div className="flex justify-center flex-1 text-center text-sm items-center">
            <p>گرافیک دیجیتال</p>
          </div>
          <div className="flex justify-center flex-1 text-center text-sm items-center">
            <p>آرسام دیوبندی</p>
          </div>
          <div className="flex flex-col gap-2 justify-center flex-1 text-center text-sm items-center">
            <p className="bg-red-100 px-2 py-1 rounded w-fit mx-auto">پیش نویس</p>
          </div>
          <div className="flex justify-center flex-1 text-center text-sm items-center">
            <p className="text-sky-600">4.8%</p>
          </div>

          <TooltipProvider>
            <div className="flex justify-center flex-1 text-center text-sm items-center gap-3">
              <Tooltip>
                <TooltipTrigger>
                  <FilePenLine size={20} />
                </TooltipTrigger>
                <TooltipContent>
                  <span>ویرایش مقاله</span>
                </TooltipContent>
              </Tooltip>

              <Tooltip>
                <TooltipTrigger>
                  <Trash size={20} />
                </TooltipTrigger>
                <TooltipContent>
                  <span>زباله دان</span>
                </TooltipContent>
              </Tooltip>

              <Tooltip>
                <TooltipTrigger>
                  <Eye size={20} />
                </TooltipTrigger>
                <TooltipContent>
                  <span>پیش نمایش</span>
                </TooltipContent>
              </Tooltip>
            </div>
          </TooltipProvider>
        </div>

        <Pagination className="justify-end mt-4 text-gray-600">
          <PaginationContent>
            <PaginationItem>
              <PaginationNext className="bg-white shadow rounded" href="#" />
            </PaginationItem>
            <PaginationItem className="flex gap-2">
              <PaginationLink className="bg-white shadow rounded" href="#">
                1
              </PaginationLink>
              <PaginationLink className="bg-white shadow rounded" href="#">
                2
              </PaginationLink>
              <PaginationLink className="bg-white shadow rounded" href="#">
                3
              </PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationEllipsis className="bg-white shadow rounded" />
            </PaginationItem>
            <PaginationItem>
              <PaginationPrevious className="bg-white shadow rounded" href="#" />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </section>
    </div>
  );
}

export default BlogsPage;
