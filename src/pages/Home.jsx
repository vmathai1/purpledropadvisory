import Hero from './home/Hero';
import Services from './home/Services';
import Approach from './home/Approach';
import Metrics from './home/Metrics';
import Testimonials from './home/Testimonials';
import Faq from './home/Faq';
import Cta from './home/Cta';
import LeadershipSection from '../components/LeadershipSection';
import aboutPortrait from '../assets/images/about-portrait.png';

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <LeadershipSection image={aboutPortrait} />
      <Approach />
      <Metrics />
      <Testimonials />
      <Faq />
      <Cta />
    </>
  );
}
