import AboutImageCompany from '@/public/images/home/aboutCompany/image-0099.png';
import Image from 'next/image';

export default function AboutCompany() {
  return (
    <div className="custom-container">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* right */}
        <div>
          <h4 className="text-3xl/10 mb-4 text-[#54595F]">درباره پردیس شگفت پارس جنوب</h4>
          <div className="md:leading-6 lg:leading-8 xl:leading-10 text-[#7A7A7A] text-justify">
            <p>
              شرکت در سال ۱۳۹۶ تاسیس گردیده که با موضوع ارائه خدمات در بستر اینترنت و اپلیکیشن از
              جمله خدمات تبلیغاتی و گرافیکی فروش محصولات شروع به کار کرده است امروزه با توجه به
              گسترش ارتباطات اینترنتی شرکت پردیس شگفت پارس جنوب در زمینه تبلیغات موشن گرافیک ، پیامک
              انبوه شروع به فعالیت کرده است که با حذف تشریفات توانسته بهترین خدمات را ارائه دهد.
              تعاریف مختلفی برای چشم انداز بیان شده است که از آن جمله می‌توان به موارد ذیل اشاره
              نمود:
            </p>
            <ul className="px-4 py-1 lg:py-2 lg:px-6">
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

        {/* left */}
        <div>
          <Image src={AboutImageCompany} alt="AboutCompany" />
        </div>
      </div>
    </div>
  );
}
