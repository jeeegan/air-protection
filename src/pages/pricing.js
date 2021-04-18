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
          <p>
            <a href={`priceList.pdf`} target="_blank" rel="noreferrer">
              You can download our full price list here
            </a>
          </p>
          <table>
            <tr>
              <th>Description</th>
              <th>Unit Price (inc VAT)*</th>
            </tr>
            <tr>
              <th>Office Misters</th>
            </tr>
            <tr>
              <td>
                Office / Room Sanitising Mister (with 2 × 5L Disinfect Readymix
                Refill)
              </td>
              <td>£115.00</td>
            </tr>
            <tr>
              <td>
                Mister Bonus Starter Pack A - add 1 x 10L Disinfect Readymix
                Refill with Tap
              </td>
              <td>£22.95</td>
            </tr>
            <tr>
              <td>
                Mister Bonus Starter Pack B - add 1 x 20L Disinfect Readymix
                Refill with Tap
              </td>
              <td>£39.27</td>
            </tr>
            <tr>
              <th>Foggers</th>
            </tr>
            <tr>
              <td>Professional Fogging Machine</td>
              <td>£599.00</td>
            </tr>
            <tr>
              <td>
                Fogger Bonus Starter Pack A - add 4 x 5L Disinfect Readymix
                Refills
              </td>
              <td>£47.60</td>
            </tr>
            <tr>
              <td>
                Fogger Bonus Starter Pack B - add 1 x 10L Disinfect Readymix
                Refill with Tap
              </td>
              <td>£22.95</td>
            </tr>
            <tr>
              <td>
                Fogger Bonus Starter Pack C - add 1 x 20L Disinfect Readymix
                Refill with Tap
              </td>
              <td>£39.27</td>
            </tr>
            <tr>
              <th>Hand, Air & Surface Sanitiser</th>
            </tr>
            <tr>
              <td>Dew Air 185ml - Fine Mist Room Spray</td>
              <td>£6.99</td>
            </tr>
            <tr>
              <td>Dew Disinfect 500ml - Surface Spray</td>
              <td>£4.99</td>
            </tr>
            <tr>
              <td>Dew Hand Sanitiser 65ml - Pocket Sized</td>
              <td>£3.49</td>
            </tr>
            <tr>
              <td>Dew Hand Sanitiser 500ml</td>
              <td>£4.99</td>
            </tr>
            <tr>
              <td>Dew Disinfect Refill 5L (Disinfect, Air & Hand Sanitiser)</td>
              <td>£14.00</td>
            </tr>
            <tr>
              <td>
                Dew Disinfect Refill 10L with Tap (Disinfect, Air & Hand
                Sanitiser)
              </td>
              <td>£27.00</td>
            </tr>
            <tr>
              <td>
                Dew Disinfect Refill 20L with Tap (Disinfect, Air & Hand
                Sanitiser)
              </td>
              <td>£46.20</td>
            </tr>
            <tr>
              <td>Dew Hand Sanitiser Dispenser – Wall Mounted</td>
              <td>£19.50</td>
            </tr>
            <tr>
              <td>Dew Hand Sanitiser 1L - Dispenser Refill</td>
              <td>£12.50</td>
            </tr>
            <tr>
              <th>Clean Protection</th>
            </tr>
            <tr>
              <td>
                Dew Superclean 500ml - Powerful Multi-Purpose Cleaner/Degreaser
                Spray
              </td>
              <td>£4.99</td>
            </tr>
            <tr>
              <td>Dew Foam 200ml - Hand & Body Wash</td>
              <td>£4.49</td>
            </tr>
            <tr>
              <td>Dew Superclean Refill 5L (Superclean & Foam)</td>
              <td>£14.00</td>
            </tr>
            <tr>
              <td>Dew Superclean Refill 10L with Tap (Superclean & Foam)</td>
              <td>£27.00</td>
            </tr>
            <tr>
              <td>Dew Superclean Refill 20L with Tap (Superclean & Foam)</td>
              <td>£46.20</td>
            </tr>
          </table>
          <p>
            * Trade, Contract, Volume Pricing available on request. All prices
            include VAT @ 20%
          </p>
        </div>
      </section>
    </div>
  </Layout>
)

export default Pricing
