import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import { Link } from 'gatsby'

const Disinfect = props => (
  <Layout>
    <Helmet>
      <title>Air Protection | Disinfect Products Page</title>
      <meta name="description" content="Disinfect Products Page" />
    </Helmet>

    <div id="main">
      <section id="one">
        <div className="inner">
          <header className="major">
            <h2>Disinfect Products</h2>
            <Link to="/#order" className="button next scrolly">
              Order Now
            </Link>
          </header>
          <p>Our Disinfect products page will be updated shortly.</p>
        </div>
      </section>
    </div>
  </Layout>
)

export default Disinfect
