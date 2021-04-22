import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import auraExplodedView from '../assets/images/auraExplodedView.gif'
import scientificResearch from '../assets/images/scientificResults.png'
import auraAirUnit from '../assets/images/auraAirUnit.png'
import auraAirApp from '../assets/images/auraAirApp.png'
import sectorImgKitchen from '../assets/images/sectorImgKitchen.jpg'
import sectorImgOffice from '../assets/images/sectorImgOffice.jpg'

const AirPurification = props => (
  <Layout>
    <Helmet>
      <title>Air Protection | Air Purification & Disinfection</title>
      <meta
        name="description"
        content="Air Purification & Disinfection Products Page"
      />
    </Helmet>

    <div id="airPurification">
      <section>
        <div className="inner" style={{ alignItems: 'flex-start' }}>
          <header className="major">
            <h2>Air Purification & Disinfection</h2>
          </header>
          <p>
            Introducing Aura Air - the world’s smartest air purification
            technology, one that purifies, cleanses and disinfects your indoor
            air, while vigilantly monitoring its quality in real-time Aura Air
            targets and disinfects 99.9 % of viruses, bacteria, mould, and VOCs.
            It removes gasses and captures 99.9 % of airborne particles as small
            as 0.3 microns, including allergens.
          </p>
          <img
            src={auraAirUnit}
            alt="Aura Air Unit"
            style={{ maxWidth: '50%' }}
          />
          <h2>Scientific Research</h2>
          <p>
            A July 2020 white paper from The Chaim Sheba Medical Center
            concluded that{' '}
            <em>
              “Each of the tested components of the Aura Air Device was able to
              significantly reduce the viral load as measured by PCR”
            </em>
            .
          </p>
          <img
            src={scientificResearch}
            alt="Scientific Research Results"
            style={{ maxWidth: '90%' }}
          />
          <p>
            Aura Air uses a patented and EPA-approved Sterionizer and Ray
            Filter, as well as UVC LEDs to target and disinfect your indoor air
            from bacteria, viruses, fungus, mold, odors and more.
          </p>{' '}
          <p>
            <a
              href={`coronavirusWhitePaper.pdf`}
              target="_blank"
              rel="noreferrer"
            >
              You can download the white paper here
            </a>
          </p>
          <img
            src={sectorImgKitchen}
            alt="Aura Air in home kitchen"
            style={{ maxWidth: '80%', paddingBottom: '1em' }}
          />
          <br />
          <h2>Data-Driven Air Quality Platform</h2>
          <p>
            Aura Air’s Filter system accurately measures and displays PM2.5,
            PM10, VOC, Temperature, Humidity, CO and CO2 levels from its seven
            integrated high-precision integrated sensors - every 10 seconds. All
            of this information is displayed in an easy to read manner on the
            Dashboard and Smartphone App.
          </p>
          <img
            src={auraAirApp}
            alt="Aura Air Smartphone App"
            style={{ maxWidth: '75%', paddingBottom: '1em' }}
          />
          <div className="break"></div>
          <h2>The Technology</h2>
          <p>
            Aura Air is the first, all in one, Air Filtration, Disinfection and
            Monitoring product that has successfully completed clinical tests
            specifically related to its efficacy against the COVID-19
            coronavirus.
          </p>
          <img
            src={auraExplodedView}
            alt="Aura Air Exploded View"
            style={{ maxWidth: '90%' }}
          />
          <h2>Pre-Filter</h2>
          <p>
            The Pre-Filter catches large particles of dust, pollen, insects,
            animal hair and other large particles. The Pre- Filter is easy to
            maintain and has a key role in conserving the quality of the device.
          </p>
          <h2>Ray-Filter</h2>
          <p>The patented Ray-FilterTM consists of three parts:</p>
          <ul>
            <li>HEPA 99.5% effective particle filter of 0.3 microns </li>
            <li>Carbon Layer Absorbs VOCs and bad odors </li>
            <li>
              Smart Copper Fabric A smart fabric consisting of a copper layer
              filter that filters viruses, bacteria, and more
            </li>
          </ul>
          <h2>UVC LED</h2>
          <p>
            Effective in neutralizing bacteria, viruses, and parasites by
            destroying the proteins on the cell membrane.
          </p>
          <h2>The Sterionizer&#8482;</h2>
          <p>
            A component-based on the technology of bipolar ionisation. The
            Sterionizer generates positive and negative ions – just like those
            found in nature – that purify and freshen indoor air by eliminating
            the harmful pollutants mentioned above. In neutralising bacteria,
            viruses, and parasites by destroying the proteins on the cell
            membrane.
          </p>
          <img
            src={sectorImgOffice}
            alt="Aura Air in office setting"
            style={{ maxWidth: '80%', paddingBottom: '1em' }}
          />
        </div>
      </section>
    </div>
  </Layout>
)

export default AirPurification
