import { Routes, Route } from 'react-router-dom';
import  Navbar from './NavBar/NavBar';
import About  from "../src/components/about/About";
import Catalog from './components/pages/catalog/Catalog';
import Footer from './components/footer/footer';
import './App.css';

const App = () => {
  return (
    <><div />
      <Routes>
        {/* <Route path="/" element={ <Welcome />} /> */}
        <Route path="/src/components/pages/about/About.js" element={ <About />} />
        <Route path="/src/components/pages/catalog/Catalog.js" element={ <Catalog /> } />
      </Routes>
      <div className="container">
        {/* <!-- top navigation --> */}
        <Navbar />
        {/* <!-- Welcome Section --> */}
        <div className="welcome">
          <section className="welcome">
            <img src="/images/BPL_logo.png" alt="Beatrice Public Library Logo" />
            <div className="welcome_home_box">
              <img src="/images/Homepage Photo.jpg" alt="Books on a bookshelf" /><br />
              <div className="home_name">
                <span>Welcome to the</span>
                <p id="BPL">Beatrice Public Library</p>
                <span>where we encourage and assist in life-long learning</span>
              </div>
              <button className="search">Search Catalog</button>
            </div>
          </section>
        </div>
        {/* <!-- Location & Hours of Operation --> */}

        <div className="location_home_box">
          <section className="location">
            <h2 id="location">Location + Hours</h2>
            <section className="location_hours">
              <address>
                <h3>Address:</h3>
                <br />
                203 Beatrice Lane<br />
                Beatrix, CT 06460<br />
              </address>
              <ul><h3>Hours:</h3>
                <li>Sunday - Closed</li>
                <li>Monday - 10am to 6pm</li>
                <li>Tuesday - 10am to 6pm</li>
                <li>Wednesday - 10am to 6pm</li>
                <li>Thursday - 10am to 6pm</li>
                <li>Friday - 3pm to 8pm</li>
                <li>Saturday - 9am to 8pm</li>
              </ul>
            </section>
            <hr />
            <section className="donations">
              <h2 id="donations">Donations</h2>
              <p className="donation_giver_info">
                The Beatrice Public Library gratefully accepts gifts, donations and endowments. With ever-increasing budget constraints, we appreciate your support! Donations of any amount are always accepted.
              </p>

              <span className="donation_ack">A letter of acknowledgement will be sent to the donor.</span>

              <button className="donate" id="donate">Donate Here</button>
            </section>
          </section>
        </div>

        {/* <!-- Event Calendar --> */}
        <section className="event_calendar" id="events">
          <div className="events_home_box">
            <h2>Event Calendar</h2>
            <span className="event_view_registration">View and Register for Events</span>
            <img src="/images/Logo + Events Elements.png" alt="images of woman and children in a circle and adults in a classroom" className="events_for_all" />
            <button className="child_teen_events">Child + Teen Events</button>
            <button className="adult_events">Adult Events</button>
          </div>
        </section>
      </div>

      {/* {footer} */}
      <Footer />
    </>
  );
};

export default App;
