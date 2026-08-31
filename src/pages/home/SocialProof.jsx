import bolt from '../../assets/icons/bolt-light.svg';

const LOGOS = ['Stripe', 'Linear', 'Attio', 'Figma', 'Retool', 'Vercel'];

export default function SocialProof() {
  return (
    <section className="bg-[#0d0022] border-y border-[#f7f4fd]">
      <div className="max-w-[1440px] mx-auto flex flex-col gap-6 items-center px-6 lg:px-20 py-12">
        <p className="font-mono text-[12px] tracking-[1px] uppercase text-[#f0e7ff]">
          Trusted by founders at
        </p>
        <div className="flex flex-wrap items-center justify-between gap-x-12 gap-y-4 w-full max-w-[1280px]">
          {LOGOS.map((name) => (
            <div key={name} className="flex gap-2 items-center">
              <img src={bolt} alt="" className="size-5" />
              <p className="font-bold text-[20px] text-[#f0e7ff]">{name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
