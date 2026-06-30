import { useState } from 'react';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const faqs = [
    {
      q: "Is Sports Villa open at night?",
      a: "Yes, our facility operates 24 hours a day. Both the box cricket turf and football ground feature commercial floodlight systems for evening and night games."
    },
    {
      q: "What is the standard hourly rate for box cricket?",
      a: "The base rate for the box cricket turf is ₹1,200 per hour. Football and badminton configurations are quoted over the phone to match varying squad requirements and duration lengths."
    },
    {
      q: "Do you support training programs alongside general bookings?",
      a: "Yes. Sports Villa hosts an active training academy with structured programs for badminton, cricket, and football alongside our standard hourly recreational bookings."
    },
    {
      q: "Is there dedicated parking available?",
      a: "Yes, we provide secure parking facilities directly within our campus perimeter."
    },
    {
      q: "How is play affected by rainy weather?",
      a: "Our synthetic turf has built-in high-volume drainage designed to disperse typical surface water quickly. Our badminton facilities are housed completely indoors and remain unaffected by weather patterns."
    }
  ];

  return (
    <>
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="section-head reveal">
            <div>
              <span className="section-tag">Good to know</span>
              <h2 className="section-title">Common questions.</h2>
            </div>
          </div>
          <div className="reveal">
            {faqs.map((faq, index) => (
              <div className={`faq-item ${openFaq === index ? 'open' : ''}`} key={index}>
                <button className="faq-q" onClick={() => toggleFaq(index)}>
                  {faq.q}<span className="plus">+</span>
                </button>
                <div className="faq-a" style={{ maxHeight: openFaq === index ? '500px' : '0' }}>
                  <p>{faq.a}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <footer className="site">
        <div className="wrap">
          <div className="footer-grid">
            <div>
              <div className="brand" style={{ marginBottom: '18px' }}>
                <span className="dot"></span>SPORTS VILLA
              </div>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.92rem', lineHeight: '1.6', maxWidth: '320px' }}>
                Continuous multi-sport training and play facility in Nirman Nagar, Jaipur — box cricket, football and badminton since 2011.
              </p>
            </div>
            <div>
              <h5>Navigate</h5>
              <ul>
                <li><a href="#arenas">Arenas</a></li>
                <li><a href="#pricing">Pricing</a></li>
                <li><a href="#membership">Membership</a></li>
                <li><a href="#coaches">Coaches</a></li>
                <li><a href="#events">Events</a></li>
                <li><a href="#story">Our story</a></li>
                <li><a href="#reviews">Reviews</a></li>
                <li><a href="#book">Book a slot</a></li>
              </ul>
            </div>
            <div>
              <h5>Contact</h5>
              <ul>
                <li><a href="tel:09549113456">095491 13456</a></li>
                <li><a href="https://instagram.com/sportsvillajaipur" target="_blank" rel="noopener noreferrer">Instagram</a></li>
                <li>
                  <a href="https://maps.app.goo.gl/bRLcXGfxiLzuQYHd9" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'underline' }}>
                    Lane – 1, Shiv Parwati Nagar, Usha Vihar, Nirman Nagar, Jaipur 302019
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="footer-bottom">
            <span>© {currentYear} Sports Villa, Jaipur</span>
            <span>
              <a href="https://maps.app.goo.gl/bRLcXGfxiLzuQYHd9" target="_blank" rel="noopener noreferrer" style={{ color: 'inherit', textDecoration: 'underline' }}>
                4.5★ from 291 Google reviews
              </a> · Open 24 hours
            </span>
          </div>
        </div>
      </footer>
    </>
  );
}
