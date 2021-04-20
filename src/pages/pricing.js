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
              <th>Unit Price (ex VAT)*</th>
            </tr>
            <tr>
              <th>Air Purification & Disinfection</th>
            </tr>
            <tr>
              <td>Aura Air - Smart Air Purification & Monitoring</td>
              <td>£550.00</td>
            </tr>
            <tr>
              <td>Ray Filter Copper/Carbon HEPA Replacement</td>
              <td>£79.99</td>
            </tr>
            <tr>
              <th>Office Misters</th>
            </tr>
            <tr>
              <td>Smart Sanitising Mister (with 2 × 5L Mist)</td>
              <td>£163.83</td>
            </tr>
            <tr>
              <td>
                Mister Bonus Starter Pack A - add 1 x 10L Disinfect Readymix
                Refill with Tap
              </td>
              <td>£19.13</td>
            </tr>
            <tr>
              <td>
                Mister Bonus Starter Pack B - add 1 x 20L Disinfect Readymix
                Refill with Tap
              </td>
              <td>£32.73</td>
            </tr>
            <tr>
              <th>Foggers</th>
            </tr>
            <tr>
              <td>Professional Fogging Machine (with 4 x 5L Mist)</td>
              <td>£499.17</td>
            </tr>
            <tr>
              <td>
                Fogger Bonus Starter Pack B - add 1 x 10L Disinfect Readymix
                Refill with Tap
              </td>
              <td>£19.13</td>
            </tr>
            <tr>
              <td>
                Fogger Bonus Starter Pack C - add 1 x 20L Disinfect Readymix
                Refill with Tap
              </td>
              <td>£32.73</td>
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
              <td>
                Dew Disinfect Refill 10L with Tap (Disinfect, Air & Hand
                Sanitiser)
              </td>
              <td>£22.50</td>
            </tr>
            <tr>
              <td>
                Dew Disinfect Refill 20L with Tap (Disinfect, Air & Hand
                Sanitiser)
              </td>
              <td>£38.50</td>
            </tr>
            <tr>
              <td>Dew Hand Sanitiser Dispenser – Wall Mounted</td>
              <td>£16.25</td>
            </tr>
            <tr>
              <td>Dew Hand Sanitiser 1L - Dispenser Refill</td>
              <td>£10.42</td>
            </tr>
            <tr>
              <th>Clean Protection</th>
            </tr>
            <tr>
              <td>
                Dew Superclean 500ml - Powerful Multi-Purpose Cleaner/Degreaser
                Spray
              </td>
              <td>£4.16</td>
            </tr>
            <tr>
              <td>Dew Foam 200ml - Hand & Body Wash</td>
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
              <td>Dew Superclean Refill 20L with Tap (Superclean & Foam)</td>
              <td>£38.50</td>
            </tr>
          </table>
          <p>
            * Trade, Contract, Volume Pricing available on request. All prices
            exclude VAT @ 20%
          </p>
        </div>
      </section>
    </div>
  </Layout>
)

export default Pricing
