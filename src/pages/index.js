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
                At Air Protection we recognise that a key priority for any
                organisation is looking after its biggest asset – its people
                (and its customers). It is now widely documented that
                maintaining healthy indoor air quality (IAQ) is paramount to
                ensuring our health and wellbeing. This in turn is proven to
                help minimise sick leave and maximise productivity.
                <br />
                <br />
                The challenge is of course amplified by a lack of circulating
                fresh air and inadequate ventilation; poor outdoor air quality;
                and unavoidable close contact working conditions. Then, we can
                add viruses, bacteria, pollen, dust, and other harmful airborne
                pollutants into the mix…
                <br />
                <br />
                Air Protection’s management team has a wealth of experience in
                healthcare, infection control, and commercial property
                management solutions. This puts us in a unique position to
                advise on the most appropriate and effective air monitoring,
                purification and sanitisation products to help your business
                trade more safely.
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
