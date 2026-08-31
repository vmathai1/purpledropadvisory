import heroImg from '../../assets/images/NortherLightGirl.png';
import sparkles from '../../assets/icons/sparkle-group.svg';

export default function Hero() {
  return (
    <section className="relative min-h-[700px] overflow-hidden">
      <img src={heroImg} alt="" className="absolute inset-0 size-full object-cover -z-10" />
      <div className="max-w-[1440px] mx-auto flex items-center justify-between px-6 lg:px-20 pt-[140px] pb-16 min-h-[700px] gap-8">
        <div className="flex flex-col gap-8 items-start max-w-[600px]">
          <p className="font-mono text-[14px] uppercase text-white">Case Studies</p>
          <div className="flex flex-col gap-5 items-start">
            <h1 className="font-bold text-[32px] lg:text-[40px] leading-tight text-white tracking-tight">
              We let our results speak for themselves.
            </h1>
            <p className="text-[18px] leading-[1.6] text-[#f0e7ff]">
              See how we have partnered with high-growth SaaS and engineering startups to
              completely overhaul talent acquisition loops and lay down stable
              operational foundations.
            </p>
          </div>
        </div>
        <img src={sparkles} alt="" className="hidden lg:block w-[70px] shrink-0" />
      </div>
    </section>
  );
}
