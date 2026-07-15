import './styles.css';
import { BookingProvider } from './BookingContext.jsx';
import ScrollProgress from './components/ScrollProgress.jsx';
import Hero from './components/Hero.jsx';
import StatBar from './components/StatBar.jsx';
import Problem from './components/Problem.jsx';
import WhatWeDo from './components/WhatWeDo.jsx';
import TrackRecord from './components/TrackRecord.jsx';
import CaseStudy from './components/CaseStudy.jsx';
import Founder from './components/Founder.jsx';
import Offer from './components/Offer.jsx';
import Guarantee from './components/Guarantee.jsx';
import Roi from './components/Roi.jsx';
import WhoDifferentiator from './components/WhoDifferentiator.jsx';
import Testimonials from './components/Testimonials.jsx';
import ClientWork from './components/ClientWork.jsx';
import BookCta from './components/BookCta.jsx';
import Footer from './components/Footer.jsx';
import BookModal from './components/BookModal.jsx';

function App() {
  return (
    <BookingProvider>
      <div style={{ position: 'relative' }}>
        <ScrollProgress />
        <Hero />
        <StatBar />
        <Problem />
        <WhatWeDo />
        <TrackRecord />
        <CaseStudy />
        <Founder />
        <Offer />
        <Guarantee />
        <Roi />
        <WhoDifferentiator />
        <Testimonials />
        <ClientWork />
        <BookCta />
        <Footer />
        <BookModal />
      </div>
    </BookingProvider>
  );
}

export default App;
