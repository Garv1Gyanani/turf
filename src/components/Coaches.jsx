export default function Coaches() {
  return (
    <section className="section" id="coaches">
      <div className="wrap">
        <div className="section-head reveal">
          <div>
            <span className="section-tag">Develop your game</span>
            <h2 className="section-title">Training Programs.</h2>
          </div>
          <p className="section-note">Our structured training programs offer professional drills, technique development, and game-play strategy across all arenas.</p>
        </div>

        <div className="coaches reveal">
          <div className="coach">
            <div className="photo" style={{ backgroundImage: "url('/coach_cricket.png')" }}>
              <span className="sport-tag">Cricket</span>
            </div>
            <h4>Cricket Coaching</h4>
            <p>Box cricket fundamentals, batting technique, and match scenarios under floodlights.</p>
          </div>
          <div className="coach">
            <div className="photo" style={{ backgroundImage: "url('/coach_football.png')" }}>
              <span className="sport-tag">Football</span>
            </div>
            <h4>Football Academy</h4>
            <p>5-a-side strategy, ball control drills, and stamina building on premium artificial turf.</p>
          </div>
          <div className="coach">
            <div className="photo" style={{ backgroundImage: "url('/coach_badminton.png')" }}>
              <span className="sport-tag">Badminton</span>
            </div>
            <h4>Badminton Training</h4>
            <p>Indoor court agility, smash techniques, and tournament preparation for all skill levels.</p>
          </div>
          <div className="coach">
            <div className="photo" style={{ backgroundImage: "url('/coach_youth.png')" }}>
              <span className="sport-tag">Academy</span>
            </div>
            <h4>Youth Development</h4>
            <p>Engaging multi-sport sessions designed to build teamwork and athleticism in younger players.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
