import { Button } from '@/components/ui/button';
import { FaRegBuilding } from 'react-icons/fa';
import { GrCertificate } from 'react-icons/gr';

export default function Hero() {
  return (
    <div className="h-[calc(100vh-84px)] xl:h-[calc(100vh-91px)] bg-hero bg-no-repeat bg-center bg-cover bg-blend-multiply bg-customBlue/70">
      <div className="size-full flex flex-col items-center justify-center text-center text-white">
        <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl">پردیس شگفت پارس جنوب</h1>
        <div className="flex flex-col lg:flex-row items-center gap-8 mt-8 text-base lg:text-xl">
          <div className="flex items-center gap-2.5">
            <i>
              <FaRegBuilding className="size-8" />
            </i>
            <p>مــســئـــولـــیــت مـــــــحدود </p>
          </div>
          <div className="flex items-center gap-2.5">
            <i>
              <GrCertificate className="size-8" />
            </i>
            <p>شــمـــاره ثـــبــــــت ۵۲۰۹۴۴</p>
          </div>

          <div className="flex items-center gap-2.5">
            <i>
              <GrCertificate className="size-8" />
            </i>
            <p>شناسه ملی ۱۴۰۰۷۳۲۱۷۸۸</p>
          </div>
        </div>
        <div className="mt-10 lg:mt-20 w-full md:w-auto">
          <div className="flex items-center px-4 md:px-0 flex-col lg:flex-row gap-8">
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
  );
}
