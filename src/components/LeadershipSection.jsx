import check from '../assets/icons/check.svg';

const POINTS = [
  'Direct alignment with founders & executive teams',
  'Practical solutions built specifically for rapid tech scale',
  'Continuous, high-trust integration as an extension of your staff',
];

export default function LeadershipSection({ image }) {
  return (
    <section className="bg-white border-y border-[#e9dffa]">
      <div className="max-w-[1440px] mx-auto flex flex-col lg:flex-row gap-12 lg:gap-20 items-center px-6 lg:px-20 py-16 lg:py-24">
        <div className="rounded-[24px] overflow-hidden w-full lg:w-[480px] h-[360px] lg:h-[540px] shrink-0">
          <img src={image} alt="PurpleDrop leadership" className="size-full object-cover" />
        </div>
        <div className="flex flex-col gap-8 flex-1">
          <div className="flex flex-col gap-4">
            <p className="font-mono text-[14px] uppercase text-[#665b7d]">
              Your Partner, Not a Vendor
            </p>
            <h2 className="font-bold text-[32px] lg:text-[40px] leading-tight text-[#0d0022]">
              Built on 20+ Years of Tech HR Leadership
            </h2>
          </div>
          <div className="flex flex-col gap-5 text-[16px] leading-[1.6] text-[#665b7d]">
            <p>
              We founded PurpleDrop because high-growth companies deserve elite HR and
              talent strategies without always needing a heavy full-time headcount. Having
              built people functions from seed stage to IPO-ready across prominent tech
              organizations, we know where the structural landmines are.
            </p>
            <p>
              We don't deliver generic handbooks or theorize from a distance. We embed
              directly in your leadership channels, aligning your culture, compensation,
              and recruiting pipelines to power continuous execution.
            </p>
          </div>
          <div className="flex flex-col gap-4">
            {POINTS.map((point) => (
              <div key={point} className="flex gap-3 items-center">
                <div className="bg-[#e49b08] rounded-xl flex items-center justify-center size-6 shrink-0">
                  <img src={check} alt="" className="size-3.5" />
                </div>
                <p className="text-[15px] text-[#665b7d]">{point}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
