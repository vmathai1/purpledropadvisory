import heroImg from '../../assets/images/talent-market-hero.svg';

export default function Hero() {
  return (
    <section className="relative z-0 bg-[#12052e] overflow-hidden">
      <img
        src={heroImg}
        alt=""
        className="absolute inset-0 size-full object-cover -z-10"
      />
      <div className="max-w-[1440px] mx-auto flex flex-col gap-6 items-start px-6 lg:px-20 pt-[140px] pb-16 lg:pb-24">
        <p className="font-mono text-[12px] tracking-wide uppercase text-[#f0e7ff]">
          Resources
        </p>
        <div className="flex flex-col gap-5 max-w-[660px] text-[#f0e7ff]">
          <h1 className="font-bold text-[36px] lg:text-[44px] leading-[1.15] tracking-tight text-white">
            Talent Market 2026
          </h1>
          <p className="text-[18px] leading-[1.6]">
            A roundup of what the latest hiring, compensation, and workforce research says
            about the year ahead &mdash; and what it means for how high-growth companies
            plan, pay, and hire their teams.
          </p>
        </div>
      </div>
    </section>
  );
}
