import bg from '../../assets/images/MilstoneGirl.png';

const MILESTONES = [
  {
    year: '2018',
    title: 'PeopleDrop Founded',
    body: 'Established in San Francisco with a focus on pre-seed technical team incubation.',
  },
  {
    year: '2020',
    title: '100+ Scale Milestone',
    body: 'Built early remote-first startups with global distributed pay frameworks.',
  },
  {
    year: '2022',
    title: 'Fractional HR Pillar Launch',
    body: 'Formally launched Fractional CPO/HR services for post-Series A organizations scaling globally.',
  },
  {
    year: '2025',
    title: 'Scale Matrix Expansion',
    body: 'Achieved over 200+ elite hires placed and partnered with 50+ companies scaled worldwide.',
  },
];

export default function Milestones() {
  return (
    <section className="relative border-t border-[#f7f4fd] bg-[#fdf2eb] overflow-hidden">
      <img src={bg} alt="" className="absolute inset-0 size-full object-cover" />
      <div className="relative z-10 max-w-[1440px] mx-auto flex flex-col lg:flex-row gap-16 items-start px-6 lg:px-20 py-16 lg:py-24">
        <div className="flex flex-col gap-6 items-start w-full lg:w-[356px] shrink-0">
          <p className="font-mono text-[14px] uppercase text-[#7c2dfe]">Journey</p>
          <h2 className="font-bold text-[28px] lg:text-[36px] text-[#0d0022] leading-tight">
            Our Milestone History
          </h2>
          <p className="text-[16px] leading-6 text-[#4a3f68]">
            From our founding moments to the latest achievements, explore the key
            milestones that have shaped who we are today.
          </p>
        </div>
        <div className="flex flex-col gap-4 flex-1 w-full">
          {MILESTONES.map((item) => (
            <div
              key={item.year}
              className="flex gap-8 items-center p-6 rounded-xl w-full bg-white/75 backdrop-blur-sm"
            >
              <p className="text-[28px] lg:text-[32px] text-[#0d0022] w-[80px] shrink-0">
                {item.year}
              </p>
              <div className="flex flex-col gap-1">
                <p className="font-semibold text-[18px] text-[#0d0022]">{item.title}</p>
                <p className="text-[14px] text-[#665b7d]">{item.body}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
