'use client';

import { cn } from '@/lib/utils';
import MoreAboutImage from '@/public/images/about/image-02-min.jpg';
import HeroAboutImage from '@/public/images/about/image-022.jpg';
import Logo from '@/public/images/about/logo-pshpj-white-min.png';
import TeamImage3 from '@/public/images/about/team-3.jpg';
import { ChevronDown } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import Plusing from '@/public/images/home/Group.webp';
import Naring from '@/public/images/home/Group-1.webp';
import YekPayamak from '@/public/images/home/Group-3.webp';
import Chabzi from '@/public/images/home/logo-chapzi.png';
import GraficDing from '@/public/images/home/logo-graphicding-text.png';
import Jabama from '@/public/images/home/logo-kojabama.webp';

const sites = [
  {
    image: Plusing,
    alt: 'Plusing',
    href: 'https://plusing.ir/',
  },
  {
    image: Naring,
    alt: 'Naring',
    href: 'https://naring.ir/',
  },
  {
    image: YekPayamak,
    alt: 'YekPayamak',
    href: 'https://yekpayamak.com/',
  },
  {
    image: GraficDing,
    alt: 'GraficDing',
    href: 'https://graphicding.com/',
  },
  {
    image: Jabama,
    alt: 'Jabama',
    href: 'https://kojabama.com/',
  },
  {
    image: Chabzi,
    alt: 'Chabzi',
    href: 'https://chapzi.com/',
  },
];

