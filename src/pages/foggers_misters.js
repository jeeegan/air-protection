import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import { Link } from 'gatsby'
import foggingMachine from '../assets/images/foggingMachineAlpha.png'
import officeMisterMachine from '../assets/images/officeMisterAlpha.png'

const FoggersMisters = props => (
  <Layout>
    <Helmet>
      <title>Air Protection | Foggers & Misters Products Page</title>
      <meta name="description" content="Foggers & Misters Products Page" />
    </Helmet>

    <div id="foggersMistersPage">
      <section id="one">
        <div className="inner">
          <header className="major">
            <h2>Foggers & Misters</h2>
            <br />
            <Link to="/#order" className="button next scrolly">
              Order Now
            </Link>
          </header>
          
          <p>
            Office/Room Mister - Used to disperse a low ppm solution of Dew into
            the air though a dry mist thus sanitising the air constantly. It can
            be timer & humidity set or run continuously. Ideal for receptions,
            offices, treatment rooms etc.
          </p>
          <img src={officeMisterMachine} alt="office mister machine" />
          
          <p>
            Fogging Machine - Disinfects every surface as well as cleaning the
            air itself, resulting in a hygienically clean space where bacteria,
            spores, viruses, pollen etc. have been purged from the air. Uses an
            Ultra Low Volume Nebuliser that creates micro droplets. The C100+
            ULV cold fogger has been redesigned to offer the ultimate in fogging
            performance (includes 4 Dew Ready Mix 5 L Refills).
          </p>
          <img src={foggingMachine} alt="fogging machine" />
          <p>
            All our products are eco-friendly, natural, hypoallergenic; food,
            child and pet safe.
          </p>
          <h4>
            <span>For a full list of products & pricing </span>
            <Link to="/#order" style={{ textDecoration: 'underline' }}>
              download our order form
            </Link>
          </h4>
          <br/>
          <Link to="/products" className="button next scrolly">
            View All Product Ranges
          </Link>
        </div>
      </section>
    </div>
  </Layout>
)

export default FoggersMisters
