import heroImg from '../../assets/images/MountainGirl.png';

export default function Hero() {
  return (
    <section className="relative min-h-[700px] overflow-hidden">
      <img src={heroImg} alt="" className="absolute inset-0 size-full object-cover -z-10" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent -z-10" />
      <div className="max-w-[1440px] mx-auto flex items-end px-6 lg:px-20 pt-[140px] pb-16 min-h-[700px]">
        <div className="flex flex-col gap-8 items-start max-w-[550px]">
          <p className="font-mono text-[14px] uppercase text-white">Connect With Us</p>
          <div className="flex flex-col gap-5 items-start">
            <h1 className="font-bold text-[32px] lg:text-[40px] leading-tight text-white tracking-tight">
              Let's build your people systems together.
            </h1>
            <p className="text-[18px] leading-[1.6] text-[#f0e7ff]">
              Ready to take your operations, compliance, or talent pipelines to the next
              level? Fill out our form or schedule a discovery call directly with our
              partners.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
