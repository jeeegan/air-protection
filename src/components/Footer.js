import React from 'react'
import websiteLogo from '../assets/images/website-icon-logo.png'

const Footer = props => (
  <footer id="footer">
    <div className="inner">
      <ul className="copyright">
        <li>
          <img src={websiteLogo} alt="logo" />
        </li>
        <li>&copy; C.W. Cameron Ltd T/A Air Protection</li>
        <li>Company Registration Number SC612088</li>
        <li>VAT Registration Number GB330024564</li>
      </ul>
    </div>
  </footer>
)

export default Footer
