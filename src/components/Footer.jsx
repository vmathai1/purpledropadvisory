import { Link } from 'react-router-dom';
import Logo from './Logo';
import linkedin from '../assets/icons/linkedin.svg';

const FIRM_LINKS = [
  { label: 'Services', to: '/services' },
  { label: 'About Us', to: '/about' },
  { label: 'Case Studies', to: '/testimonials' },
];

const RESOURCE_LINKS = ['Guides', 'HR Checklists', 'Talent Market 2025', 'Founders Forum'];

export default function Footer() {
  return (
    <footer className="w-full bg-white border-t border-[#f7f4fd]">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-20 pt-16 lg:pt-20 pb-12">
        <div className="flex flex-col lg:flex-row items-start justify-between gap-12">
          <div className="flex flex-col gap-4 w-full lg:w-[300px]">
            <Logo />
            <p className="text-[14px] leading-[22px] text-[#665b7d]">
              People and talent advisory for the next generation of high-growth tech leaders.
            </p>
          </div>

          <div className="flex flex-col gap-4 text-[14px] whitespace-nowrap">
            <p className="font-semibold text-[#0d0022]">Firm</p>
            {FIRM_LINKS.map((link) => (
              <Link key={link.label} to={link.to} className="text-[#665b7d] leading-[22px] hover:text-[#5B21E0]">
                {link.label}
              </Link>
            ))}
          </div>

          <div className="flex flex-col gap-4 text-[14px] whitespace-nowrap">
            <p className="font-semibold text-[#0d0022]">Resources</p>
            {RESOURCE_LINKS.map((label) => (
              <p key={label} className="text-[#665b7d] leading-[22px]">
                {label}
              </p>
            ))}
          </div>

          <div className="flex flex-col gap-4 w-full lg:w-[240px]">
            <p className="font-semibold text-[14px] text-[#0d0022]">Get in Touch</p>
            <a href="mailto:hello@purpledrop.co" className="text-[14px] text-[#7c2dfe] leading-[22px]">
              hello@purpledrop.co
            </a>
            <div className="flex gap-3 items-center">
              <div className="bg-[#f0e7ff] flex items-center justify-center rounded-full size-9">
                <img src={linkedin} alt="" className="size-[18px]" />
              </div>
              <p className="text-[14px] text-[#665b7d] leading-[22px]">Follow on LinkedIn</p>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between border-t border-[#c6afed] pt-6 mt-16 text-[13px] text-[#665b7d] flex-wrap gap-4">
          <p>© 2025 PurpleDrop LLC. All rights reserved.</p>
          <div className="flex gap-6">
            <p>Privacy Policy</p>
            <p>Terms of Service</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
