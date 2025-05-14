import './App.css'

function App() {
  

  return (
    <>
    
    <header>
      <nav className="navbar">
        <a className="logo" href="index.html">
          <i className="fas fa-globe-americas"></i> TravelBuddy
        </a>
        <div className="controls">
          <a className="link" href="explore.html"
            ><i className="fas fa-compass"></i> Explore</a
          >
          <a className="link" href="profile.html"
            ><i className="fas fa-user-circle"></i> Profile</a
          >
          <a className="button login-button" href="login.html"
            ><i className="fas fa-sign-in-alt"></i> Login</a
          >
           {/* <div className="button"><i className="fas fa-sign-out-alt"></i> Logout</div>  */}
        </div>
      </nav>
    </header>
    <main>
      <section className="hero">
        <div className="hero-header">
          <div className="title">Current Location</div>
          <div className="live-badge">Live</div>
        </div>

        <div className="hero-content">
          <div className="left section">
            <div className="location-image">
              <img
                src="./images/nepal-village.jpg"
                alt="Beautiful view of a Nepalese village"
              />
              <div className="image-tag">Pokhara, Nepal</div>
            </div>
            <div className="location-details">
              <div className="location-name">Pokhara Valley</div>
              <div className="location-description">
                Nestled in the foothills of the Annapurna range, Pokhara is
                Nepal's adventure capital and a gateway to the Himalayas. Known
                for its tranquil lakes, panoramic mountain views, and vibrant
                culture, this picturesque valley offers unforgettable
                experiences for travelers seeking both relaxation and adventure.
              </div>
              <div className="location-tags">
                <span className="tag"
                  ><i className="fas fa-mountain"></i> Mountains</span
                >
                <span className="tag"><i className="fas fa-water"></i> Lakes</span>
                <span className="tag"><i className="fas fa-hiking"></i> Trekking</span>
                <span className="tag"><i className="fas fa-utensils"></i> Food</span>
              </div>
            </div>
          </div>

          <div className="right section">
            <div className="weather">
              <div className="temperature">
                <div className="title">Weather</div>
                <div className="degree">23°C</div>
                <div className="sky">
                  <i className="fas fa-cloud-sun"></i> Partly Cloudy
                </div>
                <div className="forecast">H: 25°C | L: 18°C</div>
              </div>
              <div className="location-stats">
                <div className="row">
                  <div className="key">
                    <i className="fas fa-users"></i> Population:
                  </div>
                  <div className="value">350,000</div>
                </div>
                <div className="row">
                  <div className="key">
                    <i className="fas fa-language"></i> Language:
                  </div>
                  <div className="value">Nepali</div>
                </div>
                <div className="row">
                  <div className="key"><i className="fas fa-clock"></i> Time Zone:</div>
                  <div className="value">GMT+5:45</div>
                </div>
                <div className="row">
                  <div className="key">
                    <i className="fas fa-money-bill-wave"></i> Currency:
                  </div>
                  <div className="value">NPR</div>
                </div>
              </div>
            </div>

            <div className="map">
              <div id="googleMap"></div>
            </div>
          </div>
        </div>
      </section>

      <section className="attractions">
        <h2 className="section-title">
          <i className="fas fa-star"></i> Popular Attractions Nearby
        </h2>
        <div className="attractions-grid">
          <div className="attraction-card">
            <div className="attraction-image">
              <img src="./images/phewa-lake.webp" alt="Phewa Lake" />
            </div>
            <div className="attraction-info">
              <a href="location.html" className="attraction-link"
                ><h3>Phewa Lake</h3></a
              >
              <p className="distance">
                <i className="fas fa-map-marker-alt"></i> 1.2 km away
              </p>
              <p className="description">
                Beautiful freshwater lake with mountain reflections.
              </p>
              <div className="rating">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star-half-alt"></i>
                <span>4.5</span>
              </div>
            </div>
          </div>
          <div className="attraction-card">
            <div className="attraction-image">
              <img src="./images/mahendra-cave.avif" alt="Phewa Lake" />
            </div>
            <div className="attraction-info">
              <a href="location.html" className="attraction-link"
                ><h3>Mahendra Cave</h3></a
              >
              <p className="distance">
                <i className="fas fa-map-marker-alt"></i> 1.2 km away
              </p>
              <p className="description">
                Dark cave for those adventure and exploring enthusiasts.
              </p>
              <div className="rating">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star-half-alt"></i>
                <span>4.5</span>
              </div>
            </div>
          </div>
          <div className="attraction-card">
            <div className="attraction-image">
              <img
                src="./images/World Peace Pagoda.jpg"
                alt="World Peace Pagoda"
              />
            </div>
            <div className="attraction-info">
              <a href="location.html" className="attraction-link"
                ><h3>World Peace Pagoda</h3></a
              >
              <p className="distance">
                <i className="fas fa-map-marker-alt"></i> 3.5 km away
              </p>
              <p className="description">
                Buddhist stupa with panoramic views of the Himalayan range.
              </p>
              <div className="rating">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <span>4.8</span>
              </div>
            </div>
          </div>
          <div className="attraction-card">
            <div className="attraction-image">
              <img src="./images/davis falls.jpeg" alt="Davis Falls" />
            </div>
            <div className="attraction-info">
              <a href="location.html" className="attraction-link"
                ><h3>Davis Falls</h3></a
              >
              <p className="distance">
                <i className="fas fa-map-marker-alt"></i> 2.7 km away
              </p>
              <p className="description">
                Unique waterfall that flows directly into an underground tunnel.
              </p>
              <div className="rating">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="far fa-star"></i>
                <span>4.0</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="itinerary">
        <h2 className="section-title">
          <i className="fas fa-route"></i> Suggested Daily Itinerary
        </h2>
        <div className="timeline">
          <div className="timeline-item">
            <div className="time">8:00 AM</div>
            <div className="activity">
              <h3>Sunrise at Sarangkot</h3>
              <p>Witness breathtaking sunrise views of the Himalayan range</p>
              <button className="add-button">
                <i className="fas fa-plus"></i> Add to My Plan
              </button>
            </div>
          </div>
          <div className="timeline-item">
            <div className="time">10:30 AM</div>
            <div className="activity">
              <h3>Boat Tour on Phewa Lake</h3>
              <p>Enjoy a serene boat ride with mountain reflections</p>
              <button className="add-button">
                <i className="fas fa-plus"></i> Add to My Plan
              </button>
            </div>
          </div>
          <div className="timeline-item">
            <div className="time">1:00 PM</div>
            <div className="activity">
              <h3>Lunch at Lakeside</h3>
              <p>Enjoy local Nepali cuisine at a lakeside restaurant</p>
              <button className="add-button">
                <i className="fas fa-plus"></i> Add to My Plan
              </button>
            </div>
          </div>
          <div className="timeline-item">
            <div className="time">3:00 PM</div>
            <div className="activity">
              <h3>Visit Peace Pagoda</h3>
              <p>Hike to the World Peace Pagoda for panoramic views</p>
              <button className="add-button">
                <i className="fas fa-plus"></i> Add to My Plan
              </button>
            </div>
          </div>
          <div className="timeline-item">
            <div className="time">7:00 PM</div>
            <div className="activity">
              <h3>Dinner and Cultural Show</h3>
              <p>Experience traditional Nepali dance and music</p>
              <button className="add-button">
                <i className="fas fa-plus"></i> Add to My Plan
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>

    <footer>
      <div className="footer-content">
        <div className="footer-logo">
          <div className="logo">
            <i className="fas fa-globe-americas"></i> TravelBuddy
          </div>
          <p>
            Your trusted companion for authentic travel experiences around the
            world.
          </p>
        </div>
        <div className="footer-links">
          <div className="link-group">
            <h3>Company</h3>
            <ul>
              <li><a href="#">About Us</a></li>
              <li><a href="#">Careers</a></li>
              <li><a href="#">Press</a></li>
              <li><a href="#">Partners</a></li>
            </ul>
          </div>
          <div className="link-group">
            <h3>Resources</h3>
            <ul>
              <li><a href="#">Travel Guides</a></li>
              <li><a href="#">FAQs</a></li>
              <li><a href="#">Support</a></li>
              <li><a href="#">Privacy Policy</a></li>
            </ul>
          </div>
        </div>
        <div className="newsletter">
          <h3>Stay Updated</h3>
          <p>Subscribe to receive travel tips and exclusive offers</p>
          <div className="subscribe-form">
            <input type="email" placeholder="Your email address" />
            <button className="button">Subscribe</button>
          </div>
          <div className="social-icons">
            <a href="#"><i className="fab fa-facebook-f"></i></a>
            <a href="#"><i className="fab fa-twitter"></i></a>
            <a href="#"><i className="fab fa-instagram"></i></a>
            <a href="#"><i className="fab fa-pinterest"></i></a>
          </div>
        </div>
      </div>
      <div className="copyright">
        <p>&copy; 2025 TravelBuddy. All rights reserved.</p>
      </div>
    </footer>
     
    

    

      
    </>
  )
}

export default App
