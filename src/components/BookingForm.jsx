import React from 'react';

export default function BookingForm({ isOpen, onClose }) {
  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = new FormData(e.target);
    const text = `Hi, I would like to book a slot.\nSport: ${data.get('arena')}\nDate: ${data.get('date')}\nTime: ${data.get('time')}\nName: ${data.get('name')}\nPhone: ${data.get('phone')}`;
    const waUrl = `https://wa.me/919549113456?text=${encodeURIComponent(text)}`;
    window.open(waUrl, '_blank');
    onClose();
  };

  return (
    <div className="booking-modal-overlay" onClick={onClose}>
      <div className="booking-modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="booking-modal-close" onClick={onClose} aria-label="Close booking modal">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
        </button>
        <div style={{marginBottom: '24px'}}>
          <h2 style={{fontFamily: 'var(--display)', fontSize: '2rem', textTransform: 'uppercase', color: 'var(--text-primary)', margin: '0 0 8px'}}>Ready to Play?</h2>
          <p style={{fontSize: '0.88rem', color: 'var(--text-muted)', margin: 0}}>Select your sport and preferred time. We will confirm your slot instantly on WhatsApp.</p>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="field">
            <label htmlFor="name">Your name</label>
            <input id="name" name="name" type="text" placeholder="Full name" required />
          </div>
          <div className="field">
            <label htmlFor="phone">Phone number</label>
            <input id="phone" name="phone" type="tel" placeholder="Mobile number" required />
          </div>
          <div className="field">
            <label htmlFor="arena">Select Sport</label>
            <select id="arena" name="arena" required>
              <option value="Box Cricket">Box Cricket</option>
              <option value="Football">Football</option>
              <option value="Badminton">Badminton</option>
            </select>
          </div>
          <div className="field-row">
            <div className="field">
              <label htmlFor="date">Date</label>
              <input id="date" name="date" type="date" required />
            </div>
            <div className="field">
              <label htmlFor="time">Time Slot</label>
              <input id="time" name="time" type="time" required />
            </div>
          </div>
          <button className="btn btn-primary" style={{width: '100%', justifyContent: 'center', marginTop: '16px'}} type="submit">
            <svg style={{marginRight: '8px'}} width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg>
            Book on WhatsApp
          </button>
        </form>
      </div>
    </div>
  );
}
