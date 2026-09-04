import heroImg from '../../assets/images/hr-checklist-hero.svg';

export default function Hero() {
  return (
    <section className="relative z-0 bg-[#1c0742] overflow-hidden">
      <img
        src={heroImg}
        alt=""
        className="absolute inset-0 size-full object-cover -z-10"
      />
      <div className="max-w-[1440px] mx-auto flex flex-col gap-6 items-start px-6 lg:px-20 pt-[140px] pb-16 lg:pb-24">
        <p className="font-mono text-[12px] tracking-wide uppercase text-[#f0e7ff]">
          Resources
        </p>
        <div className="flex flex-col gap-5 max-w-[640px] text-[#f0e7ff]">
          <h1 className="font-bold text-[36px] lg:text-[44px] leading-[1.15] tracking-tight text-white">
            The HR &amp; Talent Checklist
          </h1>
          <p className="text-[18px] leading-[1.6]">
            A practical reference for the moments that matter most &mdash; hiring,
            onboarding, reviews, compensation, compliance, and offboarding. Use it as the
            backbone of your people operations.
          </p>
        </div>
      </div>
    </section>
  );
}
