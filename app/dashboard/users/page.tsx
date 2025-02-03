import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { AlertCircle, FileText, Mail, MessageCircle, PlusCircle, Search } from 'lucide-react';
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
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { GetUsers } from './_core/requests';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

export default async function UserPage({ searchParams }: { searchParams: { page?: string } }) {
  const { page } = await searchParams;
  const response = await GetUsers(page ?? '1');

  if (!response || !response.success) {
    return (
      <div className="flex flex-col items-center justify-center gap-4 h-2/4 bg-white shadow rounded-md py-14">
        <Image
          className="block size-64"
          src={'/images/not-founds/CompanyNotFound.png'}
          alt=""
          title=""
          width={250}
          height={250}
        />
        <div className="lg:w-[800px]">
          <Alert variant="destructive">
            <div className="flex items-center justify-start gap-2 mb-2">
              <AlertCircle className="h-4 w-4" />
              <AlertTitle className="m-0">خطا</AlertTitle>
            </div>
            <AlertDescription>مشکلی پیش آمده</AlertDescription>
          </Alert>
        </div>
      </div>
    );
  }

  const users = response.data.data;
  const pagination = response.data;

  console.log(pagination);

  return (
    <>
      <div className={'container'}>
        <section className={'bg-white shadow rounded-md p-4'}>
          <div className=" rounded-t-sm mb-10">
            <div className={'flex justify-between items-center gap-4'}>
              <h3 className="text-lg font-medium text-gray-500 ms-8">لیست کاربران</h3>

              <div className="flex gap-4 items-center">
                <Label className="relative flex items-center h-8">
                  <div className="absolute flex gap-2 ps-3 items-center text-gray-400 pointer-events-none">
                    <Search size={20} />
                  </div>
                  <Input
                    className="border shadow-none h-10 min-w-[300px] ps-10 rounded-md"
                    placeholder="جستجوی کاربر"
                  />
                </Label>

                <Select>
                  <SelectTrigger className="bg-white h-10 shadow-none focus:ring-0 lg:min-w-72">
                    <SelectValue placeholder="فیلتر کردن" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="light">تاریخ پایان قرارداد</SelectItem>
                    <SelectItem value="dark">نزدیک ترین تاریخ تولد</SelectItem>
                    <SelectItem value="system">بیمه تامین اجتماعی</SelectItem>
                    <SelectItem value="system">پروفایل کامل نشده</SelectItem>
                  </SelectContent>
                </Select>

                <Link href={'/dashboard/users/create'}>
                  <Button variant={'primary'} className={'text-sm h-10'}>
                    <PlusCircle />
                    افزودن مقاله جدید
                  </Button>
                </Link>
              </div>
            </div>

            <div className="py-4 bg-gray-100 flex gap-2 rounded-sm mt-8">
              <div className="flex-1 text-center">
                <p>نام و نام خانوادگی</p>
              </div>
              <div className="flex-1 text-center">
                <p>عنوان شغلی</p>
              </div>
              <div className="flex-1 text-center">
                <p>ارسال پیام</p>
              </div>
              <div className="flex-1 text-center">
                <p>شماره تماس</p>
              </div>
              <div className="flex-1 text-center">
                <p>درخواست ها</p>
              </div>
            </div>
          </div>

          {/* loop over users */}

          <TooltipProvider>
            {users.map((user) => (
              <div key={user.id} className="flex gap-2 border-b py-3 mb-2 ms-8">
                <div className="flex justify-start flex-1 text-center text-sm items-center">
                  <div className="flex items-center justify-start gap-2 ps-2">
                    <Avatar>
                      {user.image ? (
                        <AvatarImage
                          src={user.image.url}
                          alt={user.image.alt}
                          title={user.image.title}
                        />
                      ) : (
                        <AvatarFallback>PS</AvatarFallback>
                      )}
                    </Avatar>
                    <p className="text-wrap max-w-28 line-clamp-2 truncate text-ellipsis">
                      {user.first_name} {user.last_name}
                    </p>
                  </div>
                </div>
                <div className="flex justify-center flex-1 text-center text-sm items-center">
                  <p>
                    {user.job_title || 'عنوان شغلی'} ({user.role || 'نقش کاربر'})
                  </p>
                </div>
                <div className="flex justify-center gap-2 flex-1 text-center text-sm items-center">
                  <Tooltip>
                    <TooltipTrigger>
                      <MessageCircle strokeWidth={1.5} size={20} />
                    </TooltipTrigger>
                    <TooltipContent>
                      <span>ارسال پیام</span>
                    </TooltipContent>
                  </Tooltip>

                  <Tooltip>
                    <TooltipTrigger>
                      <Mail strokeWidth={1.5} size={20} />
                    </TooltipTrigger>
                    <TooltipContent>
                      <span>ارسال پیام</span>
                    </TooltipContent>
                  </Tooltip>
                </div>
                <div className="flex justify-center flex-1 text-center text-sm items-center">
                  <p>{user.phone}</p>
                </div>

                <div className="flex justify-center flex-1 text-center text-sm items-center gap-3">
                  <Tooltip>
                    <TooltipTrigger>
                      <FileText strokeWidth={1.5} size={20} />
                    </TooltipTrigger>
                    <TooltipContent>
                      <span>نمایش درخواست ها</span>
                    </TooltipContent>
                  </Tooltip>
                </div>
              </div>
            ))}
          </TooltipProvider>
        </section>
        <Pagination className="justify-end mt-4 text-gray-600">
          <PaginationContent>
            {/* Previous Page Link */}
            <PaginationItem>
              <PaginationPrevious
                className="bg-white shadow rounded"
                href={`/dashboard/users?page=${pagination.current_page - 1 > 0 ? pagination.current_page - 1 : 1}`}
              />
            </PaginationItem>

            {/* Page Number Links */}
            <PaginationItem className="flex gap-2">
              {pagination.current_page > 1 && (
                <>
                  {/* First Page Link */}
                  <PaginationLink
                    href={`/dashboard/users?page=1`}
                    className="bg-white shadow rounded"
                  >
                    1
                  </PaginationLink>

                  {/* Show Ellipsis if there are skipped pages between current page and first */}
                  {pagination.current_page > 3 && (
                    <PaginationEllipsis className="bg-white shadow rounded" />
                  )}
                </>
              )}

              {/* Dynamic Page Number Links */}
              {Array.from(
                { length: Math.min(5, pagination.last_page) },
                (_, index) => pagination.current_page + index,
              ).map((page) =>
                page <= pagination.last_page ? (
                  <PaginationLink
                    key={page}
                    href={`/dashboard/users?page=${page}`}
                    className={`bg-white shadow rounded ${page === pagination.current_page ? 'bg-primary text-white' : 'bg-white'}`}
                  >
                    {page}
                  </PaginationLink>
                ) : null,
              )}

              {/* Show Ellipsis if there are skipped pages between current page and last */}
              {pagination.current_page < pagination.last_page - 2 && (
                <PaginationEllipsis className="bg-white shadow rounded" />
              )}

              {/* Last Page Link */}
              {pagination.current_page < pagination.last_page && (
                <PaginationLink
                  href={`/dashboard/users?page=${pagination.last_page}`}
                  className="bg-white shadow rounded"
                >
                  {pagination.last_page}
                </PaginationLink>
              )}
            </PaginationItem>

            {/* Next Page Link */}
            <PaginationItem>
              <PaginationNext
                className="bg-white shadow rounded"
                href={`/dashboard/users?page=${pagination.current_page + 1 <= pagination.last_page ? pagination.current_page + 1 : pagination.last_page}`}
              />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </div>
    </>
  );
}
