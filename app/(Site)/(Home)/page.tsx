import AboutCompany from './_components/AboutCompany';
import Hero from './_components/Hero';
import Services from './_components/Services';

export default function Home() {
  return (
    <>
      <Hero />
      <section className="sm:-mt-20 md:mt-40 xl:mt-60">
        <Services />
      </section>

      <section className="-mt-16">
        <AboutCompany />
      </section>
    </>
  );
}
