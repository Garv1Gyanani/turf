export default function Hero({ onBookClick }) {
  const waLink = "https://wa.me/919549113456?text=Hi%2C%20I%20would%20like%20to%20book%20a%20slot.";
  
  return (
    <section className="hero">
      <div className="wrap hero-layout">
        <div className="hero-content">
          <div className="eyebrow">
            <span className="pulse"></span>Open 24 Hours · <a href="https://maps.app.goo.gl/bRLcXGfxiLzuQYHd9" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'underline', color: 'inherit' }}>Nirman Nagar, Jaipur</a>
          </div>
          <h1 className="headline">
            Play under<br />
            the <span className="strike">lights.</span><br />
            Own the <span className="accent">turf.</span>
          </h1>
          <p className="hero-sub">
            Jaipur's multi-sport arena for box cricket, football and badminton — full-size turf, netted boundaries, floodlit for night matches, and dedicated coaching batches since 2011.
          </p>
          <div className="hero-actions">
            <button className="btn btn-primary" onClick={onBookClick}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>
              Book Your Slot →
            </button>
            <a className="btn btn-ghost" href={waLink} target="_blank" rel="noopener noreferrer">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg>
              Chat on WhatsApp
            </a>
          </div>
        </div>

        <div className="hero-side-card reveal">
          <div className="feature-item">
            <div className="ic">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
            </div>
            <div>
              <h5>Open 24 Hours</h5>
              <p>Play Anytime</p>
            </div>
          </div>
          <div className="feature-item">
            <div className="ic">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="3" y="4" width="18" height="16" rx="2" ry="2"></rect><line x1="12" y1="4" x2="12" y2="20"></line><circle cx="12" cy="12" r="3"></circle></svg>
            </div>
            <div>
              <h5>Multi-Sport Arenas</h5>
              <p>Cricket • Football • Badminton</p>
            </div>
          </div>
          <div className="feature-item">
            <div className="ic">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path><polyline points="9 12 11 14 15 10"></polyline></svg>
            </div>
            <div>
              <h5>Premium Facilities</h5>
              <p>Floodlit • Netting • Parking</p>
            </div>
          </div>
          <div className="feature-item">
            <div className="ic">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
            </div>
            <div>
              <h5>Coaching Academy</h5>
              <p>Expert Coaches</p>
            </div>
          </div>
        </div>
      </div>

      <div className="wrap">
        <div className="hero-stats">
          <div className="stat">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--brand-sage-dark)" strokeWidth="2"><path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"></path><path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"></path><path d="M4 22h16"></path><path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22"></path><path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22"></path><path d="M18 2H6v7a6 6 0 0 0 12 0V2Z"></path></svg>
            <div>
              <b>100+</b><span>Tournaments Hosted</span>
            </div>
          </div>
          <div className="stat">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--brand-sage-dark)" strokeWidth="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
            <div>
              <b>10K+</b><span>Happy Players</span>
            </div>
          </div>
          <div className="stat">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--brand-sage-dark)" strokeWidth="2"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>
            <div>
              <b>24/7</b><span>Open All Days</span>
            </div>
          </div>
          <div className="stat">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--brand-sage-dark)" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path><polyline points="9 12 11 14 15 10"></polyline></svg>
            <div>
              <b>Premium</b><span>Facilities</span>
            </div>
          </div>
          <a href="https://maps.app.goo.gl/bRLcXGfxiLzuQYHd9" target="_blank" rel="noopener noreferrer" className="stat" style={{ color: 'inherit', textDecoration: 'none' }}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--brand-sage-dark)" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
            <div>
              <b>Nirman Nagar</b><span>Jaipur (Directions)</span>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}
