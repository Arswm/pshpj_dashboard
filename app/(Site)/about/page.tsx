import HeroAboutImage from '@/public/images/about/image-022.jpg';
import Image from 'next/image';

export default function AboutPage() {
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

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 mt-8">
          <div className="bg-[#7a7a7a] py-6 px-5 text-white">
            <h2 className="text-3xl mb-4 font-semibold leading-10">پیام مدیر عامل</h2>
            <p className="text-justify leading-8 sm:leading-10">
              ما به‌عنوان یک مشاور و مجری در کنار شما هستیم تا باهم برای بهبود وضعیت کسب‌وکارتان
              بهترین راه‌حل را برنامه‎ریزی و اجرا کنیم. فعالیت‌های مختلف دیجیتال مارکتینگ چون
              بازاریابی محتوا، ویدئو تبلیغاتی، برندینگ و تبلیغات را به‌گونه‌ای پیش می‎بریم که در
              نهایت نتایج موفقیت‌آمیزی برای شما و کسب‌وکارتان رقم بخورد.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
