import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/layout'

const Pricing = props => (
  <Layout>
    <Helmet>
      <title>Air Protection | Pricing Page</title>
      <meta name="description" content="Pricing Page" />
    </Helmet>
    <div id="main">
      <section id="one">
        <div className="inner">
          <header className="major">
            <h2>Price List</h2>
          </header>
          <table>
              <tr>
                  <th>Description</th>
                  <th>Unit Price (ex VAT)*</th>
              </tr>
              <tr>
                  <th>Foggers & Misters</th>
              </tr>
              <tr>
                  <td>Office / Home Dry Mister (with 2 × 5L Disinfect Refill)</td>
                  <td>£95.83</td>
              </tr>
              <tr>
                  <td>Fogging Machine - Ultra Low Volume Nebuliser</td>
                  <td>£495.00</td>
              </tr>
              <tr>
                  <th>Hand, Air & Surface Sanitiser</th>
              </tr>
              <tr>
                  <td>Dew Air 185ml - Fine Mist Room Spray</td>
                  <td>£5.83</td>
              </tr>
              <tr>
                  <td>Dew Disinfect 500ml - Surface Spray</td>
                  <td>£4.16</td>
              </tr>
              <tr>
                  <td>Dew Hand Sanitiser 65ml - Pocket Sized</td>
                  <td>£2.91</td>
              </tr>
              <tr>
                  <td>Dew Hand Sanitiser 500ml</td>
                  <td>£4.16</td>
              </tr>
              <tr>
                  <td>Dew Disinfect Refill 5L (Disinfect, Air & Hand Sanitiser)</td>
                  <td>£11.67</td>
              </tr>
              <tr>
                  <td>Dew Disinfect Refill 10L with Tap (Disinfect, Air & Hand Sanitiser)</td>
                  <td>£22.50</td>
              </tr>
              <tr>
                  <td>Dew Disinfect Refill 20L with Tap (Disinfect, Air & Hand Sanitiser)</td>
                  <td>£38.50</td>
              </tr>
              <tr>
                  <td>Dew Hand Sanitiser Dispenser – Wall Mounted</td>
                  <td>£12.00</td>
              </tr>
              <tr>
                  <td>Dew Hand Sanitiser Dispenser – Refill 1L</td>
                  <td>£6.75</td>
              </tr>
              <tr>
                  <th>Clean Protection</th>
              </tr>
              <tr>
                  <td>Dew Superclean 500ml - Powerful Multi-Purpose Cleaner/Degreaser Spray</td>
                  <td>£4.16</td>
              </tr>
              <tr>
                  <td>Dew Foam 200ml - Hand & Body Wash</td>
                  <td>£3.74</td>
              </tr>
              <tr>
                  <td>Dew Foam 250ml - Hand & Body Wash (25% Extra Special Offer)</td>
                  <td>£3.74</td>
              </tr>
              <tr>
                  <td>Dew Superclean Refill 5L (Superclean & Foam)</td>
                  <td>£11.67</td>
              </tr>
              <tr>
                  <td>Dew Superclean Refill 10L with Tap (Superclean & Foam)</td>
                  <td>£22.50</td>
              </tr>
              <tr>
                  <td>Dew Superclean Refill 10L with Cap (Superclean & Foam)</td>
                  <td>£20.00</td>
              </tr>
              <tr>
                  <td>Dew Superclean Refill 20L with Tap (Superclean & Foam)</td>
                  <td>£38.50</td>
              </tr>
              <tr>
                  <td>Dew Superclean Refill 20L with Cap (Superclean & Foam)</td>
                  <td>£34.17</td>
              </tr>
          </table>
          <p>* Contract/bulk pricing available on request</p>
        </div>
      </section>
    </div>
  </Layout>
)

export default Pricing
