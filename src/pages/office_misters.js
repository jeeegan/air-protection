import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import { Link } from 'gatsby'
import officeMisterMachine from '../assets/images/officeMisterAlpha.png'
import smartMister from '../assets/images/smartOfficeMister.png'
import refillX25L from '../assets/images/refillX25L.png'

const OfficeMisters = props => (
  <Layout>
    <Helmet>
      <title>Air Protection | Office Misters Products Page</title>
      <meta name="description" content="Office Misters Products Page" />
    </Helmet>

    <div id="officeMistersPage">
      <section>
        <div className="inner">
          <header className="major">
            <h2>Office Misters</h2>
            <br />
          </header>
          <h3>Smart Sanitising Mister</h3>
          <h4>RRP £165.83 (includes 2 x 5L refills)</h4>
          <h5>Excludes VAT @ 20%</h5>
          <img src={smartMister} alt="smart office mister machine" />
          <img src={refillX25L} alt="2 x 5L refills" />
          <p>
            This high specification Smart Sanitising Office Mister silently
            disperses a very fine, cold, dry mist of a proprietary solution of
            hypochlorous acid water (HOCl) formulated specifically to safely and
            effectively sanitise the air and surfaces within your office,
            reception, meeting room, treatment room, shop floor, etc.
          </p>
          <p>
            It provides visual, real-time, reassurance for both your colleagues
            and your customers – helping to keep the working environment healthy
            and safe.
          </p>
          <p>
            Our Smart Mister has a built-in wi-fi connection, allowing you to
            optionally control it via a free app, or it can be simply operated
            by the touch control panel.
          </p>
          <p>
            Combined with the rapid and lasting rate of disinfection of the
            circulating air and critical shared surface contact points such as
            door handles, keyboards, light switches, the Smart Mister also
            maintains your workplace at the optimal relative humidity of between
            40-60% to combat the dehydrating effect of air-conditioning and
            heating. As well as helping to prevent your skin and eyes from
            drying out, this mister also ensures that the mucous membranes
            within your respiratory tract don’t dry out, which in turn, aids
            clearance of dust, bacteria, viruses, and other harmful airborne
            contaminants.
          </p>
          <p>
            Only use with our Mist HOCL to ensure: 99.995% efficacy against
            airborne and surface bacteria, viruses and fungi; rapid disinfection
            rate; hypoallergenic; neutralise odours; non-corrosive; non-
            staining; non-toxic; environmentally friendly.
          </p>
          <h4>Features:</h4>
          <ul>
            <li>Wall-mounted or free-standing (comes with fixings)</li>
            <li>3 levels of mist control (max mist output 230 ml/h)</li>
            <li>Manual Timer Function – 10 mins on, 20 mins off</li>
            <li>Low/empty solution notification & auto-power off</li>
            <li>Relative humidity display</li>
            <li>2L Capacity tank</li>
            <li>3M Cable length</li>
            <li>WiFi & App function</li>
            <li>Automatic schedule (controlled via app)</li>
            <li>Suitable for use in rooms up to 600 ft2 (55 m2)</li>
            <li>Dimensions: 242 mm (h) x 242 mm (l) x 110 mm (d)</li>
            <li>Weight: 1.1 kg (net)</li>
          </ul>
          <div className="break"></div>
          <Link to="/pricing" className="button next scrolly">
            Pricing
          </Link>
        </div>
      </section>
    </div>
  </Layout>
)

export default OfficeMisters
