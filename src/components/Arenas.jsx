export default function Arenas() {
  return (
    <section className="section" id="arenas">
      <div className="wrap">
        <div className="section-head reveal">
          <div>
            <span className="section-tag">What's on the ground</span>
            <h2 className="section-title">Three arenas,<br />one address.</h2>
          </div>
          <p className="section-note">Generous turf dimensions with a dedicated indoor hall so weather conditions never get in the way of your match.</p>
        </div>

        <div className="arenas">
          <div className="arena reveal">
            <span className="num">01 / CRICKET</span>
            <h3>Box Cricket Turf</h3>
            <p>A full-size netted ground with a high-drainage artificial pitch designed to clear standing water rapidly — built for leagues and casual weekend matches alike.</p>
            <ul>
              <li><span>Surface</span><b>Artificial turf, cemented base</b></li>
              <li><span>Boundary</span><b>Fully netted, ball-safe</b></li>
              <li><span>Lighting</span><b>Floodlit for night matches</b></li>
            </ul>
          </div>
          <div className="arena reveal">
            <span className="num">02 / FOOTBALL</span>
            <h3>Football Ground</h3>
            <p>A versatile turf layout structured for five-a-side and seven-a-side play, featuring clear boundaries and markings alongside active academy training options.</p>
            <ul>
              <li><span>Format</span><b>5-a-side &amp; 7-a-side</b></li>
              <li><span>Coaching</span><b>Junior &amp; academy sessions</b></li>
              <li><span>Markings</span><b>Regulation lines</b></li>
            </ul>
          </div>
          <div className="arena reveal">
            <span className="num">03 / BADMINTON</span>
            <h3>Indoor Badminton Hall</h3>
            <p>An indoor facility housing well-maintained synthetic courts, shielded from the elements with dedicated coaching access across all skill configurations.</p>
            <ul>
              <li><span>Courts</span><b>Indoor, synthetic surface</b></li>
              <li><span>Coaching</span><b>Beginner to advanced</b></li>
              <li><span>Comfort</span><b>Indoor, all-season</b></li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
