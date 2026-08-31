import users from '../../assets/icons/users.svg';
import arrowRight from '../../assets/icons/arrow-right-light.svg';
import womanImg from '../../assets/images/principles-woman.png';

const PRINCIPLES = [
  {
    title: 'Extreme Clarity',
    body: 'Honest compensation models, robust compliance metrics, and candidate experiences that mirror your true culture values.',
  },
  {
    title: 'Direct Alignment',
    body: 'No generic policies or theoretical handbooks. We align strategies directly to your burn rate, product roadmap, and founder goals.',
  },
  {
    title: 'SaaS Pace',
    body: 'We move at high-growth speed. No bloated multi-month discovery cycles. We identify, design, and deploy solutions in days.',
  },
];

export default function Principles() {
  return (
    <section className="bg-[#f2edfb] relative overflow-hidden">
      <div className="relative z-10 max-w-[1440px] mx-auto px-6 lg:px-20 py-16 lg:py-20">
        <div className="flex flex-col gap-10 max-w-[820px]">
          <div className="flex flex-col gap-4">
            <h2 className="font-bold text-[28px] lg:text-[36px] text-[#0d0022]">
              The Principles That Guide Us
            </h2>
            <p className="text-[16px] text-[#665b7d] max-w-[720px]">
              We built our business around deep integrity, rapid integration, and
              actionable deliverables.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-[840px]">
            {PRINCIPLES.map((item) => (
              <div key={item.title} className="bg-white rounded-2xl p-8 flex flex-col gap-6">
                <div className="flex items-center justify-between">
                  <div className="bg-[#fff8f1] rounded-xl flex items-center justify-center size-12">
                    <img src={users} alt="" className="size-6" />
                  </div>
                  <img src={arrowRight} alt="" className="size-6" />
                </div>
                <div className="flex flex-col gap-3">
                  <p className="text-[28px] lg:text-[32px] text-[#e49b08]">{item.title}</p>
                  <p className="text-[14px] leading-[1.5] text-[#665b7d]">{item.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <img
        src={womanImg}
        alt=""
        className="hidden lg:block absolute right-0 top-0 h-full w-auto object-cover object-top"
      />
    </section>
  );
}
