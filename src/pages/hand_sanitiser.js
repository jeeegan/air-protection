import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import { Link } from 'gatsby'
import handSanitiser from '../assets/images/handSanitiser.png'

const HandSanitiser = props => (
  <Layout>
    <Helmet>
      <title>Air Protection | Hand, Air & Surface Sanitiser Products Page</title>
      <meta name="description" content="Hand, Air & Surface Sanitiser Products Page" />
    </Helmet>

    <div id="handSanitiserPage">
      <section>
        <div className="inner">
          <header className="major">
            <img src={handSanitiser} alt="Hand, Air & Surface Sanitiser products" />
            <h2>Hand, Air & Surface Sanitiser</h2>
            {/* <Link to="/#order" className="button next scrolly">
              Order Now
            </Link> */}
          </header>
          <p>
            Welcome to a new range of hand sanitiser products powered by
            electrolysed water, safer for you, kind to your skin and kinder to
            the environment. Available in ready to use bottles as well as refillable
            dispensers.
          </p>
          <p>
            Dew Disinfect, is an eco-friendly, naturally kinder, super effective
            and safe disinfectant that kills Germs 30 Times Faster than normal
            household Chemicals and bleach. Utilising electrolysed water, Dew
            Disinfect is hypoallergenic and 99.995% effective at killing
            bacteria, such as the Flu, Listeria, Legionella, E.coli,
            Staphylococcus, Norovirus, and much, much more. Safe to use around
            family and pets, and no need for rubber gloves!
          </p>
          <p>
            DEW disinfect hand sanitiser is bottled, ‘electrolysed’ water,
            manufactured from deionised water and high purity salt (Sodium
            Chloride). It offers the highest grade in multi-spectrum
            disinfection for your hands and any surface on which it falls.
            Additionally it deodorizes and suppresses other allergens it comes
            into contact with, but importantly, does NOT promote resistance in
            bacteria and viruses.
          </p>
          <p>
            DEW disinfect and hand sanitiser works indiscriminately killing all
            germs that it comes into contact with. It is effective at
            controlling bacteria, viruses and spores.
          </p>
          <p>
            DEW disinfect and hand sanitiser is pH skin compatible, FREE FROM
            harsh or toxic chemicals, Hypoallergenic and leaves no residue. It
            remains active until it evaporates or naturally decays back to its
            original components of just water and salt.
          </p>
          <p>
            DEW Air - Supplied in a specially designed trigger spray nebuliser
            that generates a super-fine spray without the use of an aerosol. For
            immediate use, providing rapid relief for allergy and hay-fever
            suffers.
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
