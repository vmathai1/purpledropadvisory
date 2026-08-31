import { Link, NavLink } from 'react-router-dom';
import Logo from './Logo';

const LINKS = [
  { label: 'Services', to: '/services' },
  { label: 'About', to: '/about' },
  { label: 'Testimonials', to: '/testimonials' },
  { label: 'Contact', to: '/contact' },
];

export default function Navbar() {
  return (
    <header className="fixed top-0 inset-x-0 z-50 w-full bg-white/85 backdrop-blur-md border-t-[3px] border-[#ffd77a] shadow-[0px_5px_5px_rgba(0,0,0,0.05)]">
      <div className="flex items-center justify-between px-6 lg:px-20 h-[88px] max-w-[1440px] mx-auto">
        <Link to="/" aria-label="Purple Drop Advisory home">
          <Logo />
        </Link>
        <nav className="hidden md:flex items-center gap-8 text-[16px] text-[#665b7d] font-normal">
          {LINKS.map((link) => (
            <NavLink
              key={link.label}
              to={link.to}
              end
              className={({ isActive }) =>
                `hover:text-[#5B21E0] transition-colors ${
                  isActive ? 'text-[#5B21E0] font-medium' : ''
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>
        <Link
          to="/contact"
          className="border border-[#b57900] text-[#b57900] text-[15px] font-semibold px-7 py-3.5 rounded-full hover:bg-[#b57900] hover:text-white transition-colors"
        >
          Book a Call
        </Link>
      </div>
    </header>
  );
}
