import React from 'react'
import { Link } from 'gatsby'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import Banner from '../components/Banner'

import pic01 from '../assets/images/pic01.jpg'
import pic02 from '../assets/images/pic02.jpg'
import pic03 from '../assets/images/pic03.jpg'
import pic04 from '../assets/images/pic04.jpg'

class HomeIndex extends React.Component {
    render() {

        return (
            <Layout>
                <Helmet
                    title="Air Protection | Homepage"
                    meta={[
                        { name: 'description', content: 'Air Protection eco-friendly cleaning products' },
                        { name: 'keywords', content: 'hygiene, covid-19, coronavirus, ppe, cleaning, disinfectant' },
                    ]}
                >
                </Helmet>

                <Banner />

                <div id="main">
                    <section id="one" className="tiles">
                        <article style={{backgroundImage: `url(${pic02})`}}>
                            <header className="major">
                                <h3>Air Protection</h3>
                                <p>Disinfecting dry-mister & fogging machines</p>
                            </header>
                            <Link to="/products" className="link primary"></Link>
                        </article>
                        <article style={{backgroundImage: `url(${pic01})`}}>
                            <header className="major">
                                <h3>Disinfect</h3>
                                <p>Fast-acting surface, air & hand sanitiserss</p>
                            </header>
                            <Link to="/products" className="link primary"></Link>
                        </article>
                        <article style={{backgroundImage: `url(${pic02})`}}>
                            <header className="major">
                                <h3>Our Services</h3>
                                <p>Fast-acting, skin-friendly hand sanitiser</p>
                            </header>
                            <Link to="/services" className="link primary"></Link>
                        </article>
                        <article style={{backgroundImage: `url(${pic04})`}}>
                            <header className="major">
                                <h3>Superclean</h3>
                                <p>Eco-friendly multi-purpose cleaner</p>
                            </header>
                            <Link to="/products" className="link primary"></Link>
                        </article>
                    </section>
                    <section id="two">
                        <div className="inner">
                            <header className="major">
                                <h2 id="about">About Us</h2>
                            </header>
                            <p>Air Protection was founded to give peace of mind in challenging times. Our products help your company keep a clean and safe workplace. We pride ourselves on working with our customers as true partners to develop a bespoke solution for every space. Our management team has a long history in commercial property management and healthcare solutions, putting us in a unique position to help your business trade safely.<br />Air Protection is a trading name of C.W. Cameron Ltd - trusted in Scotland for over 70 years.</p>
                            <ul className="actions">
                                <li><Link to="/products" className="button next">Our Products</Link></li>
                            </ul>
                        </div>
                    </section>
                </div>

            </Layout>
        )
    }
}

export default HomeIndex