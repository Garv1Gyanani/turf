import { useEffect, useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import TickerBand from './components/TickerBand';
import StatBand from './components/StatBand';
import Arenas from './components/Arenas';
import Pricing from './components/Pricing';
import Membership from './components/Membership';
import Coaches from './components/Coaches';
import Events from './components/Events';
import Story from './components/Story';
import BookingForm from './components/BookingForm';
import FloatingBookButton from './components/FloatingBookButton';
import Footer from './components/Footer';

function App() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver((entries) => {
      entries.forEach((en) => {
        if (en.isIntersecting) {
          en.target.classList.add('in');
          obs.unobserve(en.target);
        }
      });
    }, { threshold: 0.12 });

    const timer = setTimeout(() => {
      document.querySelectorAll('.reveal').forEach((el) => obs.observe(el));
    }, 100);

    return () => {
      clearTimeout(timer);
      obs.disconnect();
    };
  }, []);

  return (
    <>
      <Header onBookClick={() => setIsBookingOpen(true)} />
      <Hero onBookClick={() => setIsBookingOpen(true)} />
      <TickerBand />
      <StatBand />
      <Arenas />
      <Pricing />
      <Membership onBookClick={() => setIsBookingOpen(true)} />
      <Coaches />
      
      {/* Sponsors Strip Inline */}
      <div className="wrap">
        <div className="sponsors reveal">
          <span>JAIPUR DISTRICT CRICKET LEAGUE</span>
          <span>CRICHEROES PARTNER GROUND</span>
          <span>NIRMAN NAGAR SPORTS COUNCIL</span>
          <span>RAJASTHAN BADMINTON CIRCUIT</span>
          <span>LOCAL FOOTBALL 5-A-SIDE LEAGUE</span>
        </div>
      </div>

      <Events />

      {/* News Inline */}
      <section className="section">
        <div className="wrap">
          <div className="section-head reveal">
            <div>
              <span className="section-tag">From the ground</span>
              <h2 className="section-title">News &amp; updates.</h2>
            </div>
          </div>
          <div className="news reveal">
            <div className="news-item">
              <span className="news-date">This month</span>
              <h4>LED Floodlight Upgrade Completed</h4>
              <p>We've updated our field illumination arrays across the cricket and football spaces for superior night visibility.</p>
            </div>
            <div className="news-item">
              <span className="news-date">This season</span>
              <h4>Badminton Courts Refurbished</h4>
              <p>A fresh synthetic playing surface has been applied to the indoor hall courts ahead of the upcoming bracket events.</p>
            </div>
            <div className="news-item">
              <span className="news-date">Ongoing</span>
              <h4>Coaching Batches Expanding</h4>
              <p>We've introduced additional weekday evening slots for youth academy players across all key sports.</p>
            </div>
          </div>
        </div>
      </section>
      <Story />

      {/* Reviews Inline */}
      <section className="section" id="reviews">
        <div className="wrap">
          <div className="section-head reveal">
            <div>
              <span className="section-tag">From the players</span>
              <h2 className="section-title">What regulars say.</h2>
            </div>
            <p className="section-note">Selected feedback from regular squads, parent groups, and academy students.</p>
          </div>

          <div className="quotes reveal">
            <div className="quote">
              <p>"An excellent venue to schedule cricket and football matches. The indoor badminton space offers well-maintained courts."</p>
              <footer><span>Verified Reviewer</span><span className="stars">★★★★★</span></footer>
            </div>
            <div className="quote">
              <p>"The drainage installation performs effectively during heavy rainfall. The operations team is highly responsive."</p>
              <footer><span>Weekend Regular</span><span className="stars">★★★★★</span></footer>
            </div>
            <div className="quote">
              <p>"The instructors approach youth training sessions systematically. A highly reliable coaching environment."</p>
              <footer><span>Academy Parent</span><span className="stars">★★★★☆</span></footer>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Inline */}
      <section className="section">
        <div className="wrap">
          <div className="section-head reveal">
            <div>
              <span className="section-tag">Around the ground</span>
              <h2 className="section-title">A look at the turf.</h2>
            </div>
          </div>
          <div className="gallery reveal">
            <div className="g g1"><span>Box cricket turf — night floodlights</span></div>
            <div className="g g2"><span>Indoor badminton hall</span></div>
            <div className="g g3"><span>Netted boundary, cricket end</span></div>
            <div className="g g4"><span>Football five-a-side markings</span></div>
            <div className="g g5"><span>Parking &amp; entrance gate</span></div>
            <div className="g g6"><span>Junior academy training session</span></div>
            <div className="g g7"><span>Weekend tournament finals</span></div>
            <div className="g g8"><span>Changing rooms &amp; seating area</span></div>
          </div>
        </div>
      </section>

      <BookingForm isOpen={isBookingOpen} onClose={() => setIsBookingOpen(false)} />
      <FloatingBookButton onBookClick={() => setIsBookingOpen(true)} />
      <Footer />
    </>
  );
}

export default App;
