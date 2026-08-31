import check from '../../assets/icons/check-white.svg';

const POINTS = [
  'End-to-end recruitment process design & ATS setup',
  'Active cold-sourcing pipelines for critical engineering roles',
  'Executive searches with full vetting and market assessment',
  'Pristine candidate representation templates',
];

const CASES = [
  {
    company: 'Acuris Technologies',
    tag: '+120% Engineering Headcount',
    title: 'Scaling key infrastructure engineers under intense timelines',
    body: 'Challenge: Acuris needed to hire 14 senior engineers in under four months post Series-A funding. Our Solution: We audited their interview flow, eliminated redundant vetting, set up high-intensity outbound campaigns, and signed all 14 candidates in 78 days.',
    quote:
      '"PeopleDrop acted as an extension of our team. They completely redesigned our engineering loop and saved us hundreds of thousands in recruiter fees."',
    author: '— Tariq Ahmed, CTO at Acuris',
  },
  {
    company: 'Vektor Digital',
    tag: 'Fractional CPO Setup',
    title: 'Building internal operations for a newly distributed workforce',
    body: 'Challenge: Vektor transitioned to a remote-first international team but lacked local employment compliance structures, regional benefits tiers, and handbook guidelines. Our Solution: Embedded a Fractional CPO, integrated regional PEO tools, customized...',
    quote:
      '"We went from operational confusion to structured remote execution in weeks. An invaluable scaling partner."',
    author: '— Elena Rostova, CEO & Founder',
  },
];

function CaseCard({ item }) {
  return (
    <div className="bg-white border border-[#e9dffa] rounded-[20px] p-10 flex flex-col gap-8">
      <div className="flex flex-col gap-2 text-[#7c2dfe]">
        <p className="font-bold text-[22px]">{item.company}</p>
        <p className="font-semibold text-[13px]">{item.tag}</p>
      </div>
      <div className="flex flex-col gap-4">
        <p className="font-bold text-[24px] lg:text-[26px] text-[#0d0022]">{item.title}</p>
        <p className="text-[15px] leading-[1.6] text-[#665b7d]">{item.body}</p>
      </div>
      <div className="bg-[#f7f4fd] rounded-xl p-6 flex flex-col gap-3">
        <p className="italic text-[15px] text-[#0d0022]">{item.quote}</p>
        <p className="text-[13px] text-[#665b7d]">{item.author}</p>
      </div>
    </div>
  );
}

export default function CaseStudies() {
  return (
    <section className="border-t border-[#e9dffa]">
      <div className="max-w-[1440px] mx-auto flex flex-col lg:flex-row gap-12 items-start px-6 lg:px-20 py-16 lg:py-20">
        <div className="flex flex-col gap-6 items-start w-full lg:w-[411px] shrink-0 lg:sticky lg:top-24">
          <h2 className="font-bold text-[28px] lg:text-[32px] text-[#0d0022]">
            Talent Acquisition &amp; Executive Search
          </h2>
          <p className="text-[16px] leading-[1.5] text-[#665b7d]">
            Attract, source, and sign top-tier talent. We install proactive sourcing
            systems, build pristine candidate loops, and hunt for pivotal VP &amp; C-level
            positions.
          </p>
          <div className="flex flex-col gap-3">
            {POINTS.map((point) => (
              <div key={point} className="flex gap-3 items-center">
                <div className="bg-[#380d80] rounded-xl flex items-center justify-center size-6 shrink-0">
                  <img src={check} alt="" className="size-3.5" />
                </div>
                <p className="text-[15px] text-[#0d0022]">{point}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 flex-1 w-full">
          {[...CASES, ...CASES].map((item, i) => (
            <CaseCard key={i} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}
