import React from 'react'
import { Link } from 'gatsby'

const BannerLanding = props => (
  <section id="banner" className="major">
    <div className="inner">
      <header className="major">
        <h1>Our Products</h1>
      </header>
      <div className="content">
        <p>
          We provide eco-friendly air, surface & hand sanitisers to protect your
          workplace, your people & customers.
          <br />
        </p>
        {/* <ul className="actions">
          <li>
          <Link to="/#order" className="button next scrolly">
        Order Now
      </Link>
          </li>
        </ul> */}
      </div>
    </div>
  </section>
)

export default BannerLanding
