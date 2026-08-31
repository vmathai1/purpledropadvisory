import arrowRight from '../../assets/icons/arrow-right-gray.svg';

const STEPS = [
  {
    number: '01',
    title: 'Discover',
    body: 'We perform a rapid, comprehensive audit of your current org structure, talent pipelines, and culture to surface friction points.',
  },
  {
    number: '02',
    title: 'Design',
    body: 'We deliver a customized people roadmap covering compliance, operational workflows, sourcing design, and compensation architecture.',
  },
  {
    number: '03',
    title: 'Deliver',
    body: 'Our team embeds directly with yours, executing hands-on programs, training managers, and closing critical candidate pipelines.',
  },
];

export default function Approach() {
  return (
    <section id="approach" className="bg-[#f7f4fd] scroll-mt-24">
      <div className="max-w-[1440px] mx-auto flex flex-col gap-16 items-center px-6 lg:px-20 py-16 lg:py-24">
        <div className="flex flex-col gap-4 items-center text-center max-w-[720px]">
          <p className="font-mono text-[14px] uppercase text-[#7c2dfe]">
            How We Work Together
          </p>
          <h2 className="font-bold text-[32px] lg:text-[40px] leading-tight text-[#0d0022]">
            Our Embed &amp; Advisory Framework
          </h2>
          <p className="text-[18px] leading-[1.6] text-[#665b7d]">
            We move at tech speed. No bloated multi-month discovery. We assess, execute,
            and deliver impact immediately.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-[1280px]">
          {STEPS.map((step) => (
            <div key={step.number} className="bg-white rounded-2xl p-8 flex flex-col gap-6">
              <div className="flex items-center justify-between">
                <p className="font-extrabold text-[32px] text-[#e49b08]">{step.number}</p>
                <img src={arrowRight} alt="" className="size-6" />
              </div>
              <div className="flex flex-col gap-3">
                <p className="font-light text-[30px] text-[#e49b08]">{step.title}</p>
                <p className="text-[14px] leading-[1.6] text-[#665b7d]">{step.body}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
