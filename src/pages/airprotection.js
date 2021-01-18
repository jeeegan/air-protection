import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import { Link } from 'gatsby'

const AirProtection = props => (
  <Layout>
    <Helmet>
      <title>Air Protection | Air Protection Products Page</title>
      <meta name="description" content="Air Protection Products Page" />
    </Helmet>

    <div id="main">
      <section id="one">
        <div className="inner">
          <header className="major">
            <h2>Air Protection Products</h2>
            <Link to="/#order" className="button next scrolly">
              Order Now
            </Link>
          </header>
          <p>Our Air Protection products page will be updated shortly.</p>
        </div>
      </section>
    </div>
  </Layout>
)

export default AirProtection
