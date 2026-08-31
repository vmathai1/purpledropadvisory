import faqWoman from '../../assets/images/faqgirl.png';
import plus from '../../assets/icons/plus.svg';

const FAQS = [
  {
    q: 'What does fractional HR leadership look like?',
    a: "It's senior strategy without full-time costs. We assign an elite People Advisor who joins your leadership channels, runs your weekly people processes, structures compensation, and advises executives.",
  },
  {
    q: 'How is this different from a recruiting agency?',
    a: 'Agencies focus on transaction volume. We build internal talent infrastructures, optimize your candidate pipelines, manage your brand representation, and handle long-term talent retention plans.',
  },
  {
    q: 'What stage companies do you work with?',
    a: 'We partner with startups from seed stage (typically 5-15 employees) up to Series C organizations (around 500 people) facing major scaling inflection points.',
  },
  {
    q: 'How quickly can you start?',
    a: 'Our integration model is highly responsive. We typically complete our initial team discovery and deploy within 7 to 10 business days from agreement.',
  },
];

export default function Faq() {
  return (
    <section className="relative border-t border-[#f7f4fd] bg-[#fef9f4] overflow-hidden">
      <img
        src={faqWoman}
        alt=""
        className="absolute inset-0 size-full object-cover object-left"
      />
      <div className="relative max-w-[1440px] mx-auto flex flex-col lg:flex-row gap-16 items-start px-6 lg:px-20 py-16 lg:py-24">
        <div className="flex flex-col gap-6 items-start w-full lg:w-[400px] shrink-0">
          <p className="font-mono text-[14px] uppercase text-[#7c2dfe]">FAQ</p>
          <h2 className="font-bold text-[28px] lg:text-[36px] text-[#0d0022]">
            Frequently Asked Questions
          </h2>
          <p className="text-[16px] leading-6 text-[#4a3f68]">
            Have more questions? We are always happy to schedule a quick call to talk
            through your specific scenario.
          </p>
        </div>
        <div className="flex flex-col flex-1 w-full">
          {FAQS.map((item, i) => (
            <div
              key={item.q}
              className={`flex flex-col gap-3 py-6 ${
                i < FAQS.length - 1 ? 'border-b border-[#c6afed]' : ''
              }`}
            >
              <div className="flex items-center justify-between gap-4">
                <p className="font-bold text-[20px] leading-7 text-[#0d0022]">{item.q}</p>
                <img src={plus} alt="" className="size-5 shrink-0" />
              </div>
              <p className="text-[16px] leading-6 text-[#4a3f68]">{item.a}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
