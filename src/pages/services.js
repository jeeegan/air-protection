import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import BannerServices from '../components/BannerServices'
import { Link } from 'gatsby'

const Services = props => (
  <Layout>
    <Helmet>
      <title>Air Protection | Services Page</title>
      <meta name="description" content="Services Page" />
    </Helmet>

    <BannerServices />

    <div id="main">
      <section id="one">
        <div className="inner">
          <header className="major">
            <h2>Getting Back to the Workplace</h2>
          </header>
          <p>
            In these uncertain times we stand ready help you get your team back
            to the workplace. We can partner with you to provide one-off fogging
            disinfectent services, as well as providing site specific
            recommendations on infection control solutions.{' '}
            <Link to="#contact">Get in touch</Link> today to see how we can help
            your business.
          </p>
          <p>Benefits of our products include:</p>
          <li>
            Protects against colds & flu, 99.995% effective against bacteria,
            viruses & fungi
          </li>
          <li>Does not contain any harsh or toxic chemicals</li>
          <li>FREE FROM alcohol, aldehydes, parabens, dyes and scents</li>
          <li>Hypoallergenic, is non-irritant and non-staining</li>
          <li>pH skin compatible, so kind to skin</li>
          <li>Rapid disinfection</li>
        </div>
      </section>
    </div>
  </Layout>
)

export default Services
