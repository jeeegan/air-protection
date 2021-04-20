import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import { Link } from 'gatsby'
import handSanitiser from '../assets/images/handSanitiser.png'
import dewHandSanitiserAlpha from '../assets/images/dewHandSanitiserAlpha.png'
import dewAirAlpha from '../assets/images/dewAirAlpha.png'
import dewDisinfectAlpha from '../assets/images/dewDisinfectAlpha.png'
import dewReadymixAlpha from '../assets/images/dewReadymixAlpha.png'

const HandSanitiser = props => (
  <Layout>
    <Helmet>
      <title>
        Air Protection | Hand, Air & Surface Sanitiser Products Page
      </title>
      <meta
        name="description"
        content="Hand, Air & Surface Sanitiser Products Page"
      />
    </Helmet>

    <div id="handSanitiserPage">
      <section>
        <div className="inner" style={{ alignItems: 'flex-start' }}>
          <header className="major">
            <img
              src={handSanitiser}
              alt="Hand, Air & Surface Sanitiser products"
            />
            <h2>Hand, Air & Surface Sanitiser</h2>
            {/* <Link to="/#order" className="button next scrolly">
              Order Now
            </Link> */}
          </header>
          <p>
            DEW Disinfect is a new range of fast acting, non-toxic, and highly
            effective hand, air and surface sanitisation products. It is
            available in refillable bottles, sprays, and dispensers. Made with
            electrolysed water and a small concentration (&#60;0.026%) of the
            active active ingredient, Hypochlorous Acid (HOCl) - part of the
            human/animal natural immune response, making it safe for a wide
            range of uses. It offers the highest grade in multi-spectrum
            disinfection for your hands and any surface on which it falls.
            Additionally it deodorizes and suppresses other allergens it comes
            into contact with, but importantly, does NOT promote resistance in
            bacteria and viruses.
          </p>
          <p>
            Promoting the highest standard in environmental care, it is a
            no-rinse, multi-surface general disinfectant and deodorizer that is
            pH-neutral, and contains no toxic chemicals.
          </p>
          <ul>
            <li>Kills 99.995% of bacteria, viruses, fungi and spores - fast</li>
            <li>Non-toxic disinfectant & deodorizer</li>
            <li>Free of alcohol, aldehydes, dyes & scents, non-staining</li>
            <li>Hypoallergenic & non-irritant</li>
            <li>Provides rapid relief for allergy and hay-fever suffers</li>
            <li>Leaves no residue</li>
            <li>pH neutral / skin friendly</li>
            <li>Cost & time effective with immediate disinfection</li>
          </ul>
          <div className="break"></div>
          <img
            src={dewHandSanitiserAlpha}
            alt="65ml hand sanitiser"
            style={{ width: '50%' }}
          />
          <div className="break"></div>
          <h3>DEW Hand Sanitiser</h3>
          <div className="break"></div>
          <h4>RRP from £2.91</h4>
          <div className="break"></div>
          <h5>Excludes VAT @ 20%</h5>
          <div className="break"></div>
          <p>
            Available in 65ml pocket sized, 500ml refillable spray bottles, and
            1L refil pouches wall-mounted dispensers.
          </p>
          <div className="break"></div>
          <img
            src={dewAirAlpha}
            alt="185ml dew air spray"
            style={{ width: '50%' }}
          />
          <div className="break"></div>
          <h3>DEW Air</h3>
          <div className="break"></div>
          <h4>RRP £5.83</h4>
          <div className="break"></div>
          <h5>Excludes VAT @ 20%</h5>
          <div className="break"></div>
          <p>
            Supplied in a specially designed refillable 185ml trigger spray
            atomiser that generates a super-fine spray to sanitise and deoderise
            the air, without the use of an aerosol.
          </p>
          <div className="break"></div>
          <img
            src={dewDisinfectAlpha}
            alt="500ml dew disinfect spray bottle"
            style={{ width: '50%' }}
          />
          <div className="break"></div>
          <h3>DEW Disinfect Surface Spray</h3>
          <div className="break"></div>
          <h4>RRP £4.16</h4>
          <div className="break"></div>
          <h5>Excludes VAT @ 20%</h5>
          <div className="break"></div>
          <p>
            Supplied in a refillable 500ml spray bottle, it is a no-rinse,
            multi-surface, food-safe, non-toxic surface sanitiser.
          </p>
          <div className="break"></div>
          <img
            src={dewReadymixAlpha}
            alt="5l dew readymix refil"
            style={{ width: '50%' }}
          />
          <div className="break"></div>
          <h3>DEW Disinfect Readymix Refills</h3>
          <div className="break"></div>
          <h4>RRP from £11.67</h4>
          <div className="break"></div>
          <h5>Excludes VAT @ 20%</h5>
          <div className="break"></div>
          <p>
            Available in 5L, 10L & 20 L bottles, to conveniently refill Dew Hand
            Sanitiser, DEW Air, and DEW Disinfect Surface Spray. 10L and 20L
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

export default HandSanitiser
