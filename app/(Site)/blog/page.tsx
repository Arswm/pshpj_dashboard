import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import Image from 'next/image';
import Link from 'next/link';
import BlogImage from '@/public/images/blog/blogimage1.jpg';
import { Badge } from '@/components/ui/badge';
import { LuLaptopMinimalCheck } from 'react-icons/lu';
import { FaUser } from 'react-icons/fa';
import { IoEyeOutline } from 'react-icons/io5';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import BannerBlog from '@/public/images/blog/banner-order-illustration.jpg';
import BannerBlog2 from '@/public/images/blog/banner-blog-plusing.jpg';
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from '@/components/ui/pagination';

export default function Blog() {
  return (
    <section className="max-w-6xl px-6 lg:px-0 mx-auto mt-8">
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 lg:gap-4">
        {/* right */}
        <div className="lg:col-span-3 space-y-6">
          <Card className="grid grid-cols-1 md:grid-cols-3 overflow-hidden">
            <div className="h-52">
              <Image src={BlogImage} alt="blog image" className="size-full object-cover" />
            </div>

            <div className="-mt-3 col-span-2">
              <CardHeader>
                {/* badges */}
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge variant="blog">آژانس دیجیتال مارکتینگ پلاسینگ</Badge>
                  <Badge variant="blog">آژانس دیجیتال مارکتینگ پلاسینگ</Badge>
                </div>

                <CardTitle>
                  <Link className="text-xl" href="#">
                    معرفی آژانس چاپ و تبلیغات چاپزی
                  </Link>
                </CardTitle>

                <CardContent className="p-0 text-gray-600">
                  برند چاپزی، بخشی از شرکت پردیس …
                </CardContent>
              </CardHeader>

              <CardFooter className="py-3 px-0">
                <div className="flex items-center w-full text-gray-400 child:w-full text-xs md:text-sm">
                  <div className="flex items-center justify-center gap-x-1">
                    <LuLaptopMinimalCheck className="size-4" />
                    <span>2021/12/12</span>
                  </div>
                  <div className="flex items-center justify-center gap-x-2">
                    <FaUser className="size-4" />
                    <span>ارسال شده توسط admin</span>
                  </div>
                  <div className="flex items-center justify-center gap-x-2">
                    <IoEyeOutline className="size-4" />

                    <span>197</span>
                    <span>بازید</span>
                  </div>
                </div>
              </CardFooter>
            </div>
          </Card>

          <Card className="grid grid-cols-1 md:grid-cols-3 overflow-hidden">
            <div className="h-52">
              <Image src={BlogImage} alt="blog image" className="size-full object-cover" />
            </div>

            <div className="-mt-3 col-span-2">
              <CardHeader>
                {/* badges */}
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge variant="blog">آژانس دیجیتال مارکتینگ پلاسینگ</Badge>
                  <Badge variant="blog">آژانس دیجیتال مارکتینگ پلاسینگ</Badge>
                </div>

                <CardTitle>
                  <Link className="text-xl" href="#">
                    معرفی آژانس چاپ و تبلیغات چاپزی
                  </Link>
                </CardTitle>

                <CardContent className="p-0 text-gray-600">
                  برند چاپزی، بخشی از شرکت پردیس …
                </CardContent>
              </CardHeader>

              <CardFooter className="py-3 px-0">
                <div className="flex items-center w-full text-gray-400 child:w-full text-xs md:text-sm">
                  <div className="flex items-center justify-center gap-x-1">
                    <LuLaptopMinimalCheck className="size-4" />
                    <span>2021/12/12</span>
                  </div>
                  <div className="flex items-center justify-center gap-x-2">
                    <FaUser className="size-4" />
                    <span>ارسال شده توسط admin</span>
                  </div>
                  <div className="flex items-center justify-center gap-x-2">
                    <IoEyeOutline className="size-4" />

                    <span>197</span>
                    <span>بازید</span>
                  </div>
                </div>
              </CardFooter>
            </div>
          </Card>

          <Card className="grid grid-cols-1 md:grid-cols-3 overflow-hidden">
            <div className="h-52">
              <Image src={BlogImage} alt="blog image" className="size-full object-cover" />
            </div>

            <div className="-mt-3 col-span-2">
              <CardHeader>
                {/* badges */}
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge variant="blog">آژانس دیجیتال مارکتینگ پلاسینگ</Badge>
                  <Badge variant="blog">آژانس دیجیتال مارکتینگ پلاسینگ</Badge>
                </div>

                <CardTitle>
                  <Link className="text-xl" href="#">
                    معرفی آژانس چاپ و تبلیغات چاپزی
                  </Link>
                </CardTitle>

                <CardContent className="p-0 text-gray-600">
                  برند چاپزی، بخشی از شرکت پردیس …
                </CardContent>
              </CardHeader>

              <CardFooter className="py-3 px-0">
                <div className="flex items-center w-full text-gray-400 child:w-full text-xs md:text-sm">
                  <div className="flex items-center justify-center gap-x-1">
                    <LuLaptopMinimalCheck className="size-4" />
                    <span>2021/12/12</span>
                  </div>
                  <div className="flex items-center justify-center gap-x-2">
                    <FaUser className="size-4" />
                    <span>ارسال شده توسط admin</span>
                  </div>
                  <div className="flex items-center justify-center gap-x-2">
                    <IoEyeOutline className="size-4" />

                    <span>197</span>
                    <span>بازید</span>
                  </div>
                </div>
              </CardFooter>
            </div>
          </Card>

          <Card className="grid grid-cols-1 md:grid-cols-3 overflow-hidden">
            <div className="h-52">
              <Image src={BlogImage} alt="blog image" className="size-full object-cover" />
            </div>

            <div className="-mt-3 col-span-2">
              <CardHeader>
                {/* badges */}
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge variant="blog">آژانس دیجیتال مارکتینگ پلاسینگ</Badge>
                  <Badge variant="blog">آژانس دیجیتال مارکتینگ پلاسینگ</Badge>
                </div>

                <CardTitle>
                  <Link className="text-xl" href="#">
                    معرفی آژانس چاپ و تبلیغات چاپزی
                  </Link>
                </CardTitle>

                <CardContent className="p-0 text-gray-600">
                  برند چاپزی، بخشی از شرکت پردیس …
                </CardContent>
              </CardHeader>

              <CardFooter className="py-3 px-0">
                <div className="flex items-center w-full text-gray-400 child:w-full text-xs md:text-sm">
                  <div className="flex items-center justify-center gap-x-1">
                    <LuLaptopMinimalCheck className="size-4" />
                    <span>2021/12/12</span>
                  </div>
                  <div className="flex items-center justify-center gap-x-2">
                    <FaUser className="size-4" />
                    <span>ارسال شده توسط admin</span>
                  </div>
                  <div className="flex items-center justify-center gap-x-2">
                    <IoEyeOutline className="size-4" />

                    <span>197</span>
                    <span>بازید</span>
                  </div>
                </div>
              </CardFooter>
            </div>
          </Card>

          <Card className="grid grid-cols-1 md:grid-cols-3 overflow-hidden">
            <div className="h-52">
              <Image src={BlogImage} alt="blog image" className="size-full object-cover" />
            </div>

            <div className="-mt-3 col-span-2">
              <CardHeader>
                {/* badges */}
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge variant="blog">آژانس دیجیتال مارکتینگ پلاسینگ</Badge>
                  <Badge variant="blog">آژانس دیجیتال مارکتینگ پلاسینگ</Badge>
                </div>

                <CardTitle>
                  <Link className="text-xl" href="#">
                    معرفی آژانس چاپ و تبلیغات چاپزی
                  </Link>
                </CardTitle>

                <CardContent className="p-0 text-gray-600">
                  برند چاپزی، بخشی از شرکت پردیس …
                </CardContent>
              </CardHeader>

              <CardFooter className="py-3 px-0">
                <div className="flex items-center w-full text-gray-400 child:w-full text-xs md:text-sm">
                  <div className="flex items-center justify-center gap-x-1">
                    <LuLaptopMinimalCheck className="size-4" />
                    <span>2021/12/12</span>
                  </div>
                  <div className="flex items-center justify-center gap-x-2">
                    <FaUser className="size-4" />
                    <span>ارسال شده توسط admin</span>
                  </div>
                  <div className="flex items-center justify-center gap-x-2">
                    <IoEyeOutline className="size-4" />

                    <span>197</span>
                    <span>بازید</span>
                  </div>
                </div>
              </CardFooter>
            </div>
          </Card>

          <Card className="grid grid-cols-1 md:grid-cols-3 overflow-hidden">
            <div className="h-52">
              <Image src={BlogImage} alt="blog image" className="size-full object-cover" />
            </div>

            <div className="-mt-3 col-span-2">
              <CardHeader>
                {/* badges */}
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge variant="blog">آژانس دیجیتال مارکتینگ پلاسینگ</Badge>
                  <Badge variant="blog">آژانس دیجیتال مارکتینگ پلاسینگ</Badge>
                </div>

                <CardTitle>
                  <Link className="text-xl" href="#">
                    معرفی آژانس چاپ و تبلیغات چاپزی
                  </Link>
                </CardTitle>

                <CardContent className="p-0 text-gray-600">
                  برند چاپزی، بخشی از شرکت پردیس …
                </CardContent>
              </CardHeader>

              <CardFooter className="py-3 px-0">
                <div className="flex items-center w-full text-gray-400 child:w-full text-xs md:text-sm">
                  <div className="flex items-center justify-center gap-x-1">
                    <LuLaptopMinimalCheck className="size-4" />
                    <span>2021/12/12</span>
                  </div>
                  <div className="flex items-center justify-center gap-x-2">
                    <FaUser className="size-4" />
                    <span>ارسال شده توسط admin</span>
                  </div>
                  <div className="flex items-center justify-center gap-x-2">
                    <IoEyeOutline className="size-4" />

                    <span>197</span>
                    <span>بازید</span>
                  </div>
                </div>
              </CardFooter>
            </div>
          </Card>

          <Card className="grid grid-cols-1 md:grid-cols-3 overflow-hidden">
            <div className="h-52">
              <Image src={BlogImage} alt="blog image" className="size-full object-cover" />
            </div>

            <div className="-mt-3 col-span-2">
              <CardHeader>
                {/* badges */}
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge variant="blog">آژانس دیجیتال مارکتینگ پلاسینگ</Badge>
                  <Badge variant="blog">آژانس دیجیتال مارکتینگ پلاسینگ</Badge>
                </div>

                <CardTitle>
                  <Link className="text-xl" href="#">
                    معرفی آژانس چاپ و تبلیغات چاپزی
                  </Link>
                </CardTitle>

                <CardContent className="p-0 text-gray-600">
                  برند چاپزی، بخشی از شرکت پردیس …
                </CardContent>
              </CardHeader>

              <CardFooter className="py-3 px-0">
                <div className="flex items-center w-full text-gray-400 child:w-full text-xs md:text-sm">
                  <div className="flex items-center justify-center gap-x-1">
                    <LuLaptopMinimalCheck className="size-4" />
                    <span>2021/12/12</span>
                  </div>
                  <div className="flex items-center justify-center gap-x-2">
                    <FaUser className="size-4" />
                    <span>ارسال شده توسط admin</span>
                  </div>
                  <div className="flex items-center justify-center gap-x-2">
                    <IoEyeOutline className="size-4" />

                    <span>197</span>
                    <span>بازید</span>
                  </div>
                </div>
              </CardFooter>
            </div>
          </Card>

          <div className="!mt-16">
            <Pagination>
              <PaginationContent>
                <PaginationItem>
                  <PaginationLink
                    className="p-1 bg-gray-100 hover:text-white hover:bg-primary transition-all duration-300"
                    href="#"
                  >
                    1
                  </PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink
                    className="p-1 bg-gray-100 hover:text-white hover:bg-primary transition-all duration-300"
                    href="#"
                  >
                    2
                  </PaginationLink>
                </PaginationItem>
                <PaginationItem className="px-2">
                  <PaginationLink
                    className="p-1 bg-gray-100 hover:text-white hover:bg-primary transition-all duration-300 px-4 w-full"
                    href="#"
                  >
                    بعدی
                  </PaginationLink>
                </PaginationItem>
              </PaginationContent>
            </Pagination>
          </div>
        </div>

        {/* left */}

        <div className="col-span-1 space-y-4">
          {/* searchbox */}
          <Card className="pt-4">
            <CardContent className="flex flex-row lg:flex-col  items-center gap-4 ">
              <div className="w-full">
                <Label htmlFor="search" className="text-gray-600">
                  جستجو
                </Label>
                <Input type="text" placeholder="جستجو کردن..." />
              </div>
              <Button className="text-sm translate-y-3 lg:translate-y-0">جستجو</Button>
            </CardContent>
          </Card>

          <Card className="p-5">
            <Image src={BannerBlog} alt="" />
          </Card>
          <Card className="p-5">
            <Image src={BannerBlog2} alt="" />
          </Card>
          <Card className="p-5">
            <Image src={BannerBlog} alt="" />
          </Card>
          <Card className="p-5">
            <Image src={BannerBlog2} alt="" />
          </Card>
        </div>
      </div>
    </section>
  );
}
