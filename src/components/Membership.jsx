export default function Membership({ onBookClick }) {
  return (
    <section className="section" id="membership">
      <div className="wrap">
        <div className="section-head reveal">
          <div>
            <span className="section-tag">Play more, pay less</span>
            <h2 className="section-title">Membership plans.</h2>
          </div>
          <p className="section-note">Structured options for regular squads and individual athletes looking to lock in weekly slots.</p>
        </div>

        <div className="plans reveal">
          <div className="plan">
            <h3>Drop-In</h3>
            <div className="price-line">₹1,200 <span>/ hour</span></div>
            <ul>
              <li>Single hourly turf or court booking</li>
              <li>Any arena, subject to slot availability</li>
              <li>No ongoing commitment required</li>
              <li>Pay on arrival via UPI or Cash</li>
            </ul>
            <button className="btn btn-ghost" onClick={onBookClick}>Book a slot</button>
          </div>
          <div className="plan featured">
            <h3>Monthly Player</h3>
            <div className="price-line">Call for rate <span>/ month</span></div>
            <ul>
              <li>4 fixed weekly slots in your chosen arena</li>
              <li>Priority booking over standard walk-ins</li>
              <li>10% discount on any extra booked hours</li>
              <li>Complimentary locker access</li>
              <li>One slot carry-forward allowed per month</li>
            </ul>
            <a href="https://wa.me/919549113456?text=Hi%2C%20I%20would%20like%20to%20enquire%20about%20the%20Pro%20membership." target="_blank" rel="noopener noreferrer" className="btn btn-primary" style={{width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
              <svg style={{marginRight: '8px'}} width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg>
              Enquire on WhatsApp
            </a>
          </div>
          <div className="plan">
            <h3>Academy Coaching</h3>
            <div className="price-line">Call for rate <span>/ month</span></div>
            <ul>
              <li>Coaching in cricket, football, or badminton</li>
              <li>Batches organized for children and adults</li>
              <li>Invitations to inter-academy tournaments</li>
              <li>Performance feedback from resident coaches</li>
            </ul>
            <a href="https://wa.me/919549113456?text=Hi%2C%20I%20would%20like%20to%20enquire%20about%20the%20Elite%20membership." target="_blank" rel="noopener noreferrer" className="btn btn-ghost" style={{width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
              <svg style={{marginRight: '8px'}} width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg>
              Enquire on WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
