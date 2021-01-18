import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import BannerProducts from '../components/BannerProducts'
import officeMister from '../assets/images/officeMisterAlpha.png'
import disinfectPack from '../assets/images/DisinfectPack2_1296xAlpha.png'
import supercleanPack from '../assets/images/SupercleanPack2_1296xAlpha.png'
import { Link } from 'gatsby'

const Products = props => (
  <Layout>
    <Helmet>
      <title>Air Protection | Products Page</title>
      <meta name="description" content="Products Page" />
    </Helmet>

    <BannerProducts />

    <div id="products">
      <section id="airProtection">
        <div className="inner">
          <header className="major">
              <img src={officeMister} alt="office mister"/>
            <h3>Air Protection</h3>
            <p>Disinfecting dry-mister & fogging machines</p>
          </header>
          <p>Our product page will be updated shortly.</p>

            <a href="/airprotection" className="button next scrolly">
              Air Protection Products
            </a>

        </div>

      </section>
      <section id="disinfect">
        <div className="inner alt">
          <header className="major">
              <img src={disinfectPack} alt="disinfect pack"/>
            <h3>Disinfect</h3>
            <p>Fast-acting surface, air & hand sanitiserss</p>
          </header>
          <p>Our product page will be updated shortly.</p>
          <a href="/disinfect" className="button next scrolly">
              Disinfect Products
            </a>
        </div>
      </section>
      <section id="superclean">
        <div className="inner">
          <header className="major">
              <img src={supercleanPack} alt="superclean pack"/>
            <h3>Superclean</h3>
            <p>Eco-friendly multi-purpose cleaner</p>
          </header>
          <p>Our product page will be updated shortly.</p>
          <a href="/superclean" className="button next scrolly">
              Superclean Products
            </a>
        </div>
      </section>
    </div>
  </Layout>
)

export default Products
