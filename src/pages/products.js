import React from 'react'
import { Link } from 'gatsby'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import BannerProducts from '../components/BannerProducts'
import officeMisters from '../assets/images/officeMistersAlpha.png'
import handSanitiser from '../assets/images/handSanitiser.png'
import cleanProtection from '../assets/images/cleanProtection.png'
import airPurification from '../assets/images/auraExplodedView.gif'

const Products = props => (
  <Layout>
    <Helmet>
      <title>Air Protection | Products Page</title>
      <meta name="description" content="Products Page" />
    </Helmet>

    <BannerProducts />

    <div id="products">
      <section id="airPurification">
        <div className="inner">
          <header className="major">
            <img src={airPurification} alt="air purification" />
            <h3>Air Purification & Disinfection</h3>
            <p>Smart Air Purification & Disinfection</p>
            <Link to="/air_purification" className="button next scrolly">
              More Info
            </Link>
          </header>
        </div>
      </section>
      <section id="officeMisters">
        <div className="inner">
          <header className="major">
            <img src={officeMisters} alt="office misters" />
            <h3>Office Misters</h3>
            <p>Office sanitising misters</p>
            <Link to="/office_misters" className="button next scrolly">
              More Info
            </Link>
          </header>
        </div>
      </section>
      <section id="handSanitiser">
        <div className="inner alt">
          <header className="major">
            <img src={handSanitiser} alt="hand sanitiser" />
            <h3>Hand, Air & Surface Sanitiser</h3>
            <p>Fast-acting, skin-friendly, alcohol-free, 99.995% effective</p>
            <Link to="/hand_sanitiser" className="button next scrolly">
              More Info
            </Link>
          </header>
        </div>
      </section>
      <section id="cleaningProtection">
        <div className="inner">
          <header className="major">
            <img src={cleanProtection} alt="clean protection" />
            <h3>Clean Protection</h3>
            <p>
              Eco-friendly, skin safe, multi-purpose surface cleaner, hand &
              body wash
            </p>
            <Link to="/clean_protection" className="button next scrolly">
              More Info
            </Link>
          </header>
        </div>
      </section>
    </div>
  </Layout>
)

export default Products
