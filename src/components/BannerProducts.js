import React from 'react'
import { Link } from 'gatsby'

const BannerLanding = props => (
  <section id="banner" className="style2">
    <div className="inner">
      <header className="major">
        <h1>Our Products</h1>
      </header>
      <Link to="/#order" className="button next scrolly">
        Order Now
      </Link>
    </div>
  </section>
)

export default BannerLanding
