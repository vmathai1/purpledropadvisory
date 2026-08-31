import { useState } from 'react';
import mail from '../../assets/icons/mail.svg';
import mapPin from '../../assets/icons/map-pin.svg';

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <section className="max-w-[1440px] mx-auto flex flex-col lg:flex-row gap-16 items-start px-6 lg:px-20 py-16 lg:py-20">
      <div className="flex flex-col gap-10 flex-1 w-full">
        <div className="flex flex-col gap-4">
          <h2 className="font-bold text-[24px] lg:text-[28px] text-[#0d0022]">
            Get in Touch Directly
          </h2>
          <p className="text-[16px] leading-[1.5] text-[#665b7d]">
            Whether you are an early-stage team mapping out your first handbooks or a
            scale-up seeking C-suite advisory, we are here to support your mission.
          </p>
        </div>
        <div className="flex flex-col gap-6">
          <div className="flex gap-4 items-center">
            <div className="bg-[#f0e7ff] rounded-full flex items-center justify-center size-10 shrink-0">
              <img src={mail} alt="" className="size-[18px]" />
            </div>
            <div className="flex flex-col">
              <p className="text-[13px] text-[#665b7d]">Email Us</p>
              <p className="font-semibold text-[16px] text-[#0d0022]">hello@peopledrop.co</p>
            </div>
          </div>
          <div className="flex gap-4 items-center">
            <div className="bg-[#f0e7ff] rounded-full flex items-center justify-center size-10 shrink-0">
              <img src={mapPin} alt="" className="size-[18px]" />
            </div>
            <div className="flex flex-col">
              <p className="text-[13px] text-[#665b7d]">Headquarters</p>
              <p className="font-semibold text-[16px] text-[#0d0022]">
                450 Sansome St, San Francisco, CA 94111
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[#f7f4fd] border border-[#e9dffa] rounded-3xl p-8 lg:p-12 flex flex-col gap-8 flex-1 w-full">
        <p className="font-bold text-[24px] text-[#0d0022]">Submit a Request</p>
        {submitted ? (
          <p className="text-[16px] text-[#380d80]">
            Thanks for reaching out — we'll be in touch shortly.
          </p>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col gap-5">
            <label className="flex flex-col gap-2">
              <span className="font-semibold text-[14px] text-[#0d0022]">Full Name</span>
              <input
                type="text"
                required
                placeholder="John Doe"
                className="bg-white border border-[#e9dffa] rounded-lg p-3.5 text-[15px] text-[#0d0022] placeholder:text-[#665b7d] focus:outline-none focus:ring-2 focus:ring-[#7c2dfe]"
              />
            </label>
            <label className="flex flex-col gap-2">
              <span className="font-semibold text-[14px] text-[#0d0022]">Work Email</span>
              <input
                type="email"
                required
                placeholder="john@example.com"
                className="bg-white border border-[#e9dffa] rounded-lg p-3.5 text-[15px] text-[#0d0022] placeholder:text-[#665b7d] focus:outline-none focus:ring-2 focus:ring-[#7c2dfe]"
              />
            </label>
            <label className="flex flex-col gap-2">
              <span className="font-semibold text-[14px] text-[#0d0022]">Company Name</span>
              <input
                type="text"
                placeholder="Acuris Tech"
                className="bg-white border border-[#e9dffa] rounded-lg p-3.5 text-[15px] text-[#0d0022] placeholder:text-[#665b7d] focus:outline-none focus:ring-2 focus:ring-[#7c2dfe]"
              />
            </label>
            <label className="flex flex-col gap-2">
              <span className="font-semibold text-[14px] text-[#0d0022]">Message</span>
              <textarea
                required
                rows={4}
                placeholder="Tell us about your team size, scaling timeline, or advisory needs..."
                className="bg-white border border-[#e9dffa] rounded-lg p-3.5 text-[15px] text-[#0d0022] placeholder:text-[#665b7d] focus:outline-none focus:ring-2 focus:ring-[#7c2dfe] resize-none"
              />
            </label>
            <button
              type="submit"
              className="bg-[#7c2dfe] text-white text-[18px] rounded-full py-3.5 hover:brightness-95 transition"
            >
              Send Inquiry
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
