import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'

const Menu = (props) => (
    <nav id="menu">
        <div className="inner">
            <ul className="links">
                <li><Link onClick={props.onToggleMenu} to="/">Home</Link></li>
                <li><Link onClick={props.onToggleMenu} to="/products">Products</Link></li>
                <li><Link onClick={props.onToggleMenu} to="/services">Services</Link></li>
                <li><Link onClick={props.onToggleMenu} to="/pricing">Pricing</Link></li>
                <li><Link onClick={props.onToggleMenu} to="/#about">About Us</Link></li>
                <li><Link onClick={props.onToggleMenu} to="/privacy">Privacy</Link></li>
                <li><Link onClick={props.onToggleMenu} to="#contact">Contact Us</Link></li>
            </ul>
        </div>
        <a className="close" onClick={props.onToggleMenu} href="javascript:;">Close</a>
    </nav>
)

Menu.propTypes = {
    onToggleMenu: PropTypes.func
}

export default Menu
