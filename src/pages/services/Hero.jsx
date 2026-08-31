import heroImg from '../../assets/images/BeachGirl.png';

export default function Hero() {
  return (
    <section className="relative min-h-[700px] overflow-hidden">
      <img
        src={heroImg}
        alt=""
        className="absolute inset-0 size-full object-cover object-bottom -z-10"
      />
      <div className="max-w-[1440px] mx-auto flex items-center px-6 lg:px-20 pt-[140px] pb-24 min-h-[700px]">
        <div className="flex flex-col gap-8 items-start max-w-[550px]">
          <p className="font-mono text-[14px] uppercase text-white">Our Services</p>
          <div className="flex flex-col gap-5 items-start">
            <h1 className="font-bold text-[32px] lg:text-[40px] leading-tight text-white tracking-tight">
              We build the organizational machinery for rapid growth.
            </h1>
            <p className="text-[18px] leading-[1.6] text-[#f0e7ff]">
              From on-demand HR infrastructure to elite executive searches, we deliver
              high-velocity solutions designed for modern product engineering companies.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
