import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import { Link } from 'gatsby'
import cleanProtection from '../assets/images/cleanProtection.png'
import supercleanRefill5L20L from '../assets/images/supercleanRefill5L20L.png'
import dewSupercleanAlpha from '../assets/images/dewSupercleanAlpha.png'
import dewFoamAlpha from '../assets/images/dewFoamAlpha.png'

const CleanProtection = props => (
  <Layout>
    <Helmet>
      <title>Air Protection | Clean Protection Products Page</title>
      <meta name="description" content="Clean Protection Products Page" />
    </Helmet>

    <div id="cleanProtectionPage">
      <section>
        <div className="inner" style={{ alignItems: 'flex-start' }}>
          <header className="major">
            <img src={cleanProtection} alt="clean protection products" />
            <h2>Clean Protection Products</h2>
            {/* <Link to="/#order" className="button next scrolly">
              Order Now
            </Link> */}
          </header>
          <p>
            The Clean Protection range of products utilises DEW Superclean - an
            eco-friendly, skin-safe, multi-purpose, cost-effective, low-streak
            cleaner and degreaser. Utilising electrolysed water, it is safer to
            use for all cleaning challenges whilst being 100% biodegradable,
            free from harsh chemicals, hypoallergenic, non-irritant, and
            non-staining. It includes a skin-friendly, hand/body foam wash, a
            multi-purpose, deep-cleaning surface spray, and Superclean Readymix
            refills.
          </p>
          <img
            src={dewSupercleanAlpha}
            className="small-img"
            alt="500ml dew superclean"
          />
          <div className="break"></div>
          <h3>DEW Superclean</h3>
          <div className="break"></div>
          <h4>RRP £4.99</h4>
          <div className="break"></div>
          <h5>Includes VAT @ 20%</h5>
          <div className="break"></div>
          <p>
            Available in a 500ml refillable spray dispenser, it provides
            excellent deep-cleaning and de-greasing performance. It is
            particularly effective with stainless steel and chrome
            surfaces/appliances, glass and mirrors; for deep cleaning of desks,
            worktops, and other surfaces throughout the office, house, kitchen,
            canteen, toilets, or even for washing the car.
          </p>
          <img src={dewFoamAlpha} className="small-img" alt="200ml dew foam" />
          <div className="break"></div>
          <h3>DEW Foam Hand & Body Wash</h3>
          <div className="break"></div>
          <h4>RRP £4.49</h4>
          <div className="break"></div>
          <h5>Includes VAT @ 20%</h5>
          <div className="break"></div>
          <p>
            Available in a 200ml refillable pump dispenser, it is a very
            effective and yet very gentle hand and body wash. It is non-scented,
            hypoallergenic, and ideal for both sensitive skin and oily skin.
          </p>
          <img
            src={supercleanRefill5L20L}
            className="small-img"
            alt="5l 20l refills"
          />
          <div className="break"></div>
          <h3>DEW Superclean Readymix Refills</h3>
          <div className="break"></div>
          <h4>RRP from £14</h4>
          <div className="break"></div>
          <h5>Includes VAT @ 20%</h5>
          <div className="break"></div>
          <p>
            Available in 5L, 10L & 20 L bottles, to conveniently refill your DEW
            Superclean Surface Spray and DEW Foam Hand & Body Wash. 10L and 20L
            bottles come with a tap dispenser, the 5L bottle comes with a screw
            cap.
          </p>
          <div className="break"></div>
          <Link to="/pricing" className="button next scrolly">
            Pricing
          </Link>
        </div>
      </section>
    </div>
  </Layout>
)

export default CleanProtection
