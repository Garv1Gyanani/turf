import { useState } from 'react';

export default function Header({ onBookClick }) {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  const toggleMobileNav = () => setMobileNavOpen(!mobileNavOpen);

  const handleBookClick = () => {
    onBookClick();
    if (mobileNavOpen) setMobileNavOpen(false);
  };

  const navLinks = [
    { href: '#arenas', text: 'Arenas' },
    { href: '#pricing', text: 'Pricing' },
    { href: '#membership', text: 'Membership' },
    { href: '#coaches', text: 'Coaches' },
    { href: '#events', text: 'Events' },
    { href: '#story', text: 'Since 2011' },
    { href: '#reviews', text: 'Reviews' },
    { href: '#book', text: 'Book' }
  ];

  return (
    <>
      <header>
        <div className="nav">
          <div className="brand">
            <span className="dot"></span>SPORTS VILLA
          </div>
          <nav className="links">
            {navLinks.map((link) => (
              link.href === '#book' ? (
                <a key={link.href} href="#" onClick={(e) => { e.preventDefault(); handleBookClick(); }}>
                  {link.text}
                </a>
              ) : (
                <a key={link.href} href={link.href}>
                  {link.text}
                </a>
              )
            ))}
          </nav>
          <button className="nav-cta" onClick={handleBookClick}>
            Book a slot
          </button>
          <button 
            className="nav-toggle" 
            onClick={toggleMobileNav} 
            aria-label="Toggle navigation menu"
          >
            ☰
          </button>
        </div>
      </header>

      <div className={`mobile-nav ${mobileNavOpen ? 'open' : ''}`} id="mobileNav">
        <button className="mobile-nav-close" onClick={toggleMobileNav}>
          &times;
        </button>
        {navLinks.map((link) => (
          link.href === '#book' ? (
            <a key={link.href} href="#" onClick={(e) => { e.preventDefault(); handleBookClick(); }}>
              {link.text}
            </a>
          ) : (
            <a key={link.href} href={link.href} onClick={toggleMobileNav}>
              {link.text}
            </a>
          )
        ))}
      </div>
    </>
  );
}
