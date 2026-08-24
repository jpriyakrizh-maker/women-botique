import './App.css';

import boutiqueHero from './assets/img1.jpg';
import dress from './assets/img2.jpg';
import kurti from './assets/img3.jpg';
import saree from './assets/img4.jpg';
import aboutBoutique from './assets/img5.jpg';

function App() {
  return (
    <div className="app">

      <nav className="navbar">
        <div className="logo">
          LAVENDER <span>BOUTIQUE</span>
        </div>

        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#collection">Collection</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>


      <section className="hero" id="home">

        <div className="hero-content">
          <p className="small-title">WELCOME TO LAVENDER</p>

          <h1>
            Elegance
            <br />
            Meets Style
          </h1>

          <p>
            Discover beautiful women's fashion designed
            to make every moment special.
          </p>

          <a href="#collection" className="hero-btn">
            Explore Collection
          </a>
        </div>

        <div className="hero-image">
          <img src={boutiqueHero} alt="Lavender Boutique" />
        </div>

      </section>


      <section className="collection" id="collection">

        <div className="section-heading">
          <p>OUR COLLECTION</p>
          <h2>Style For Every Occasion</h2>
          <span>
            Discover our beautiful collection of women's fashion.
          </span>
        </div>

        <div className="products">

          <div className="product-card">
            <div className="product-image">
              <img src={dress} alt="Elegant Dress" />
            </div>

            <div className="product-info">
              <h3>Elegant Dress</h3>
              <p>Beautiful and comfortable dresses for every occasion.</p>
              <h4>₹1,499</h4>
              <button>Shop Now</button>
            </div>
          </div>


          <div className="product-card">
            <div className="product-image">
              <img src={kurti} alt="Designer Kurti" />
            </div>

            <div className="product-info">
              <h3>Designer Kurti</h3>
              <p>Trendy kurtis with elegant designs and comfort.</p>
              <h4>₹999</h4>
              <button>Shop Now</button>
            </div>
          </div>


          <div className="product-card">
            <div className="product-image">
              <img src={saree} alt="Designer Saree" />
            </div>

            <div className="product-info">
              <h3>Designer Saree</h3>
              <p>Graceful sarees perfect for special occasions.</p>
              <h4>₹1,999</h4>
              <button>Shop Now</button>
            </div>
          </div>

        </div>
      </section>


      <section className="about" id="about">

        <div className="about-image">
          <img src={aboutBoutique} alt="About Lavender Boutique" />
        </div>

        <div className="about-content">
          <p className="about-title">ABOUT US</p>

          <h2>
            Fashion That Makes
            <br />
            You Feel Beautiful
          </h2>

          <p>
            Lavender Boutique is a women's fashion destination
            bringing together elegant designs, modern trends
            and comfortable styles.
          </p>

          <p>
            From beautiful dresses and stylish kurtis to
            elegant sarees, we have something special for
            every woman and every occasion.
          </p>

          <button>Discover More</button>
        </div>

      </section>


      <section className="features">

        <div className="section-heading">
          <p>WHY LAVENDER</p>
          <h2>Made For You</h2>
        </div>

        <div className="feature-container">

          <div className="feature">
            <div className="feature-icon">✦</div>
            <h3>Elegant Designs</h3>
            <p>
              Beautiful designs created for a stylish look.
            </p>
          </div>

          <div className="feature">
            <div className="feature-icon">♡</div>
            <h3>Quality Fashion</h3>
            <p>
              Comfortable and quality outfits for every day.
            </p>
          </div>

          <div className="feature">
            <div className="feature-icon">✧</div>
            <h3>Perfect Style</h3>
            <p>
              Fashion choices that match your unique personality.
            </p>
          </div>

        </div>

      </section>


      <section className="contact" id="contact">

        <p>GET IN TOUCH</p>

        <h2>
          Let's Find Your
          <br />
          Perfect Style
        </h2>

        <p className="contact-text">
          Visit Lavender Boutique and explore our latest
          women's fashion collection.
        </p>

        <a href="tel:6379974626" className="contact-btn">
          Call Us: 6379974626
        </a>

      </section>


      <footer>

        <div className="footer-logo">
          LAVENDER <span>BOUTIQUE</span>
        </div>

        <p>
          Fashion • Elegance • Confidence
        </p>

        <div className="footer-links">
          <a href="#home">Home</a>
          <a href="#collection">Collection</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </div>

        <div className="footer-line"></div>

        <p className="copyright">
          © 2026 Lavender Boutique. All Rights Reserved.
        </p>

      </footer>

    </div>
  );
}

export default App;