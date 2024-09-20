import React from 'react';
import './App.css';

function App() {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted');
    // Add form submission logic here
  };

  const marketHighlights = [
    { title: "Fresh Produce", description: "Discover a wide variety of fresh, locally sourced fruits and vegetables." },
    { title: "Live Music", description: "Enjoy live music performances from local musicians." },
    { title: "Artisanal Crafts", description: "Find unique handmade crafts and artwork." }
  ];

  const upcomingEvents = [
    { title: "Live Music Night", date: "September 7th", description: "Enjoy live music performances from local artists." },
    { title: "Craft Fair", date: "October 1st", description: "Discover unique handmade crafts and artwork." }
  ];

  return (
    <div className="App">
      <header>
        <img src={`${process.env.PUBLIC_URL}/images/logo.jfif`} alt="Nkomazi Farmers Market" className="logo" />
        <h1>Nkomazi Farmers Market</h1>
        <p className="tagline">Premium Vibes</p>
      </header>

      <main>
        <section className="hero">
          <div className="hero-content">
            <h2>Welcome to Nkomazi Farmers Market</h2>
            <p>Discover fresh produce, artisanal crafts, and live entertainment</p>
          </div>
        </section>

        <section className="welovenkfm">
          <h2>#WELOVENKFM</h2>
          <div className="image-gallery">
            {[...Array(10)].map((_, index) => (
              <img
                key={index}
                src={`${process.env.PUBLIC_URL}/images/welovenkfm/pic-${index + 1}.jpg`}
                alt={`Event ${index + 1}`}
              />
            ))}
          </div>
        </section>

        <section className="market-highlights">
          <h2>Market Highlights</h2>
          <div className="highlight-container">
            {marketHighlights.map((highlight, index) => (
              <div key={index} className="highlight-card">
                <h3>{highlight.title}</h3>
                <p>{highlight.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="upcoming-events">
          <h2>Upcoming Events</h2>
          <div className="event-container">
            {upcomingEvents.map((event, index) => (
              <div key={index} className="event-card">
                <h3>{event.title}</h3>
                <p className="date">{event.date}</p>
                <p>{event.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="event-highlights">
          <h2>Event Highlights</h2>
          <ul>
            <li>Artisanal goods and crafts</li>
            <li>Live performances by talented musicians</li>
            <li>Food trucks offering a variety of cuisines</li>
            <li>Interactive workshops and activities for all ages</li>
          </ul>
          <p>Don't miss out on this opportunity to support local farmers and artisans while enjoying a day of fun and entertainment.</p>
          <p>Mark your calendars and join us at the Nkomazi Farmers Market for an unforgettable experience!</p>
        </section>

        <section className="call-to-action">
          <h2>Visit Us Today!</h2>
          <button>Learn More</button>
        </section>

        <section className="about-us">
          <h2>About Us</h2>
          <p>Nkomazi Farmers Market is your local destination for fresh, high-quality produce and unique handmade crafts.</p>
          
          <h3>Our Mission</h3>
          <p>To provide a platform for local farmers and artisans to showcase their products while offering our community access to fresh, sustainable goods.</p>
        </section>

        <section className="contact-us">
          <h2>Contact Us</h2>
          <p>Have a question or want to get in touch? Feel free to contact us using the form below or by visiting us at:</p>
          <address>
            Nkomazi Farmers Market<br />
            Mahhushe Shongwe Game Reserve, Mzinti, South Africa <br />
            <a href="mailto:Info@nkomazifarmersmarket.co.za">Info@nkomazifarmersmarket.co.za</a><br />
            <a href="tel:+27826316340">082 631 6340</a>
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
        <p>&copy; {new Date().getFullYear()} Nkomazi Farmers Market</p>
        <div className="footer-links">
          <a href="privacy-policy.html">Privacy Policy</a>
          <a href="https://www.facebook.com/yourmarket">Facebook</a>
          <a href="https://www.instagram.com/yourmarket">Instagram</a>
        </div>
      </footer>
    </div>
  );
}

export default App;