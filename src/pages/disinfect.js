import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import { Link } from 'gatsby'
import disinfectImg from '../assets/images/disinfect.png'

const Disinfect = props => (
  <Layout>
    <Helmet>
      <title>Air Protection | Disinfect Products Page</title>
      <meta name="description" content="Disinfect Products Page" />
    </Helmet>

    <div id="disinfectPage">
      <section>
        <div className="inner">
          <header className="major">
            <img src={disinfectImg} alt="disinfect products" />
            <h2>Disinfect Products</h2>
            <Link to="/#order" className="button next scrolly">
              Order Now
            </Link>
          </header>
          <p>
            Welcome to a new range of disinfecting products powered by
            electrolysed water, safer for you, kind to your skin and kinder to
            the environment.
          </p>
          <p>The DEW disinfect range includes general-purpose cleaners and hand sanitisers. Available in ready to use bottles as well as refillable dispensers.</p>
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
            DEW disinfect hand sanitiser is bottled, ‘electrolysed’ water, manufactured
            from deionised water and high purity salt (Sodium Chloride). It
            offers the highest grade in multi-spectrum disinfection for your
            hands and any surface on which it falls. Additionally it deodorizes
            and suppresses other allergens it comes into contact with, but
            importantly, does NOT promote resistance in bacteria and viruses.
          </p>
          <p>
            DEW disinfect and hand sanitiser works indiscriminately killing all germs that it
            comes into contact with. It is effective at controlling bacteria,
            viruses and spores.
          </p>
          <p>
            DEW disinfect and hand sanitiser is pH skin compatible, FREE FROM harsh or toxic
            chemicals, Hypoallergenic and leaves no residue. It remains active
            until it evaporates or naturally decays back to its original
            components of just water and salt.
          </p>
          <h4>
            <Link to="/#order">
              For a full list of products & pricing in the Disinfect range
              download our order form
            </Link>
          </h4>
        </div>
      </section>
    </div>
  </Layout>
)

export default Disinfect
