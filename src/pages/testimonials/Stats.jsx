const STATS = [
  { value: '15 Days', label: 'Average Time to Hire' },
  { value: 'Zero', label: 'Compliance Breaches' },
  { value: '$280K+', label: 'Saved in Agency Fees' },
];

export default function Stats() {
  return (
    <section className="bg-[#0d0022]">
      <div className="max-w-[1440px] mx-auto flex justify-center px-6 lg:px-20 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-y-8 w-full max-w-[1280px] divide-x-0 sm:divide-x divide-[#3a2b5c]">
          {STATS.map((stat) => (
            <div key={stat.label} className="flex flex-col gap-2 items-center px-4">
              <p className="font-bold text-[36px] lg:text-[48px] text-white">{stat.value}</p>
              <p className="text-[14px] text-[#f0e7ff]">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
