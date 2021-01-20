import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import BannerProducts from '../components/BannerProducts'
import officeMister from '../assets/images/airprotectionAlpha.png'
import disinfectPack from '../assets/images/disinfect.png'
import supercleanPack from '../assets/images/SupercleanPack2_1296xAlpha.png'

const Products = props => (
  <Layout>
    <Helmet>
      <title>Air Protection | Products Page</title>
      <meta name="description" content="Products Page" />
    </Helmet>

    <BannerProducts />

    <div id="products">
      <section id="airProtection">
        <div className="inner">
          <header className="major">
            <img src={officeMister} alt="office mister" />
            <h3>Air Protection</h3>
            <p>Disinfecting dry-mister & fogging machines</p>
            <a href="/airprotection" className="button next scrolly">
              Air Protection Products
            </a>
          </header>
          <div>
            <p>
              The room mister is ideal for dispersing a low ppm solution of Dew
              into the air though a dry mist thus sanitising the air constantly.
              It can be timer & humidity set or run constantly. It is ideal for
              receptions, offices, treatment rooms or just in your home.
            </p>
            <p>
              Our Fogging machine uses an Ultra Low Volume Nebuliser that
              creates micro droplets. These droplets are dispersed into the air,
              float then slowly fall, disinfecting every surface as well as
              cleaning the air itself, resulting in a hygienically clean space
              where bacteria, spores, viruses, pollen etc. have been purged from
              the air. The C100+ ULV cold fogger has been redesigned to offer
              the ultimate in fogging performance (includes 4 Dew Ready Mix 5 L
              Refills). All our products are eco-friendly, natural,
              hypoallergenic; food, child and pet safe.
            </p>
          </div>
        </div>
      </section>
      <section id="disinfect">
        <div className="inner alt">
          <header className="major">
            <img src={disinfectPack} alt="disinfect pack" />
            <h3>Disinfect</h3>
            <p>Fast-acting surface, air & hand sanitiserss</p>
            <a href="/disinfect" className="button next scrolly">
              Disinfect Products
            </a>
          </header>
          <p>
            Dew Disinfect, is an eco-friendly, naturally kinder, super effective
            and safe disinfectant that kills Germs 30 Times Faster than normal
            household Chemicals and bleach. Utilising electrolysed water, Dew
            Disinfect is hypoallergenic and 99.995% effective at killing
            bacteria, such as the Flu, Listeria, Legionella, E.coli,
            Staphylococcus, Norovirus, and much, much more. Safe to use around
            family and pets, and no need for rubber gloves!
          </p>
        </div>
      </section>
      <section id="superclean">
        <div className="inner">
          <header className="major">
            <img src={supercleanPack} alt="superclean pack" />
            <h3>Superclean</h3>
            <p>Eco-friendly multi-purpose cleaner</p>
            <a href="/superclean" className="button next scrolly">
              Superclean Products
            </a>
          </header>
          <p>
            Dew Superclean is an eco-friendly, natural multi- surface,
            low-streak cleaner and degreaser providing excellent performance for
            all cleaning challenges. Utilising electrolysed water; safer to use,
            kinder to your skin and kinder to the environment, Dew Superclean
            provides excellent performance for all cleaning challenges. It is
            100% Biodegradable, free from harsh chemicals, hypoallergenic,
            non-irritant and non-staining. Perfect for stainless steel,
            anti-fogging on glass, cleaning of surfaces in the house or the car.
          </p>
        </div>
      </section>
    </div>
  </Layout>
)

export default Products
