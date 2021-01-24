import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import { Link } from 'gatsby'
import cleanProtection from '../assets/images/cleanProtection.png'

const CleanProtection = props => (
  <Layout>
    <Helmet>
      <title>Air Protection | Clean Protection Products Page</title>
      <meta name="description" content="Clean Protection Products Page" />
    </Helmet>

    <div id="cleanProtectionPage">
      <section id="one">
        <div className="inner">
          <header className="major">
            <img src={cleanProtection} alt="clean protection products" />
            <h2>Clean Protection Products</h2>
            <Link to="/#order" className="button next scrolly">
              Order Now
            </Link>
          </header>
          <p>
            The Clean Protection range includes foams, sprays and ready-mix
            refills. It adds up to a kinder way of cleaning. Save money while
            helping our environment with carbon savings.
          </p>
          <p>
            Dew Superclean is an eco-friendly, natural, multi- surface,
            low-streak cleaner and degreaser. It provides excellent performance
            for all cleaning challenges. Utilising electrolysed water it is
            safer to use, kinder to your skin and kinder to the environment. Dew
            Superclean provides excellent performance for all cleaning
            challenges while being 100% Biodegradable, free from harsh
            chemicals, hypoallergenic, non-irritant and non-staining. Perfect
            for stainless steel, anti-fogging on glass, cleaning of surfaces in
            the house or the car.
          </p>
          <p>
            DEW Air - Supplied in a specially designed trigger spray nebuliser
            that generates a super-fine spray without the use of an aerosol. For
            immediate use, providing rapid relief for allergy and hay-fever
            suffers.
          </p>
          <h4>
            <span>For a full list of products & pricing </span>
            <Link to="/#order" style={{ textDecoration: 'underline' }}>
              download our order form
            </Link>
          </h4>
          <br />
          <Link to="/products" className="button next scrolly">
            View All Product Ranges
          </Link>
        </div>
      </section>
    </div>
  </Layout>
)

export default CleanProtection
