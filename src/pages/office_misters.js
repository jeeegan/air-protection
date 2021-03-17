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
          <h3>Office Sanitising Smart Mister</h3>
          <h4>RRP £199 (includes 2 x 5L refills)</h4>
          <h5>Includes VAT @ 20%</h5>
          <img src={smartMister} alt="smart office mister machine" />
          <img src={refillX25L} alt="2 x 5L refills" />
          <p>
            This high specification Ultrasonic Sanitising Smart Mister silently
            disperses a very fine mist of DEW Disinfect to sanitise and purify
            the air and surfaces within your office, reception, meeting room,
            treatment room, shop floor, etc. It provides a visual sense of
            proactively protecting your people and your customers - keeping your
            working environment healthy and safe.
          </p>
          <p>
            Our new Smart Mister has a built-in wi-fi connection, allowing you
            to control it via free smartphone app.
          </p>
          <p>
            Combined with the rapid and lasting rate of disinfection of the
            circulating air and critical shared surface contact points such as
            door handles, key-boards, light switches, the Office Mister also
            maintains your workplace at the optimal relative humidity of between
            40-60% to combat the dehydrating effect of air-conditioning and
            heating. As well as helping to prevent your skin and eyes from
            drying out, this mister also ensures that the mucous membranes
            within your respiratory tract don’t dry out, which in turn, aids
            clearance of dust, bacteria, viruses, and other harmful airborne
            contaminants.
          </p>
          <p>
            Only use with DEW Disinfect to ensure: 99.995% efficacy against
            airborne and surface bacteria, viruses and fungi; rapid disinfection
            rate; hypoallergenic; neutralise odours; non-corrosive;
            non-staining; non-toxic; environmentally friendly.
          </p>
          <p>
            DEW Disinfect Readymix Refills available in 5L, 10L and 20L options
            - Mister Starter packs get 15% off Refills - see{' '}
            <Link to="/pricing">price list</Link> for details
          </p>
          <h4>Features:</h4>
          <ul>
            <li>Wall-mounted or free-standing</li>
            <li>3 levels of mist control</li>
            <li>Timer function</li>
            <li>Low solution notification</li>
            <li>Adjustable humidity display</li>
            <li>2L Capacity tank</li>
            <li>3M Cable length</li>
            <li>WiFi link function (controlled via app)</li>
            <li>Automatic schedule (controlled via app)</li>
            <li>Suitable for use in all environments</li>
          </ul>
          <h3>Office Sanitising Mister</h3>
          <h4>RRP £115 (includes 2 x 5L refills)</h4>
          <h5>Includes VAT @ 20%</h5>
          <img src={officeMisterMachine} alt="office mister machine" />
          <img src={refillX25L} alt="2 x 5L refills" />
          <p>
            This high specification Ultrasonic Sanitising Mister silently
            disperses a very fine mist of DEW Disinfect to sanitise and purify
            the air and surfaces within your office, reception, meeting room,
            treatment room, shop floor, etc. It provides a visual sense of
            proactively protecting your people and your customers - keeping your
            working environment healthy and safe.
          </p>
          <p>
            Combined with the rapid and lasting rate of disinfection of the
            circulating air and critical shared surface contact points such as
            door handles, key-boards, light switches, the Office Mister also
            maintains your workplace at the optimal relative humidity of between
            40-60% to combat the dehydrating effect of air-conditioning and
            heating. As well as helping to prevent your skin and eyes from
            drying out, this mister also ensures that the mucous membranes
            within your respiratory tract don’t dry out, which in turn, aids
            clearance of dust, bacteria, viruses, and other harmful airborne
            contaminants.
          </p>
          <p>
            Only use with DEW Disinfect to ensure: 99.995% efficacy against
            airborne and surface bacteria, viruses and fungi; rapid disinfection
            rate; hypoallergenic; neutralise odours; non-corrosive;
            non-staining; non-toxic; environmentally friendly.
          </p>
          <p>
            DEW Disinfect Readymix Refills available in 5L, 10L and 20L options
            - Mister Starter packs get 15% off Refills - see{' '}
            <Link to="/pricing">price list</Link> for details
          </p>
          <h4>Features:</h4>
          <ul>
            <li>2-in-1 silent sanitising humidifier and air purifier</li>
            <li>
              Ultrasonic technology disperses a very fine dry mist of DEW
              Disinfect - safe around electrical/electronic equipment
            </li>
            <li>360° directional misting</li>
            <li>3 adjustable levels of misting intensity</li>
            <li>3 adjustable levels of relative humidity (40%, 50%, 60%)</li>
            <li>
              Up to 13 hours running time thanks to large 4L reservior tank
            </li>
            <li>
              Ionizer function helps remove and filter out air-borne particles
              for better air quality
            </li>
            <li>Automatic mode, baby mode and night mode</li>
            <li>
              Timer function - set to switch-off after min 1 - max 12 hours
              runtime
            </li>
            <li>Displays the current relative humidity of the room</li>
            <li>Automatic shutdown on timer or if reservoir tank is empty</li>
            <li>LED ambience lighting function</li>
            <li>Suitable for rooms up to 30 m² / 75 m³</li>
            <li>Dimensions (L x W x H) 285 x 175 x 290 mm</li>
            <li>Weight: 3 kg</li>
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
