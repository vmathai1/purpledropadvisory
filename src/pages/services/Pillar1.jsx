import woman from '../../assets/images/pillar1-woman.png';
import check from '../../assets/icons/check-orange.svg';

const POINTS = [
  'On-demand CPO guidance & board advisory alignment',
  'Organizational org mapping & progression frameworks',
  'Custom total compensation bands aligned to market rates',
  'Strategic executive team coaching',
];

export default function Pillar1() {
  return (
    <section className="max-w-[1440px] mx-auto flex flex-col lg:flex-row items-center gap-12 px-6 lg:px-20 py-16 lg:py-24">
      <div className="w-full lg:w-[420px] h-[320px] lg:h-[460px] shrink-0 overflow-hidden">
        <img src={woman} alt="" className="w-auto h-full max-w-none object-cover object-left" />
      </div>
      <div className="flex flex-col gap-6 flex-1 max-w-[600px]">
        <p className="font-semibold text-[11px] uppercase tracking-wide text-[#7c2dfe]">
          Pillar 01
        </p>
        <h2 className="font-bold text-[28px] lg:text-[32px] text-[#0d0022]">
          Fractional HR Leadership
        </h2>
        <p className="text-[16px] leading-[1.5] text-[#665b7d]">
          Senior People strategy embedded directly within your leadership structure.
          Receive VP or C-level guidance to architect team models, compensation, and
          scale tracks without full-time overhead.
        </p>
        <div className="flex flex-col gap-3">
          {POINTS.map((point) => (
            <div key={point} className="flex gap-3 items-center">
              <div className="bg-[#e49b08] rounded-xl flex items-center justify-center size-6 shrink-0">
                <img src={check} alt="" className="size-3.5" />
              </div>
              <p className="text-[15px] text-[#0d0022]">{point}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
