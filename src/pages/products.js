import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import BannerProducts from '../components/BannerProducts'

const Products = (props) => (
    <Layout>
        <Helmet>
            <title>Air Protection | Products Page</title>
            <meta name="description" content="Products Page" />
        </Helmet>

        <BannerProducts />

        <div id="main">
            <section id="one">
                <div className="inner">
                    <header className="major">
                        <h2>Coming Soon...</h2>
                    </header>
                    <p>Our product page will be updated shortly.</p>
                </div>
            </section>
            
        </div>

    </Layout>
)

export default Products