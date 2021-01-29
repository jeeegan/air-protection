import React from 'react'
import { Link } from 'gatsby'

const BannerServices = (props) => (
    <section id="banner" className="style2">
        <div className="inner">
            <header className="major">
                <h1>Our Services</h1>
            </header>
            <div className="content">
        <p>
          We provide fogging decontamination services, site safety assessments & installations.
          <br />
        </p>
        {/* <ul className="actions">
          <li>
          <Link to="#contact" className="button next scrolly">
        Get in touch
      </Link>
          </li>
        </ul> */}
      </div>
        </div>
    </section>
)

export default BannerServices
