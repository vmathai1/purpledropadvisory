import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Testimonials from './pages/Testimonials';
import Contact from './pages/Contact';
import HrChecklist from './pages/HrChecklist';
import TalentMarket2026 from './pages/TalentMarket2026';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/testimonials" element={<Testimonials />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/hr-checklist" element={<HrChecklist />} />
          <Route path="/talent-market-2026" element={<TalentMarket2026 />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
