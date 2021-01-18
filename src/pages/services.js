import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import BannerLanding from '../components/BannerLanding'

const Services = (props) => (
    <Layout>
        <Helmet>
            <title>Air Protection | Services Page</title>
            <meta name="description" content="Products Page" />
        </Helmet>

        <BannerLanding />

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