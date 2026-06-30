export default function TickerBand() {
  const items = [
    "BOX CRICKET — ₹1,200/HR", "FLOODLIT NIGHT MATCHES", "FOOTBALL 5-A-SIDE & 7-A-SIDE",
    "INDOOR BADMINTON HALL", "OPEN 24 HOURS", "ACADEMY COACHING AVAILABLE",
    "4.5★ · 291 GOOGLE REVIEWS", "NIRMAN NAGAR, JAIPUR"
  ];

  return (
    <div className="ticker-band">
      <div className="ticker-track">
        {/* We double the items to create a seamless scrolling effect */}
        {[...items, ...items].map((item, index) => (
          <div className="ticker-item" key={index}>
            <span className="flag">●</span>{item}
          </div>
        ))}
      </div>
    </div>
  );
}
