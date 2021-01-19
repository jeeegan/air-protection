import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import { Link } from 'gatsby'
import supercleanImg from '../assets/images/SupercleanPack2_1296xAlpha.png'

const Superclean = props => (
  <Layout>
    <Helmet>
      <title>Air Protection | Superclean Products Page</title>
      <meta name="description" content="Superclean Products Page" />
    </Helmet>

    <div id="supercleanPage">
      <section id="one">
        <div className="inner">
          <header className="major">
            <img src={supercleanImg} alt="superclean products" />
            <h2>Superclean Products</h2>
            <Link to="/#order" className="button next scrolly">
              Order Now
            </Link>
          </header>
          <p>
            The Superclean range includes foams, sprays and ready-mix refills.
            Ready Mix Refill will refill Dew Superclean, and Dew Foam. It adds
            up to a kinder way of cleaning. Save money while helping our
            environment with carbon savings.
          </p>
          <p>
            Dew Superclean is an eco-friendly, natural multi- surface,
            low-streak cleaner and degreaser providing excellent performance for
            all cleaning challenges. Utilising electrolysed water; safer to use,
            kinder to your skin and kinder to the environment, Dew Superclean
            provides excellent performance for all cleaning challenges. It is
            100% Biodegradable, free from harsh chemicals, hypoallergenic,
            non-irritant and non-staining. Perfect for stainless steel,
            anti-fogging on glass, cleaning of surfaces in the house or the car.
          </p>
          <h4>
            <Link to="/#order">
              For a full list of products & pricing in the Superclean range
              download our order form
            </Link>
          </h4>
        </div>
      </section>
    </div>
  </Layout>
)

export default Superclean
