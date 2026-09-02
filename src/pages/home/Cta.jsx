import { Link } from 'react-router-dom';
import arrowRight from '../../assets/icons/arrow-right-black.svg';

export default function Cta() {
  return (
    <section className="bg-[#0d0022] border border-[#f7f4fd]">
      <div className="max-w-[1440px] mx-auto flex flex-col gap-8 items-center px-6 lg:px-20 py-16 lg:py-24">
        <div className="flex flex-col gap-4 items-center text-center max-w-[720px]">
          <p className="font-mono text-[14px] uppercase text-[#f0e7ff]">Get Started</p>
          <h2 className="font-bold text-[32px] lg:text-[40px] leading-tight text-white tracking-tight">
            Let's Build Your Team Together
          </h2>
          <p className="text-[18px] leading-[26px] text-[#f0e7ff]">
            Whether you're making your first key hire or building out an entire people
            function, we're ready to help.
          </p>
        </div>
        <Link
          to="/contact"
          className="flex gap-2 items-center bg-[#e49b08] text-black text-[15px] font-semibold px-7 py-3.5 rounded-full btn-shine transition duration-200 hover:brightness-95 hover:-translate-y-0.5 active:translate-y-0"
        >
          Book a Discovery Call
          <img src={arrowRight} alt="" className="size-4" />
        </Link>
      </div>
    </section>
  );
}
