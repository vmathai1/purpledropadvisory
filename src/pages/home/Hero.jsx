import { Link } from 'react-router-dom';
import heroImg from '../../assets/images/heroBanner.png';
import arrowRight from '../../assets/icons/arrow-right.svg';

export default function Hero() {
  return (
    <section className="relative min-h-[750px] overflow-hidden">
      <img
        src={heroImg}
        alt=""
        className="absolute inset-0 size-full object-cover object-[center_18%] -z-10"
      />
      <div className="max-w-[1440px] mx-auto flex items-center px-6 lg:px-20 pt-[140px] pb-24 min-h-[750px]">
        <div className="flex flex-col gap-8 items-start max-w-[600px]">
          <p className="font-mono text-[12px] tracking-wide uppercase text-[#f0e7ff]">
            People &amp; Talent Advisory
          </p>
          <div className="flex flex-col gap-5 text-[#f0e7ff]">
            <h1 className="font-bold text-[36px] lg:text-[40px] leading-[1.2] tracking-tight">
              Build Great Teams.
              <br />
              Build Great Culture.
            </h1>
            <p className="text-[18px] leading-[1.6]">
              People &amp; talent advisory for high-growth tech companies. From your first 10
              hires to 500, we partner with founders to attract top talent, build scalable
              people processes, and create environments where people thrive.
            </p>
          </div>
          <div className="flex flex-wrap gap-4">
            <Link
              to="/contact"
              className="flex gap-2 items-center bg-[#ffc551] text-black text-[15px] font-medium px-7 py-3.5 rounded-full hover:brightness-95 transition"
            >
              Book a Discovery Call
              <img src={arrowRight} alt="" className="size-4" />
            </Link>
            <Link
              to="/services"
              className="bg-white border border-[#ffc551] text-black text-[15px] font-medium px-7 py-3.5 rounded-full hover:bg-[#fff8e8] transition"
            >
              Our Services
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
