import womanImg from '../../assets/images/services-strategy-woman.png';
import checkOrange from '../../assets/icons/check-orange-2.svg';
import checkPurple from '../../assets/icons/check-purple.svg';

const STRATEGY_POINTS = [
  'Performance assessment loops & objective structures (OKRs)',
  'Leveling grids and skill rubric documentation',
  'Strategic equity distribution & vesting structure advisory',
  'Management coaching & internal scaling guides',
];

const COMPLIANCE_POINTS = [
  'State-by-state compliant employee handbooks',
  'Multi-tier health benefits & 401(k) broker setup',
  'Hiring frameworks for international contractor entities',
  'Robust HR systems integration & automation audit',
];

function PointList({ points, icon, iconBg }) {
  return (
    <div className="flex flex-col gap-3 pt-2">
      {points.map((point) => (
        <div key={point} className="flex gap-3 items-center">
          <div className={`${iconBg} rounded-xl flex items-center justify-center size-6 shrink-0`}>
            <img src={icon} alt="" className="size-3.5" />
          </div>
          <p className="text-[15px] text-[#0d0022]">{point}</p>
        </div>
      ))}
    </div>
  );
}

export default function PillarsSplit() {
  return (
    <section className="border-t border-[#f3f3fb] bg-[#f7f4fd]">
      <div className="max-w-[1440px] mx-auto flex flex-col lg:flex-row gap-16 items-start px-6 lg:px-20 py-16 lg:py-24">
        <div className="hidden lg:block w-[420px] h-[560px] shrink-0 overflow-hidden">
          <img src={womanImg} alt="" className="w-auto h-full max-w-none object-cover object-left" />
        </div>
        <div className="flex flex-col gap-12 flex-1">
          <div className="flex flex-col gap-6">
            <h2 className="font-bold text-[28px] lg:text-[32px] text-[#0d0022]">
              People Strategy
            </h2>
            <p className="text-[16px] leading-[1.5] text-[#665b7d]">
              Design performance management loops, architectural career tracks, and equity
              allocation schemas that scale. We keep teams locked on performance
              objectives.
            </p>
            <PointList points={STRATEGY_POINTS} icon={checkOrange} iconBg="bg-[#e49b08]" />
          </div>
          <div className="flex flex-col gap-6">
            <h2 className="font-bold text-[28px] lg:text-[32px] text-[#0d0022]">
              HR Compliance &amp; Operations
            </h2>
            <p className="text-[16px] leading-[1.5] text-[#665b7d]">
              Bulletproof your operational foundations. We implement reliable handbooks,
              compliant benefits programs, remote hiring architectures, and scale-ready
              operational setups.
            </p>
            <PointList points={COMPLIANCE_POINTS} icon={checkPurple} iconBg="bg-[#7c2dfe]" />
          </div>
        </div>
      </div>
    </section>
  );
}
