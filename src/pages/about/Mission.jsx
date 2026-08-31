import mission1 from '../../assets/images/mission-1.png';
import mission2 from '../../assets/images/mission-2.png';
import mission3 from '../../assets/images/mission-3.png';

export default function Mission() {
  return (
    <section className="max-w-[1440px] mx-auto flex flex-col lg:flex-row gap-12 lg:gap-20 items-center px-6 lg:px-20 py-16 lg:py-20">
      <div className="flex flex-col gap-6 flex-1">
        <h2 className="font-bold text-[28px] lg:text-[32px] text-[#0d0022]">
          Our Mission &amp; Purpose
        </h2>
        <div className="flex flex-col gap-4 text-[16px] leading-[1.6] text-[#665b7d]">
          <p>
            As tech operators who scaled teams from pre-seed to IPO-ready across
            prominent platforms, we saw first-hand where early-stage organizations hit
            people traps.
          </p>
          <p>
            We founded PeopleDrop to bridge that critical organizational gap. We act as
            your high-trust people co-pilot, putting customized operations, compliance
            matrices, and talent machines in place to fuel your roadmap cleanly.
          </p>
        </div>
      </div>
      <div className="grid grid-cols-2 grid-rows-2 gap-3 w-full lg:w-[558px] shrink-0 h-[300px] lg:h-[453px]">
        <img src={mission1} alt="" className="size-full object-cover rounded-lg" />
        <img src={mission2} alt="" className="size-full object-cover rounded-lg row-span-2" />
        <img src={mission3} alt="" className="size-full object-cover rounded-lg" />
      </div>
    </section>
  );
}
