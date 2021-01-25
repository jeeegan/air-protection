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
          <h3>Office/Room Mister</h3>
          <p>
            This high specification Ultrasonic Sanitising Humidifier silently
            disperses a very fine mist of DEW Disinfect to sanitise and purify
            the air and surfaces within your office, reception, meeting room,
            treatment room, shop floor, etc. It provides a visual sense of
            proactively protecting your people and your customers - keeping your
            working environment healthy and safe.
          </p>
          <p>
            Combined with the rapid and lasting rate of disinfection of the
            circulating air and critical shared surface contact points such as
            door handles, key-boards, light switches, the Office/Room Mister
            also maintains your workplace at the optimal relative humidity of
            between 40-60% to combat the dehydrating effect of air-conditioning
            and heating. As well as helping to prevent your skin and eyes from
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
          <h4>Features:</h4>
          <ul>
            <li>2-in-1 silent sanitising humidifier and air purifier</li>
            <li>
              Ultrasonic technology disperses a very fine (non-wetting)
              sanitising mist - safe around electrical/electronic equipment
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
          <br />
          <Link to="/products" className="button next scrolly">
            View All Product Ranges
          </Link>
        </div>
      </section>
    </div>
  </Layout>
)

export default FoggersMisters
