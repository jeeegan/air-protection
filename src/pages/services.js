import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import BannerServices from '../components/BannerServices'
import { Link } from 'gatsby'
import foggerMister from '../assets/images/foggerMisterAlpha.png'

const Services = props => (
  <Layout>
    <Helmet>
      <title>Air Protection | Services Page</title>
      <meta name="description" content="Services Page" />
    </Helmet>

    <BannerServices />

    <div id="servicesPage">
      <section>
        <div className="inner">
          <header className="major">
            <h2>Getting Back to the Workplace</h2>
          </header>

          <p>
            In these uncertain times we stand ready to help you get your team
            back to the workplace. We can partner with you to provide one-off
            fogging disinfection services, as well as providing site specific
            recommendations on infection control solutions.{' '}
            <Link to="#contact">Get in touch</Link> today to see how we can help
            your business.
          </p>
          <p>Benefits of our products include:</p>
          <div className="break"></div>
          <ul>
            <li>
              Protects against colds & flu, 99.995% effective against bacteria,
              viruses & fungi
            </li>
            <li>Does not contain any harsh or toxic chemicals</li>
            <li>Free from: alcohol, aldehydes, parabens, dyes and scents</li>
            <li>Hypoallergenic, non-irritant and non-staining</li>
            <li>pH skin compatible, kind to skin</li>
            <li>Rapid disinfection</li>
          </ul>
          <div className="break"></div>
          <div>
            <img src={foggerMister} alt="fogging machine" />
          </div>
        </div>
      </section>
    </div>
  </Layout>
)

export default Services
