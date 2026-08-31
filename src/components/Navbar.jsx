import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import Logo from './Logo';

const LINKS = [
  { label: 'Services', to: '/services' },
  { label: 'About', to: '/about' },
  { label: 'Testimonials', to: '/testimonials' },
  { label: 'Contact', to: '/contact' },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 inset-x-0 z-50 w-full bg-white/85 backdrop-blur-md border-t-[3px] border-[#ffd77a] shadow-[0px_5px_5px_rgba(0,0,0,0.05)]">
      <div className="flex items-center justify-between px-6 lg:px-20 h-[88px] max-w-[1440px] mx-auto">
        <Link to="/" aria-label="Purple Drop Advisory home" onClick={() => setMenuOpen(false)}>
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
          className="hidden md:block border border-[#b57900] text-[#b57900] text-[15px] font-semibold px-7 py-3.5 rounded-full hover:bg-[#b57900] hover:text-white transition-colors"
        >
          Book a Call
        </Link>
        <button
          type="button"
          onClick={() => setMenuOpen((open) => !open)}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
          className="md:hidden flex items-center justify-center size-10 -mr-2 text-[#0d0022]"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            {menuOpen ? (
              <path
                d="M6 6L18 18M18 6L6 18"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            ) : (
              <path
                d="M4 7H20M4 12H20M4 17H20"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            )}
          </svg>
        </button>
      </div>

      {menuOpen && (
        <nav className="md:hidden flex flex-col gap-1 px-6 pb-6 pt-2 text-[16px] text-[#665b7d] font-normal border-t border-[#f0e7ff] bg-white/95 backdrop-blur-md">
          {LINKS.map((link) => (
            <NavLink
              key={link.label}
              to={link.to}
              end
              onClick={() => setMenuOpen(false)}
              className={({ isActive }) =>
                `py-3 border-b border-[#f7f4fd] ${
                  isActive ? 'text-[#5B21E0] font-medium' : ''
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
          <Link
            to="/contact"
            onClick={() => setMenuOpen(false)}
            className="mt-4 text-center border border-[#b57900] text-[#b57900] text-[15px] font-semibold px-7 py-3.5 rounded-full hover:bg-[#b57900] hover:text-white transition-colors"
          >
            Book a Call
          </Link>
        </nav>
      )}
    </header>
  );
}
