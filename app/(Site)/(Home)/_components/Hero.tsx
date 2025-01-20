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
        <div className="mt-10 lg:mt-20">
          <div className="flex items-center flex-col lg:flex-row gap-8">
            <Button variant="secondary" size="lg">
              دریافت اطلاعات شرکت
            </Button>
            <Button variant="blog" size="lg">
              021-71053977
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
