import headshot from '../../assets/images/bio-marcus-2.png';
import check from '../../assets/icons/check-purple.svg';

const POINTS = [
  'End-to-end recruitment process design & ATS setup',
  'Active cold-sourcing pipelines for critical engineering roles',
  'Executive searches with full vetting and market assessment',
  'Pristine candidate representation templates',
];

export default function Pillar2() {
  return (
    <section className="border-t border-[#e9dffa]">
      <div className="max-w-[1440px] mx-auto flex flex-col lg:flex-row items-center justify-end gap-12 lg:gap-20 px-6 lg:px-20 py-16 lg:py-24">
        <div className="flex flex-col gap-6 items-start lg:items-end text-left lg:text-right max-w-[600px]">
          <p className="font-semibold text-[11px] uppercase tracking-wide text-[#7c2dfe]">
            Pillar 02
          </p>
          <h2 className="font-bold text-[28px] lg:text-[32px] text-[#0d0022]">
            Talent Acquisition &amp; Executive Search
          </h2>
          <p className="text-[16px] leading-[1.5] text-[#665b7d]">
            Attract, source, and sign top-tier talent. We install proactive sourcing
            systems, build pristine candidate loops, and hunt for pivotal VP &amp; C-level
            positions.
          </p>
          <div className="flex flex-col gap-3 w-full">
            {POINTS.map((point) => (
              <div key={point} className="flex gap-3 items-center justify-between">
                <p className="text-[15px] text-[#0d0022] order-1 lg:order-none">{point}</p>
                <div className="bg-[#380d80] rounded-xl flex items-center justify-center size-6 shrink-0">
                  <img src={check} alt="" className="size-3.5" />
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="hidden lg:block w-px self-stretch bg-[#e9dffa]" />
        <div className="flex flex-col gap-6 items-center text-center w-full lg:w-[300px] shrink-0">
          <img src={headshot} alt="Dr. Marcus Vance" className="rounded-full size-[180px] lg:size-[220px] object-cover" />
          <div className="flex flex-col gap-2">
            <p className="font-semibold text-[20px] text-[#0d0022]">Dr. Marcus Vance</p>
            <p className="text-[14px] leading-[1.5] text-[#665b7d]">
              Former VP of People at Vercel. 15+ years scaling distributed systems
              engineering teams.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
