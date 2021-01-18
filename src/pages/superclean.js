import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import { Link } from 'gatsby'

const Superclean = props => (
  <Layout>
    <Helmet>
      <title>Air Protection | Superclean Products Page</title>
      <meta name="description" content="Superclean Products Page" />
    </Helmet>

    <div id="main">
      <section id="one">
        <div className="inner">
          <header className="major">
            <h2>Superclean Products</h2>
            <Link to="/#order" className="button next scrolly">Order Now</Link>
          </header>
          <p>Our Superclean products page will be updated shortly.</p>
        </div>
      </section>
    </div>
  </Layout>
)

export default Superclean
