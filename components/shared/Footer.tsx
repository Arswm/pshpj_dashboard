'use client';
import ENamadLogo from '@/public/images/footer/enamadLogo.png';
import FooterLogo from '@/public/images/footer/logo-pshpj-white-min.png';
import SamanehLogo from '@/public/images/footer/samandehi-logo.png';
import FooterBackgroundImage from '@/public/images/home/hero.webp';
import { ChevronsLeft } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';

export default function Footer() {
  return (
    <footer className="w-full mt-20  relative  before:content-[''] before:absolute before:inset-0 before:size-full before:bg-[#003E92]/80">
      {/* background */}
      <Image
        src={FooterBackgroundImage}
        alt="footer background"
        className="min-h-[1050px] md:min-h-[420px] lg:h-[560px] block w-full object-cover object-center"
      />

      {/* content */}
      <div className="absolute inset-0 py-16 lg:py-10 px-6 space-y-10 max-w-6xl mx-auto z-50">
        {/* Carousel */}
        <div className="px-8 w-full" dir="ltr">
          <Carousel
            opts={{
              align: 'start',
              loop: true,
              direction: 'ltr',
            }}
          >
            <CarouselContent>
              <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                <div>
                  <div dir="rtl" className="bg-white text-primary flex flex-col gap-4 p-6 rounded">
                    <Link href="#" className="text-base font-semibold lg:text-sm">
                      معرفی آژانس چاپ و تبلیغات چاپزی
                    </Link>
                    <div className="flex justify-end">
                      <Link href="#" className="flex gap-x-1 items-center text-sm group">
                        <p>بیشتر بخوانید</p>
                        <ChevronsLeft className="size-4 group-hover:-translate-x-1 transition-all" />
                      </Link>
                    </div>
                  </div>
                </div>
              </CarouselItem>
              <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                <div>
                  <div dir="rtl" className="bg-white text-primary flex flex-col gap-4 p-6 rounded">
                    <Link href="#" className="text-base font-semibold lg:text-sm">
                      معرفی آژانس چاپ و تبلیغات چاپزی
                    </Link>
                    <div className="flex justify-end">
                      <Link href="#" className="flex gap-x-1 items-center text-sm group">
                        <p>بیشتر بخوانید</p>
                        <ChevronsLeft className="size-4 group-hover:-translate-x-1 transition-all" />
                      </Link>
                    </div>
                  </div>
                </div>
              </CarouselItem>
              <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                <div>
                  <div dir="rtl" className="bg-white text-primary flex flex-col gap-4 p-6 rounded">
                    <Link href="#" className="text-base font-semibold lg:text-sm">
                      معرفی آژانس چاپ و تبلیغات چاپزی
                    </Link>
                    <div className="flex justify-end">
                      <Link href="#" className="flex gap-x-1 items-center text-sm group">
                        <p>بیشتر بخوانید</p>
                        <ChevronsLeft className="size-4 group-hover:-translate-x-1 transition-all" />
                      </Link>
                    </div>
                  </div>
                </div>
              </CarouselItem>
              <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                <div>
                  <div dir="rtl" className="bg-white text-primary flex flex-col gap-4 p-6 rounded">
                    <Link href="#" className="text-base font-semibold lg:text-sm">
                      معرفی آژانس چاپ و تبلیغات چاپزی
                    </Link>
                    <div className="flex justify-end">
                      <Link href="#" className="flex gap-x-1 items-center text-sm group">
                        <p>بیشتر بخوانید</p>
                        <ChevronsLeft className="size-4 group-hover:-translate-x-1 transition-all" />
                      </Link>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>

        <div className="size-full gap-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center h-fit">
          <div className="space-y-6">
            <div className="grid grid-cols-2">
              <Image src={FooterLogo} alt="Logo" />
            </div>

            <p className="text-justify text-white leading-8">
              شرکت پردیس شگفت پارس جنوب تاسیس سال 1396 با مسئولیت محدود راه اندازی شده است و توانسته
              در حوزه های مختلف کسب و کارهای اینترنتی فعالیت داشته باشد{' '}
            </p>
          </div>

          <div className="grid grid-cols-2 gap-1 text-sm">
            <Link
              target="_blank"
              className="block focus:bg-zinc-600 text-white transition-all p-2.5 hover:font-semibold duration-300"
              href="https://naring.agency/"
            >
              خدمات نارینگ
            </Link>
            <Link
              target="_blank"
              className="block focus:bg-zinc-600 text-white transition-all p-2.5 hover:font-semibold duration-300"
              href="https://plusing.ir/"
            >
              خدمات پلاسینگ
            </Link>
            <Link
              target="_blank"
              className="block focus:bg-zinc-600 text-white transition-all p-2.5 hover:font-semibold duration-300"
              href="https://naring.agency/web-design/"
            >
              طراحی سایت
            </Link>
            <Link
              target="_blank"
              className="block focus:bg-zinc-600 text-white transition-all p-2.5 hover:font-semibold duration-300"
              href="https://plusing.ir/what-is-motion-graphics/"
            >
              موشن گرافیک
            </Link>
            <Link
              target="_blank"
              className="block focus:bg-zinc-600 text-white transition-all p-2.5 hover:font-semibold duration-300"
              href="https://naring.agency/seo/"
            >
              سئو سایت
            </Link>
            <Link
              target="_blank"
              className="block focus:bg-zinc-600 text-white transition-all p-2.5 hover:font-semibold duration-300"
              href="https://plusing.ir/teaser/"
            >
              تیزر تبلیغاتی
            </Link>
            <Link
              target="_blank"
              className="block focus:bg-zinc-600 text-white transition-all p-2.5 hover:font-semibold duration-300"
              href="https://naring.agency/text-content-generation/"
            >
              تولید محتوا متنی
            </Link>
            <Link
              target="_blank"
              className="block focus:bg-zinc-600 text-white transition-all p-2.5 hover:font-semibold duration-300"
              href="https://plusing.ir/graphic-design/"
            >
              طراحی گرافیک
            </Link>
            <Link
              target="_blank"
              className="block focus:bg-zinc-600 text-white transition-all p-2.5 hover:font-semibold duration-300"
              href="https://naring.agency/google-ad/"
            >
              تبلیغات گوگل
            </Link>
            <Link
              target="_blank"
              className="block focus:bg-zinc-600 text-white transition-all p-2.5 hover:font-semibold duration-300"
              href="https://plusing.ir/narrator/"
            >
              نریشن و گویندگی
            </Link>
          </div>

          <div className="grid grid-cols-2 gap-x-6">
            <Link className="bg-white grid place-items-center max-h-[170px]" href="#" target="_blank">
              <Image src={ENamadLogo} alt="Enamad" />
            </Link>
            <Link className="bg-white grid place-items-center max-h-[170px]" href="#" target="_blank">
              <Image src={SamanehLogo} alt="Samaneh" />
            </Link>
          </div>
        </div>

        <hr />

        <p className="text-center text-white">
          تمام حقوق مادی و معنوی طراحی سایت متعلق به پردیس شگفت پارس جنوب است.
        </p>
      </div>
    </footer>
  );
}
