import React from 'react'
import { Link } from 'gatsby'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import HomepageBanner from '../components/HomepageBanner'

import cleanProtection from '../assets/images/cleanProtection.png'
import officeMisters from '../assets/images/officeMistersAlpha.png'
import handSanitiser from '../assets/images/handSanitiser.png'
import auraExplodedView from '../assets/images/auraExplodedView.gif'

class HomeIndex extends React.Component {
  render() {
    return (
      <Layout>
        <Helmet
          title="Air Protection | Homepage"
          meta={[
            {
              name: 'description',
              content: 'Air Protection - Protecting your environment.',
            },
            {
              name: 'keywords',
              content:
                'hygiene, covid-19, coronavirus, ppe, cleaning, disinfectant',
            },
          ]}
        ></Helmet>

        <HomepageBanner />

        <div id="main">
          <section id="one" className="tiles">
            <article style={{ backgroundImage: `url(${officeMisters})` }}>
              <header className="major">
                <h3>Office Misters</h3>
                <p>Office sanitising misters</p>
              </header>
              <Link to="/office_misters" className="link primary"></Link>
            </article>
            <article style={{ backgroundImage: `url(${auraExplodedView})` }}>
              <header className="major">
                <h3>Air Purification & Disinfection</h3>
                <p>Smart air purification & disinfection</p>
              </header>
              <Link to="/air_purification" className="link primary"></Link>
            </article>
            <article style={{ backgroundImage: `url(${cleanProtection})` }}>
              <header className="major">
                <h3>Clean Protection</h3>
                <p>
                  Eco-friendly, skin safe, multi-purpose surface cleaner, hand &
                  body wash
                </p>
              </header>
              <Link to="/clean_protection" className="link primary" />
            </article>
            <article style={{ backgroundImage: `url(${handSanitiser})` }}>
              <header className="major">
                <h3>Hand, Air & Surface Sanitiser</h3>
                <p>
                  Fast-acting, skin-friendly, alcohol-free, 99.995% effective
                </p>
              </header>
              <Link to="/hand_sanitiser" className="link primary"></Link>
            </article>
          </section>
          <section id="about">
            <div className="inner">
              <header className="major">
                <h2>About Us</h2>
              </header>
              <p>
                Air Protection was founded to give peace of mind in challenging
                times. Our products help your company ensure a clean and safe
                workplace. As part of our offering, we have been appointed as a
                Distributor of DEW Products, manufactured to the highest quality
                by Ecoanolytes Limited, and comply with the relevant EU
                standards for biocides. We pride ourselves on working with our
                customers as true partners to develop a bespoke solution for
                every space. Our management team has a long history in
                commercial property management and healthcare solutions, putting
                us in a unique position to help your business trade safely.
                <br />
                <br />
                Air Protection is a trading name of C.W. Cameron Ltd - trusted
                for over 70 years.
              </p>
              <ul className="actions">
                <li>
                  <Link to="/products" className="button next">
                    Our Products
                  </Link>
                </li>
              </ul>
            </div>
          </section>
        </div>
      </Layout>
    )
  }
}

export default HomeIndex
