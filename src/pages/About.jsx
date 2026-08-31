import Hero from './about/Hero';
import Mission from './about/Mission';
import Principles from './about/Principles';
import LeadershipSection from '../components/LeadershipSection';
import Team from './about/Team';
import Milestones from './about/Milestones';
import aboutPortrait2 from '../assets/images/about-portrait-2.png';

export default function About() {
  return (
    <>
      <Hero />
      <Mission />
      <Principles />
      <LeadershipSection image={aboutPortrait2} />
      <Team />
      <Milestones />
    </>
  );
}
