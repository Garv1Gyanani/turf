export default function Pricing() {
  return (
    <section className="section" id="pricing" style={{ paddingTop: 0 }}>
      <div className="wrap">
        <div className="section-head reveal">
          <div>
            <span className="section-tag">Booking board</span>
            <h2 className="section-title">Rates &amp; slots.</h2>
          </div>
          <p className="section-note">Straightforward hourly pricing — contact us to confirm badminton court availability and specialized coaching structures.</p>
        </div>

        <div className="scoreboard reveal">
          <div className="scoreboard-row head">
            <div>Arena</div>
            <div>Rate</div>
            <div>Best for</div>
            <div>Hours</div>
          </div>
          <div className="scoreboard-row">
            <div className="court">Box Cricket Turf</div>
            <div className="price">₹1,200 / hr</div>
            <div>Matches, league play</div>
            <div>24 hours</div>
          </div>
          <div className="scoreboard-row">
            <div className="court">Football Ground</div>
            <div className="price">Call for rate</div>
            <div>5-a-side / 7-a-side</div>
            <div>24 hours</div>
          </div>
          <div className="scoreboard-row">
            <div className="court">Badminton Court</div>
            <div className="price">Call for rate</div>
            <div>Singles, doubles, coaching</div>
            <div>24 hours</div>
          </div>
        </div>
        <p className="form-note" style={{ marginTop: '20px' }}>Rates and availability are confirmed by phone — tap "Call to confirm" below or use our quick request form.</p>
      </div>
    </section>
  );
}
