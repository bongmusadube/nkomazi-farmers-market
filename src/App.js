import React from 'react';
import './App.css';

function App() {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted');
    // Add your form submission logic here
  };

  return (
    <div className="App">
      <header>
        <img src={`${process.env.PUBLIC_URL}/images/logo.jfif`} alt="Nkomazi Farmers Market Logo" className="logo" />
        <h1>Nkomazi Farmers Market</h1>
      </header>

      <main>
        <section className="hero">
          <div className="hero-content">
            <h2>Welcome to Nkomazi Farmers Market</h2>
            <p>Discover fresh produce, artisanal crafts, and live entertainment</p>
          </div>
        </section>

        <section className="about-us">
          <h2>About Us</h2>
          <img src={`${process.env.PUBLIC_URL}/images/about-us-image.jpg`} alt="About Us" className="about-image" />
          <p>Nkomazi Farmers Market is your local destination for fresh, high-quality produce and unique handmade crafts.</p>
          
          <h3>Our Mission</h3>
          <p>To provide a platform for local farmers and artisans to showcase their products while offering our community access to fresh, sustainable goods.</p>
          
          <h3>Our Team</h3>
          <div className="team-members">
            <div className="team-member">
              <img src={`${process.env.PUBLIC_URL}/images/team-member.jpg`} alt="John Doe" />
              <h4>John Doe</h4>
              <p>Market Manager</p>
            </div>
            {/* Add more team members as needed */}
          </div>
        </section>

        <section className="market-highlights">
          <h2>Market Highlights</h2>
          <div className="highlight-card">
            <h3>Fresh Produce</h3>
            <p>Discover a wide variety of fresh, locally sourced fruits and vegetables.</p>
          </div>
          <div className="highlight-card">
            <h3>Live Music</h3>
            <p>Enjoy live music performances from local musicians.</p>
          </div>
          <div className="highlight-card">
            <h3>Artisanal Crafts</h3>
            <p>Find unique handmade crafts and artwork.</p>
          </div>
        </section>

        <section className="upcoming-events">
          <h2>Upcoming Events</h2>
          <div className="event-card">
            <h3>Live Music Night</h3>
            <p className="date">September 7th</p>
            <p>Enjoy live music performances from local artists.</p>
          </div>
          <div className="event-card">
            <h3>Craft Fair</h3>
            <p className="date">October 1st</p>
            <p>Discover unique handmade crafts and artwork.</p>
          </div>
        </section>

        <section className="call-to-action">
          <h2>Visit Us Today!</h2>
          <button>Learn More</button>
        </section>

        <section className="event-images">
          <h2>Recent Events</h2>
          <div className="image-gallery">
            <img src={`${process.env.PUBLIC_URL}/images/pc2.jpg`} alt="Event 1" />
            <img src={`${process.env.PUBLIC_URL}/images/pic1.jpg`} alt="Event 2" />
          </div>
        </section>

        <section className="contact-us">
          <h2>Contact Us</h2>
          <p>Have a question or want to get in touch? Feel free to contact us using the form below or by visiting us at:</p>
          <address>
            Nkomazi Farmers Market<br />
            Your Address<br />
            Your City, State, ZIP<br />
            <a href="mailto:your@email.com">bongmusadube1@email.com</a><br />
            <a href="mailto:your@email.com">sbusisonyambi@email.com</a><br />
            <a href="tel:+1234567890">+274567890</a>
            <a href="tel:+1234567890">+274567890</a>
          </address>
          <form onSubmit={handleSubmit}>
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" required />
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" required />
            <label htmlFor="message">Message:</label>
            <textarea id="message" name="message" required></textarea>
            <button type="submit">Send</button>
          </form>
        </section>
      </main>

      <footer>
        <p>&copy; 2024 Nkomazi Farmers Market</p>
        <a href="privacy-policy.html">Privacy Policy</a>
        <a href="https://www.facebook.com/yourmarket">Facebook</a>
        <a href="https://www.instagram.com/yourmarket">Instagram</a>
      </footer>
    </div>
  );
}

export default App;