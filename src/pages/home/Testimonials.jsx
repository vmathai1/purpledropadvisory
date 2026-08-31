import star from '../../assets/icons/star.svg';

const REVIEWS = [
  {
    quote:
      '"PurpleDrop became an indispensable part of our leadership team within two weeks. They clean up operations, handle complex compensation structures, and build real trust with founders."',
    name: 'Alex Rivers',
    role: 'CEO & Founder,',
    company: 'Hyperion Automation',
  },
  {
    quote:
      '"We scaled from 15 to 80 people in ten months without a hitch. The fractional HR service let us access C-suite strategy and operations expertise exactly when we needed it."',
    name: 'Jessica Chen',
    role: 'Co-founder,',
    company: 'Loom Analytics',
  },
];

export default function Testimonials() {
  return (
    <section className="bg-[#f7f4fd] border-b border-[#f0e7ff]">
      <div className="max-w-[1440px] mx-auto flex flex-col gap-16 items-center px-6 lg:px-20 py-16 lg:py-24">
        <div className="flex flex-col gap-4 items-center text-center max-w-[720px]">
          <p className="font-mono text-[14px] uppercase text-[#7c2dfe]">Success Stories</p>
          <h2 className="font-bold text-[32px] lg:text-[40px] leading-tight text-[#0d0022]">
            Trusted by High-Growth Founders
          </h2>
          <p className="text-[18px] leading-[1.6] text-[#665b7d]">
            Read how we partner with scaling tech executive teams to build foundational
            clarity and high-performance talent machines.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-[1280px]">
          {REVIEWS.map((review) => (
            <div
              key={review.name}
              className="bg-white rounded-[20px] p-10 flex flex-col gap-8 shadow-[0px_12px_16px_rgba(13,0,34,0.02)]"
            >
              <div className="flex gap-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <img key={i} src={star} alt="" className="size-[18px]" />
                ))}
              </div>
              <p className="italic text-[14px] leading-5 text-[#0d0022]">{review.quote}</p>
              <div className="flex flex-col gap-1">
                <p className="font-semibold text-[16px] text-[#0d0022]">{review.name}</p>
                <p className="text-[14px] text-[#380d80]">
                  {review.role} <span className="font-semibold">{review.company}</span>
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