export default function AboutPage() {
  const [isSeeMore, setIsSeeMore] = useState(false);
  return (
    <section>
      <div className="h-[50vh] w-full relative before:content-[''] before:absolute before:inset-0 before:size-full before:bg-[#0d2d3a]/80">
        <Image
          src={HeroAboutImage}
          alt="banner"
          className="size-full object-cover object-center z-0"
        />

        <div className="absolute inset-0 px-4">
          <div className="size-full flex items-center justify-center flex-col text-white">
            <h1 className="text-2xl md:text-4xl lg:text-5xl">درباره پردیس شگفت پارس جنوب</h1>
            <div className="mt-10 w-full md:w-auto">
              <div className="flex items-center px-4 md:px-6 flex-col md:flex-row gap-6">
                <button className="h-12 w-full md:w-56  text-base rounded-sm border-2 bg-transparent hover:bg-white hover:text-black transition-all duration-300">
                  دریافت اطلاعات شرکت
                </button>
                <button className="h-12 w-full md:w-56  text-base rounded-sm border-2 bg-white text-black hover:text-white hover:bg-transparent transition-all duration-300">
                  021-71053977
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 mt-20">
        <h2 className="text-center text-2xl font-semibold lg:text-3xl text-[#54595f]">
          اعضای شرکت را بشناسید
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 items-center lg:grid-cols-4 gap-5 mt-8">
          <div className="bg-[#7a7a7a] py-6 px-5 text-white rounded-sm">
            <h2 className="text-3xl mb-4 font-semibold leading-10">پیام مدیر عامل</h2>
            <p className="text-justify leading-8 sm:leading-9">
              ما به‌عنوان یک مشاور و مجری در کنار شما هستیم تا باهم برای بهبود وضعیت کسب‌وکارتان
              بهترین راه‌حل را برنامه‎ریزی و اجرا کنیم. فعالیت‌های مختلف دیجیتال مارکتینگ چون
              بازاریابی محتوا، ویدئو تبلیغاتی، برندینگ و تبلیغات را به‌گونه‌ای پیش می‎بریم که در
              نهایت نتایج موفقیت‌آمیزی برای شما و کسب‌وکارتان رقم بخورد.
            </p>
          </div>

          {/* Team card */}

          <div className="py-5 grid grid-cols-1 justify-items-center items-center gap-5">
            {/* image */}
            <div className="hover:scale-90 transition-transform duration-300 rounded-sm overflow-hidden">
              <Image src={TeamImage3} alt="محمد امین عابدی" />
            </div>

            {/* name */}
            <div className="bg-gray-200 p-2 font-semibold flex gap-x-2 text-gray-600 justify-center w-full md:w-auto text-base md:text-sm">
              <span className="block">رئیس هیئت مدیره :</span>

              <span className="block">محمدامین عابدی</span>
            </div>
          </div>
          <div className="py-5 grid grid-cols-1 justify-items-center items-center gap-5">
            {/* image */}
            <div className="hover:scale-90 transition-transform duration-300 rounded-sm overflow-hidden">
              <Image src={TeamImage3} alt="محمد امین عابدی" />
            </div>

            {/* name */}
            <div className="bg-gray-200 p-2 font-semibold flex gap-x-2 text-gray-600 justify-center w-full md:w-auto text-base md:text-sm">
              <span className="block">رئیس هیئت مدیره :</span>

              <span className="block">محمدامین عابدی</span>
            </div>
          </div>
          <div className="py-5 grid grid-cols-1 justify-items-center items-center gap-5">
            {/* image */}
            <div className="hover:scale-90 transition-transform duration-300 rounded-sm overflow-hidden">
              <Image src={TeamImage3} alt="محمد امین عابدی" />
            </div>

            {/* name */}
            <div className="bg-gray-200 p-2 font-semibold flex gap-x-2 text-gray-600 justify-center w-full md:w-auto text-base md:text-sm">
              <span className="block">رئیس هیئت مدیره :</span>

              <span className="block">محمدامین عابدی</span>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full relative mt-10  before:content-[''] before:absolute before:inset-0 before:size-full before:bg-[#003E92]/70 z-0">
        <Image
          src={MoreAboutImage}
          alt="banner"
          className="block w-full object-cover object-center h-[560px] sm:h-[633px] md:h-[400px] lg:h-[700px]"
        />

        {/* screen size */}
        <div className="absolute hidden  inset-0 text-white lg:flex flex-col items-center justify-center space-y-4">
          <div>
            <Image src={Logo} alt="پردیس شگفت پارس جنوب" width={200} />
          </div>

          <div className="child:block gap-y-6 flex flex-col items-center max-w-6xl px-4 text-justify leading-8">
            <h2 className="text-3xl">درباره ما بیشتر بدانید</h2>
            <p>
              درباره ما بیشتر بدانید در دنیای دیجیتال، حتی بزرگ‌ترین شرکت‌ها و برند‌ها نیز برای
              ادامه حیاتشان نیاز دارند که ارتباط بصری سازمان‌یافته‌ای را با مخاطبان هدف خود داشته
              باشند. شرکت پردیس شگفت پارس جنوب از سال 1396 در همین زمینه مشغول به خدمت رسانی به
              مخاطبان است. تجربه بیش از 6 سال این موضوع را خاطرنشان می‎سازد که رسانه دیجیتال و
              فعالیت در حوزه دیجیتال مارکتینگ نقش کلیدی را در افزایش کیفیت زندگی انسان امروزی بر
              عهده دارد.
            </p>

            <p>
              ازاین‌رو شرکت دیجیتال مارکتینگ پارس جنوب، با وب‌سایت‌هایی پویا در حوزه تبلیغات ویدئویی
              و برندینگ با نام پلاسینگ، وب‌سایتی در حوزه بازاریابی محتوا و سئو با نام نارینگ و
              تبلیغات پیامکی هر نیازی را به بهترین نحو پاسخ می‌دهد. رسالت شرکت دیجیتال مارکتینگ پارس
              جنوب در این است که با ارائه راهکارهای مؤثر بازاریابی بر پایه به‌روزترین رویکردهای علمی
              و حرفه‌ای خدمات خود را با بهره‌گیری از دانش روز، در کنار تجربه سالیان متمادی و همکاری
              با برترین شرکت‌های حاضر در ایران به مشتریان خود ارائه دهد.
            </p>

            <p>
              مایه مباهات شرکت دیجیتال مارکتینگ پارس جنوب است که همواره در تلاش برای مشارکت در
              ارتقای دانش تبلیغات و برندینگ ایران، بهترین خدمات را به مخاطبان خود ارائه ارزانی
              بدارد. تلاش داریم که با تفکری خلاقانه و مدرن، رویکردی نوین و عملکردی حرفه‌ای و به
              پشتوانه سرمایه انسانی متخصص، طیف متنوع سلیقه را به بهترین وجه پاسخگو باشیم. نوآوری،
              خلاقیت و مسئولیت‌پذیری سه رکن اساسی تیم متخصصان و مشاوران ماست.
            </p>
          </div>
        </div>

        {/* mobile size */}
        <div className="absolute lg:hidden inset-0 text-white flex items-center justify-center flex-col px-4">
          <div>
            <Image
              src={Logo}
              alt="پردیس شگفت پارس جنوب"
              className="w-72 sm:w-96 md:w-64 object-cover object-center"
            />
          </div>
          <h2 className="text-3xl my-5">درباره ما بیشتر بدانید</h2>

          <p
            className={cn(
              'text-justify transition-all duration-300',
              isSeeMore ? 'line-clamp-none h-24' : 'line-clamp-1 h-6',
            )}
          >
            در دنیای دیجیتال، حتی بزرگ‌ترین شرکت‌ها و برند‌ها نیز برای ادامه حیاتشان نیاز دارند که
            ارتباط بصری سازمان‌یافته‌ای را با مخاطبان هدف خود داشته باشند. شرکت پردیس شگفت پارس جنوب
            از سال 1396 در همین زمینه مشغول به خدمت رسانی به مخاطبان است.
          </p>

          <button
            onClick={() => setIsSeeMore((prev) => !prev)}
            className="h-12  text-base rounded-sm border-2 bg-white text-black hover:text-white hover:bg-transparent transition-all duration-300 flex items-center justify-center gap-2 px-4 mt-8 "
          >
            {isSeeMore ? <span>کمتر</span> : <span>مشاهده بیشتر</span>}

            <ChevronDown
              className={cn('transition-all duration-300', isSeeMore ? 'rotate-180' : 'rotate-0')}
            />
          </button>
        </div>
      </div>

      {/* introduction sites */}
      <div>
        <h2 className="text-center mt-10 text-2xl font-semibold lg:text-3xl text-[#54595f]">
          سایت های شرکت را بشناسید
        </h2>

        <div className="max-w-6xl mx-auto px-4 mt-10">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 justify-items-center gap-4">
            {sites.map((item) => (
              <div
                key={item.alt}
                className="p-10 md:p-5 shadow-md rounded-sm border border-gray-50 bg-white hover:scale-105 transition-all"
              >
                <Link href={item.href}>
                  <Image src={item.image} alt={item.alt} />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
