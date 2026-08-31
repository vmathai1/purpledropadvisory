const STATS = [
  { value: '200+', label: 'Hires Placed' },
  { value: '50+', label: 'Companies Scaled' },
  { value: '20+', label: 'Years Experience' },
  { value: '95%', label: 'Client Retention' },
];

export default function Metrics() {
  return (
    <section className="bg-[#380d80]">
      <div className="max-w-[1440px] mx-auto flex justify-center px-6 lg:px-20 py-16">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-y-8 w-full max-w-[1280px] divide-x divide-[#5a3591]">
          {STATS.map((stat) => (
            <div key={stat.label} className="flex flex-col gap-2 items-center px-4">
              <p className="font-bold text-[40px] lg:text-[48px] leading-[1.1] text-white">
                {stat.value}
              </p>
              <p className="text-[14px] font-medium tracking-wide uppercase text-[#c6afed] text-center">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
