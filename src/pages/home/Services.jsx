import service1 from '../../assets/images/FractionalHR.png';
import service2 from '../../assets/images/service-2.png';
import service3 from '../../assets/images/service-3.png';
import service4 from '../../assets/images/service-4.png';

const CARDS = [
  {
    image: service1,
    title: 'Fractional HR Leadership',
    body: "Senior HR expertise embedded in your team - without the full-time overhead. Strategic guidance from someone who's built people functions from scratch.",
  },
  {
    image: service2,
    title: 'Talent Acquisition & Executive Search',
    body: "Find and hire the people who'll define your company's trajectory. From technical talent pipelines to C-suite placement.",
  },
  {
    image: service3,
    title: 'HR Compliance & Operations',
    body: 'Bulletproof your people operations. Handbooks, policies, benefits, and compliance frameworks that scale with you.',
  },
  {
    image: service4,
    title: 'People Strategy',
    body: 'Compensation design, performance frameworks, culture architecture, and org design - tailored to your stage of growth.',
  },
];

export default function Services() {
  return (
    <section className="bg-[#fff8f1]">
      <div className="max-w-[1440px] mx-auto flex flex-col gap-16 items-center px-6 lg:px-20 py-16">
        <div className="flex flex-col gap-4 items-center text-center max-w-[720px]">
          <p className="font-mono text-[14px] uppercase text-[#665b7d]">How We Help</p>
          <h2 className="font-bold text-[32px] lg:text-[40px] leading-tight text-[#0d0022]">
            Comprehensive People Solutions
          </h2>
          <p className="text-[18px] leading-[1.6] text-[#665b7d]">
            We tailor our approach to your company's stage, offering strategic advisory
            coupled with practical, hands-on execution.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-11 w-full max-w-[1280px]">
          {CARDS.map((card) => (
            <div key={card.title} className="flex flex-col gap-10">
              <div className="rounded-[20px] border border-[#e49b08] overflow-hidden h-[300px] lg:h-[454px] shadow-[0px_5px_20px_0px_rgba(150,129,255,0.25)]">
                <img src={card.image} alt={card.title} className="size-full object-cover" />
              </div>
              <div className="flex flex-col gap-3">
                <h3 className="font-bold text-[24px] leading-[32px] text-[#0d0022]">
                  {card.title}
                </h3>
                <p className="text-[20px] leading-[28px] text-[#665b7d]">{card.body}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
