import React from 'react'
import { Link } from 'gatsby'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import BannerProducts from '../components/BannerProducts'
import foggerMister from '../assets/images/foggerMisterAlpha.png'
import handSanitiser from '../assets/images/handSanitiser.png'
import cleanProtection from '../assets/images/cleanProtection.png'

const Products = props => (
  <Layout>
    <Helmet>
      <title>Air Protection | Products Page</title>
      <meta name="description" content="Products Page" />
    </Helmet>

    <BannerProducts />

    <div id="products">
      <section id="foggersMisters">
        <div className="inner">
          <header className="major">
            <img src={foggerMister} alt="office misters and foggers" />
            <h3>Foggers & Misters</h3>
            <p>Disinfecting dry-mister & office fogging machines</p>
            <Link to="/foggers_misters" className="button next scrolly">
              More Info
            </Link>
          </header>
        </div>
      </section>
      <section id="handSanitiser">
        <div className="inner alt">
          <header className="major">
            <img src={handSanitiser} alt="hand sanitiser" />
            <h3>Hand Sanitiser & Disinfectant</h3>
            <p>Fast-acting, skin-friendly, alcohol-free hand sanitiser and disinfectant</p>
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
            <p>Eco-friendly, skin safe, multi-purpose surface cleaner, hand & body wash</p>
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
