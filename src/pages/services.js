import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import BannerServices from '../components/BannerServices'

const Services = (props) => (
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
                        <h2>Coming Soon...</h2>
                    </header>
                    <p>Our services page will be updated shortly.</p>
                </div>
            </section>
            
        </div>

    </Layout>
)

export default Services