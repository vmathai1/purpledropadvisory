import bioMarcus from '../../assets/images/bio-marcus.png';
import bioClara from '../../assets/images/bio-clara.png';
import bioJulian from '../../assets/images/bio-julian.png';

const TEAM = [
  {
    image: bioMarcus,
    name: 'Dr. Marcus Vance',
    role: 'Managing Director & Founder',
    bio: 'Former VP of People at Vercel. 15+ years scaling distributed systems engineering teams.',
  },
  {
    image: bioClara,
    name: 'Clara Holloway',
    role: 'Partner, Talent Acquisition',
    bio: 'Led talent pipelines at Figma and Stripe. Expert in executive hiring and compensation architecture.',
  },
  {
    image: bioJulian,
    name: 'Julian Pierce',
    role: 'Partner, Compliance & Operations',
    bio: 'Ex-Director of HR Operations at Linear. Specialized in global employment laws and handbook structures.',
  },
];

export default function Team() {
  return (
    <section className="max-w-[1440px] mx-auto flex flex-col gap-12 items-center px-6 lg:px-20 py-16 lg:py-20">
      <h2 className="font-normal text-[32px] lg:text-[48px] text-center leading-tight text-[#0d0022] tracking-tight">
        The People Behind Your People
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 w-full max-w-[1100px]">
        {TEAM.map((person) => (
          <div key={person.name} className="flex flex-col gap-6 items-center text-center">
            <img
              src={person.image}
              alt={person.name}
              className="rounded-full size-[220px] lg:size-[300px] object-cover"
            />
            <div className="flex flex-col gap-2">
              <p className="font-semibold text-[20px] text-[#0d0022]">{person.name}</p>
              <p className="font-semibold text-[14px] text-[#7c2dfe]">{person.role}</p>
              <p className="text-[14px] leading-[1.5] text-[#665b7d]">{person.bio}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
