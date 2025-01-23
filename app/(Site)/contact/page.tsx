'use client';
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
import ContactBackground from '@/public/images/contact/world-map-png-35418.png';
import { FaFacebook, FaTelegram, FaTwitter, FaWhatsapp, FaYoutube } from 'react-icons/fa';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';

export default function page() {
  return (
    <div className="min-h-[80vh] py-40 bg-hero bg-no-repeat bg-center bg-cover bg-blend-multiply bg-customBlue/70 px-4 md:px-6 ">
      <div className="grid place-items-center size-full max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 w-full gap-4">
          <div className="md:pl-16">
            <Card className="rounded bg-white h-auto sm:h-full py-4 relative space-y-8">
              <Image
                src={ContactBackground}
                alt=""
                className="w-full h-96 object-cover md:h-full opacity-10"
              />
              <div className="absolute inset-0 size-full">
                <CardHeader>
                  <CardTitle className="text-center text-xl font-medium pb-6">
                    اطلاعات تماس
                  </CardTitle>
                  <CardDescription className="text-center text-lg space-y-2.5 md:mt-8">
                    <div>
                      <span>تلفن: </span>
                      <Link className="text-primary" target="_blank" href="tel:02171053977">
                        02171053977
                      </Link>
                    </div>
                    <div>
                      <span>آدرس ایمیل: </span>
                      <Link
                        className="text-primary"
                        target="_blank"
                        href="mailto:pshpj.ir@gmail.com"
                      >
                        pshpj.ir@gmail.com
                      </Link>
                    </div>
                  </CardDescription>
                </CardHeader>
                <CardContent className="md:mt-8">
                  <div className="text-center space-y-4">
                    <p className="block text-xl">آدرس شرکت</p>

                    <span className="block text-base text-gray-600">
                      تهران – منطقه 22 – شهرک میلاد – بلوک C – واحد 13
                    </span>
                  </div>
                </CardContent>
                <CardFooter className="md:mt-8">
                  <div className="flex flex-col gap-4 w-full text-white">
                    <button className="bg-[#61CE70] w-full py-2">پیام در واتساپ</button>
                    <button className="bg-[#1EADE9] w-full py-2">پیام در تلگرام</button>
                  </div>
                </CardFooter>
              </div>
            </Card>
          </div>

          <div>
            <Card className="rounded bg-white relative h-auto py-4">
              <CardHeader>
                <div className="flex flex-col lg:flex-row gap-4 items-center justify-between w-full">
                  <CardTitle className="text-xl font-medium">به ما پیام بفرستید</CardTitle>
                  <CardDescription>
                    <div className="flex flex-wrap items-center justify-center gap-2 text-white">
                      <Link
                        className="block p-2 bg-[#4e69a2] rounded hover:scale-110 transition-transform duration-300"
                        href="#"
                      >
                        <FaFacebook className="size-6 sm:size-5" />
                      </Link>
                      <Link
                        className="block p-2 bg-[#32a9f2] rounded hover:scale-110 transition-transform duration-300"
                        href="#"
                      >
                        <FaTwitter className="size-6 sm:size-5" />
                      </Link>
                      <Link
                        className="block p-2 bg-[#d13534] rounded hover:scale-110 transition-transform duration-300"
                        href="#"
                      >
                        <FaYoutube className="size-6 sm:size-5" />
                      </Link>
                      <Link
                        className="block p-2 bg-[#3ad774] rounded hover:scale-110 transition-transform duration-300"
                        href="#"
                      >
                        <FaWhatsapp className="size-6 sm:size-5" />
                      </Link>
                      <Link
                        className="block p-2 bg-[#40ade2] rounded hover:scale-110 transition-transform duration-300"
                        href="#"
                      >
                        <FaTelegram className="size-6 sm:size-5" />
                      </Link>
                    </div>
                  </CardDescription>
                </div>
              </CardHeader>
              <CardContent>
                <form>
                  <div className="flex flex-col gap-y-4">
                    <Input
                      type="text"
                      placeholder="نام و نام خانوادگی"
                      className="text-sm placeholder:text-xs placeholder:text-gray-600 bg-gray-100 h-14 border border-black rounded"
                    />
                    <Input
                      type="text"
                      placeholder="شماره تماس"
                      className="text-sm placeholder:text-xs placeholder:text-gray-600 bg-gray-100 h-14 border border-black rounded"
                    />
                    <Input
                      type="email"
                      placeholder="ایمیل"
                      className="text-sm placeholder:text-xs placeholder:text-gray-600 bg-gray-100 h-14 border border-black rounded"
                    />

                    <Textarea
                      placeholder="متن پیام"
                      rows={4}
                      className="text-sm placeholder:text-xs placeholder:text-gray-600 bg-gray-100 border border-black rounded resize-none"
                    />

                    <div className="flex justify-end">
                      <Button className="py-6 w-fit">ارسال</Button>
                    </div>
                  </div>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
