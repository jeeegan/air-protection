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
      <section>
        <div className="inner">
          <header className="major">
            <h2>Foggers & Misters</h2>
            <br />
            <Link to="/#order" className="button next scrolly">
              Order Now
            </Link>
          </header>
          <h3>Office/Room Mister</h3>
          <img src={officeMisterMachine} alt="office mister machine" className="major"/>
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
          <h3>Fogging Machine</h3>
          <img src={foggingMachine} alt="fogging machine" />
          <p>
            This high performance, professional, Ultra-Low-Volume (ULV) cold
            fogger disperses micro droplets (5-50 microns in diameter) of DEW
            Disinfect for deep decontamination requirements in medical centres,
            nurseries, care homes, offices, holiday homes and short-term
            rentals, restaurants, cinemas, bars, retail shops, supermarkets,
            hair salons, factory floors, food preparation areas, warehouses,
            etc.
          </p>
          <p>
            Only use with DEW Disinfect to ensure: 99.995% efficacy against
            airborne and surface bacteria, viruses and fungi; rapid disinfection
            rate; hypoallergenic; neutralise odours; non-corrosive;
            non-staining; non-toxic; environmentally friendly.{' '}
          </p>
          <h4>Features:</h4>
          <ul>
            <li>Tank Capacity: 4 Litres DEW Disinfect</li>
            <li>Power: 220V (10 metre AC cable supplied)</li>
            <li>Motor: 1250 Watt Samsung Motor (Dual Speed)</li>
            <li>Flow Rate: Up to 60 LPH</li>
            <li>Droplet Size: 5-50 microns</li>
            <li>Spray Distance: 8-15m</li>
            <li>Net Weight: 3.5 kg</li>
            <li>Dimensions: 52 x 30 x 16 cm</li>
          </ul>
          <p>
            Important: Whilst Dew Disinfect is non-toxic to humans, animals, and
            plant life, we always recommend that the area being decontaminated
            is vacated during the procedure and that the operator is wearing
            Personal Protective Equipment (PPE) N95 half mask or above (or PPF3
            equivalent) and eye goggles (always assume a contaminated
            environment pre-treatment).
          </p>
          <h4>
            <span>For a full list of products & pricing </span>
            <Link to="/#order" style={{ textDecoration: 'underline' }}>
              download our order form
            </Link>
          </h4>
          <div className="break"></div>
          <Link to="/products" className="button next scrolly">
            View All Product Ranges
          </Link>
        </div>
      </section>
    </div>
  </Layout>
)

export default FoggersMisters
