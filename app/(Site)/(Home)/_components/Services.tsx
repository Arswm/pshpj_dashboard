import Plusing from '@/public/images/home/Group.webp';
import Naring from '@/public/images/home/Group-1.webp';
import YekPayamak from '@/public/images/home/Group-3.webp';
import Chabzi from '@/public/images/home/logo-chapzi.png';
import GraficDing from '@/public/images/home/logo-graphicding-text.png';
import Jabama from '@/public/images/home/logo-kojabama.webp';
import Image from 'next/image';
import Link from 'next/link';
import BannerImage from '@/public/images/home/image-02-min.jpg';
import ServiceImage1 from '@/public/images/home/services/image-0011-min.png';
import ServiceImage2 from '@/public/images/home/services/image-003-min.png';
import ServiceImage3 from '@/public/images/home/services/image-006.png';
import ServiceImage4 from '@/public/images/home/services/image-015.webp';
import ServiceImage5 from '@/public/images/home/services/image-031-min.png';
import ServiceImage6 from '@/public/images/home/services/image-032-min.png';
import ServiceImage7 from '@/public/images/home/services/image-04-min.png';
import ServiceImage8 from '@/public/images/home/services/image-05-min.png';
import ServiceImage9 from '@/public/images/home/services/image-07-min.png';
import ServiceImage10 from '@/public/images/home/services/image-08-min.png';

const servicesItems = [
  {
    title: 'سفارش موشن گرافیک',
    link: 'https://plusing.ir/price',
    image: ServiceImage2,
  },
  {
    title: 'سفارش تیزر تبلیغاتی',
    link: 'https://plusing.ir/teaser-price',
    image: ServiceImage7,
  },
  {
    title: 'طــراحـــی گـرافــیــــک',
    link: 'https://plusing.ir/graphic-design/',
    image: ServiceImage8,
  },
  {
    title: 'نـریشـن و گـویندگـی',
    link: 'https://plusing.ir/narrator/',
    image: ServiceImage3,
  },
  {
    title: 'تـــــدویــــن ویــدیـــو',
    link: 'https://plusing.ir/editing/',
    image: ServiceImage9,
  },
  {
    title: 'آموزش موشن گرافیک',
    link: 'https://plusing.ir/edu/motion-graphic',
    image: ServiceImage10,
  },
  {
    title: 'طــراحــــی ســـایـــــت',
    link: 'https://naring.agency/web-design/',
    image: ServiceImage2,
  },
  {
    title: 'ســـئـــــو ســــــایـــــــت',
    link: 'https://naring.agency/seo/',
    image: ServiceImage1,
  },
  {
    title: 'تـولـید محتوا مـتـنـی',
    link: 'https://plusing.ir/teaser-price',
    image: ServiceImage5,
  },
  {
    title: 'تــبلـیـغـات گــــوگــل',
    link: 'https://naring.agency/google-ad/',
    image: ServiceImage6,
  },
  {
    title: 'عـکـاسـی تـبـلـیـغـاتـی',
    link: 'https://plusing.ir/photography',
    image: ServiceImage9,
  },
  {
    title: 'تولید محتوا اینستاگرام',
    link: 'https://plusing.ir/instagram',
    image: ServiceImage10,
  },
  {
    title: 'پنل اس ام اس',
    link: 'https://yekpayamak.com/',
    image: ServiceImage2,
  },
  {
    title: 'انیمیشن کودک و نوجوان',
    link: 'https://pooyanamae.com/',
    image: ServiceImage7,
  },
  {
    title: 'سفارش چاپ پرچم',
    link: 'https://chapzi.com/flag',
    image: ServiceImage4,
  },
  {
    title: 'کمپین تبلیغاتی',
    link: 'https://plusing.ir/advertising-campaign/',
    image: ServiceImage1,
  },
];

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

export default function Services() {
  return (
    <div>
      {/* brands mobile */}
      <div className="px-2 grid grid-cols-2 justify-items-center gap-4 xs:translate-y-20 md:hidden z-50 relative">
        {sites.map((item) => (
          <div
            key={item.alt}
            className="p-10 md:p-5 shadow-md rounded-sm border border-gray-50 bg-white"
          >
            <Link href={item.href}>
              <Image src={item.image} alt={item.alt} />
            </Link>
          </div>
        ))}
      </div>

      {/* main banner */}
      <div className="w-full relative  before:content-[''] before:absolute before:inset-0 before:size-full before:bg-[#003E92]/70 z-0">
        <Image
          src={BannerImage}
          alt="banner"
          className="block w-full object-cover object-center h-[560px] sm:h-[633px]"
        />
        {/* brands screen */}
        <div className="max-w-6xl px-2 md:px-4 mx-auto top-0 -translate-y-1/2 absolute left-0 right-0 hidden md:block">
          <div className="grid grid-cols-6 justify-items-center gap-4">
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

        {/* text content */}
        <div className="absolute inset-0 flex justify-center mt-40 md:mt-52 text-white text-justify px-4">
          <div className="space-y-4 md:space-y-8">
            <h1 className="text-3xl md:text-5xl text-center">
              خــدمــات پــردیـــس شگفت پارس جنوب
            </h1>
            <p className="max-w-3xl sm:text-center">
              در حال حاضر شرکت پردیس شگفت پارس جنوب دارای سه آژانس دیجیتال مارکتینگ با برند های
              پلاسینگ، نارینگ و یک پیامک بوده که در حوزهای تولید محتوا بصری و وب فارسی و اس ام اس
              مارکتینگ فعالیت می‌کند، در ادامه به تمام خدمات این آژانس ها پرداخته ایم.
            </p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full px-2 sm:px-4 -translate-y-32 md:-translate-y-40 max-w-6xl mx-auto">
        {servicesItems.map((item) => (
          <div key={item.title} className="relative text-white group overflow-hidden">
            <div className="relative w-full h-64 md:h-auto lg:h-80">
              <Image
                className="block w-full object-cover h-full rounded shadow-lg group-hover:scale-110 transition-all duration-300"
                src={item.image}
                alt={item.title}
              />
              <div className="absolute inset-0 bg-black/30 group-hover:bg-black/50 transition-all duration-300"></div>
            </div>
            <div
              className="absolute right-0 bottom-0 pr-3 lg:pr-5 pb-6 text-2xl lg:text-3xl"
              style={{ textShadow: '1px 1px 2px black' }}
            >
              <Link href={item.link} className="group-hover:font-bold transition-all duration-300">
                {item.title}
              </Link>
            </div>
          </div>
        ))}

        <div className="md:col-span-2 mt-20 relative  before:content-[''] before:absolute before:inset-0 before:size-full before:bg-[#003E92]/70">
          <Image
            src={BannerImage}
            alt="Banner"
            className="h-[232px] lg:h-[164px] block w-full object-cover object-center"
          />
          <div className="absolute inset-0 flex lg:flex-row flex-col items-center justify-between size-full py-4 lg:py-8 px-4 lg:px-16">
            <div className="text-white h-full flex flex-col items-center justify-evenly">
              <p className="text-2xl lg:text-5xl">با شرکت ما تماس بگیرید</p>
              <span className="text-base lg:text-lg">
                کسب و کار شما را متحول خواهیم کرد ، فقط کافیه با ما تماس بگیرید.
              </span>
            </div>

            <button className="h-12 w-full md:w-56  text-base rounded-sm border-2 bg-white text-black hover:text-white hover:bg-transparent transition-all duration-300">
              021-71053977
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
