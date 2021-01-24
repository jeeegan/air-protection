import React from 'react'
import { Link } from 'gatsby'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import HomepageBanner from '../components/HomepageBanner'

import disinfectPack from '../assets/images/DisinfectPack2_1296x.png'
import officeMister from '../assets/images/officeMister.jpg'
import foggingMachine from '../assets/images/foggingMachine.jpg'
import supercleanPack from '../assets/images/SupercleanPack2_1296x.png'

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
            <article style={{ backgroundImage: `url(${foggingMachine})` }}>
              <header className="major">
                <h3>Our Services</h3>
                <p>
                  Fogging decontamination service, site safety assessment &
                  installlation
                </p>
              </header>
              <Link to="/services" className="link primary"></Link>
            </article>
            <article style={{ backgroundImage: `url(${officeMister})` }}>
              <header className="major">
                <h3>Foggers & Misters</h3>
                <p>Disinfecting dry-mister & office fogging machines</p>
              </header>
              <Link to="/foggers_misters" className="link primary"></Link>
            </article>
            <article style={{ backgroundImage: `url(${disinfectPack})` }}>
              <header className="major">
                <h3>Hand Sanitiser</h3>
                <p>Fast-acting, skin-friendly, alcohol-free hand sanitiser</p>
              </header>
              <Link to="/hand_sanitiser" className="link primary"></Link>
            </article>
            <article style={{ backgroundImage: `url(${supercleanPack})` }}>
              <header className="major">
                <h3>Clean Protection</h3>
                <p>Eco-friendly multi-purpose surface cleaners</p>
              </header>
              <Link to="/clean_protection" className="link primary" />
            </article>
          </section>
          <section id="order" className="order">
            <div className="inner">
              <header className="major">
                <h2>Order</h2>
              </header>
              <p>
                To place an order simply download our order form below and send
                it to us via our <a href="#contact">contact form</a>. Volume and
                contract pricing are available, please{' '}
                <a href="#contact">contact us</a> for a quote.
              </p>
              <ul className="actions">
                <li>
                  <a
                    href={`https://drive.google.com/file/d/1NieKEwpaglUEHHmpZe5wras9USeKtbJs/view?usp=sharing`}
                    target="_blank"
                    rel="noreferrer"
                    download
                    className="button"
                  >
                    Order Form Download
                  </a>
                </li>
              </ul>
            </div>
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
