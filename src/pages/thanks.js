import React from 'react'
import Layout from '../components/layout'

const NotFoundPage = () => (
  <Layout>
    <div id="main" className="alt">
        <section id="one">
            <div className="inner">
                <h1>Thank You!</h1>
                <p>We've received your message, we will be in touch shortly.</p>
                <a href="/" className="button next scrolly">Homepage</a>
            </div>
        </section>
    </div>
  </Layout>
)

export default NotFoundPage
