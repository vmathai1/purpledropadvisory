import heroImg from '../../assets/images/about-hero-bridge.png';

export default function Hero() {
  return (
    <section className="relative min-h-[700px] overflow-hidden">
      <img src={heroImg} alt="" className="absolute inset-0 size-full object-cover -z-10" />
      <div className="max-w-[1440px] mx-auto flex items-end justify-end px-6 lg:px-20 pt-[140px] pb-16 min-h-[700px] text-right">
        <div className="flex flex-col gap-8 items-end max-w-[550px]">
          <p className="font-mono text-[14px] uppercase text-white">Who We Are</p>
          <div className="flex flex-col gap-5 items-end">
            <h1 className="font-bold text-[32px] lg:text-[40px] leading-tight text-white tracking-tight">
              High-growth operators
              <br />
              not traditional agencies
            </h1>
            <p className="text-[18px] leading-[1.6] text-[#f0e7ff]">
              PeopleDrop gives scaling startups elite, battle-tested HR frameworks — without
              full-time C-suite overhead. We embed in your team to install the process,
              architecture, and talent strategies that win.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
