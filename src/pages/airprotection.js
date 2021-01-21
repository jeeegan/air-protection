import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import { Link } from 'gatsby'
import airprotectionImg from '../assets/images/airprotectionAlpha.png'

const AirProtection = props => (
  <Layout>
    <Helmet>
      <title>Air Protection | Air Protection Products Page</title>
      <meta name="description" content="Air Protection Products Page" />
    </Helmet>

    <div id="airprotectionPage">
      <section id="one">
        <div className="inner">
          <header className="major">
            <img src={airprotectionImg} alt="airprotection products" />
            <h2>Air Protection Products</h2>
            <Link to="/#order" className="button next scrolly">
              Order Now
            </Link>
          </header>
          <p>
            Our room mister is It is ideal for receptions, offices, treatment
            rooms or just in your home. It is compact, yet powerful and it's
            stylish design will blend in with your existing decor.
          </p>
          <p>
            Our office fogging machine disinfects every surface as well as
            cleaning the air itself, resulting in a hygienically clean space
            where bacteria, spores, viruses, pollen etc. have been purged from
            the air.
          </p>
          <p>For complete Air Protection we offer the following products:</p>

          <p>
            DEW Air - Supplied in a specially designed trigger spray nebuliser
            that generates a super-fine spray without the use of an aerosol. For
            immediate use, providing rapid relief for allergy and hay-fever
            suffers.
          </p>
          <p>
            Office/Room Mister - Ideal for dispersing a low ppm solution of Dew
            into the air though a dry mist thus sanitising the air constantly.
            It can be timer & humidity set or run constantly.
          </p>
          <p>
            Fogging Machine - Uses an Ultra Low Volume Nebuliser that creates
            micro droplets. The C100+ ULV cold fogger has been redesigned to
            offer the ultimate in fogging performance (includes 4 Dew Ready Mix
            5 L Refills). All our products are eco-friendly, natural,
            hypoallergenic; food, child and pet safe.
          </p>
          <h4>
            <Link to="/#order">
              For a full list of products & pricing in the Air Protection range
              download our order form
            </Link>
          </h4>
        </div>
      </section>
    </div>
  </Layout>
)

export default AirProtection
