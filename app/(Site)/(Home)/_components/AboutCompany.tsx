'use client';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import AboutImageCompany from '@/public/images/home/aboutCompany/image-0099.png';
import { ChevronDown } from 'lucide-react';
import Image from 'next/image';
import { useState } from 'react';

export default function AboutCompany() {
  const [readMore, setReadMore] = useState(false);
  return (
    <div className="custom-container">
      <div className="grid grid-cols-1 md:grid-cols-2 items-start gap-8">
        {/* right */}
        <div>
          <div className="hidden lg:block">
            <h4 className="text-3xl mb-4 text-[#54595F]">درباره پردیس شگفت پارس جنوب</h4>
            <div className="block leading-10 text-[#7A7A7A] text-justify">
              <p>
                شرکت در سال ۱۳۹۶ تاسیس گردیده که با موضوع ارائه خدمات در بستر اینترنت و اپلیکیشن از
                جمله خدمات تبلیغاتی و گرافیکی فروش محصولات شروع به کار کرده است امروزه با توجه به
                گسترش ارتباطات اینترنتی شرکت پردیس شگفت پارس جنوب در زمینه تبلیغات موشن گرافیک ،
                پیامک انبوه شروع به فعالیت کرده است که با حذف تشریفات توانسته بهترین خدمات را ارائه
                دهد. تعاریف مختلفی برای چشم انداز بیان شده است که از آن جمله می‌توان به موارد ذیل
                اشاره نمود:
              </p>
              <ul className="px-4 py-1 lg:py-2 lg:px-6 ">
                <li>
                  <b>1. </b>
                  <span>تولیدات سریع و ارزان با زیر ساخت های آنلاین</span>
                </li>
                <li>
                  <b>2. </b>
                  <span>ایجاد بستر آنلاین برای تولید ویدیو گرافیکی</span>
                </li>
                <li>
                  <b>3. </b>
                  <span>کمترین هزینه بیشترین بازدهی</span>
                </li>
              </ul>

              <p>
                چشم انداز، شرکت به سمت و سوی است که بتوانیم برای هر فرد و سازمان بدون نیاز به ارتباط
                گرفتن با سازمان ها و افراد به صورت مستقیم در بستر اینترنت با چند کلیک ساده ویدیو
                گرافیکی خود را ایجاد کند و از طریق پیامک انبوه آن را به سراسر ایران معرفی کند.
              </p>
            </div>
          </div>

          <div className="lg:hidden">
            <h4 className="text-3xl mb-4 text-[#54595F]">درباره پردیس شگفت پارس جنوب</h4>
            <div
              className={cn(
                'overflow-hidden transition-all duration-300',
                readMore ? 'h-80' : 'h-0',
              )}
            >
              <p className="text-base/6">
                شرکت در سال ۱۳۹۶ تاسیس گردیده که با موضوع ارائه خدمات در بستر اینترنت و اپلیکیشن از
                جمله خدمات تبلیغاتی و گرافیکی فروش محصولات شروع به کار کرده است امروزه با توجه به
                گسترش ارتباطات اینترنتی شرکت پردیس شگفت پارس جنوب در زمینه تبلیغات موشن گرافیک ،
                پیامک انبوه شروع به فعالیت کرده است که با حذف تشریفات توانسته بهترین خدمات را ارائه
                دهد. تعاریف مختلفی برای چشم انداز بیان شده است که از آن جمله می‌توان به موارد ذیل
                اشاره نمود:
              </p>
              <ul className="px-4 py-1 lg:py-2 lg:px-6 ">
                <li>
                  <b>1. </b>
                  <span>تولیدات سریع و ارزان با زیر ساخت های آنلاین</span>
                </li>
                <li>
                  <b>2. </b>
                  <span>ایجاد بستر آنلاین برای تولید ویدیو گرافیکی</span>
                </li>
                <li>
                  <b>3. </b>
                  <span>کمترین هزینه بیشترین بازدهی</span>
                </li>
              </ul>
            </div>

            <div className="flex justify-center">
              <Button
                className="bg-[#54595F] text-white duration-500 !p-6 mx-auto"
                onClick={() => setReadMore((prev) => !prev)}
              >
                مشاهده
                <i>
                  <ChevronDown className="!size-5" />
                </i>
              </Button>
            </div>
          </div>
        </div>

        {/* left */}
        <div>
          <Image src={AboutImageCompany} alt="AboutCompany" className="rounded-sm shadow-sm" />
        </div>
      </div>
    </div>
  );
}
