import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import websiteLogo from '../assets/images/website-icon.png';

const Header = (props) => (
    <header id="header" className="alt">
        <Link to="/" className="logo"><img src={websiteLogo}/> <span>Air Protection</span></Link>
        <nav>
            <a className="menu-link" onClick={props.onToggleMenu} href="javascript:;">Menu</a>
        </nav>
    </header>
)

Header.propTypes = {
    onToggleMenu: PropTypes.func
}

export default Header
