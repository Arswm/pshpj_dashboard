import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { Eye, FilePenLine, PlusCircle, Trash } from 'lucide-react';
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from '@/components/ui/pagination';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import Image from 'next/image';

export default async function UserPage() {
  return (
    <>
      <div className={'container'}>
        <section className={'mt-14 '}>
          <div className={'flex justify-end items-center gap-4'}>
            <div className="flex gap-4 min-w-[400px] items-center">
              <Select>
                <SelectTrigger className="bg-white h-10 focus:ring-0 lg:min-w-72">
                  <SelectValue placeholder="فیلتر کردن" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="light">تاریخ پایان قرارداد</SelectItem>
                  <SelectItem value="dark">نزدیک ترین تاریخ تولد</SelectItem>
                  <SelectItem value="system">بیمه تامین اجتماعی</SelectItem>
                  <SelectItem value="system">پروفایل کامل نشده</SelectItem>
                </SelectContent>
              </Select>

              <Link href={'/dashboard/blogs/create'}>
                <Button variant={'primary'} className={'text-sm'}>
                  <PlusCircle />
                  افزودن مقاله جدید
                </Button>
              </Link>
            </div>
          </div>

          <div className="flex justify-between py-4 bg-white border mt-12 items-center px-6">
            <h3 className={'text-md'}>لیست مقالات</h3>
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
    </>
  );
}
