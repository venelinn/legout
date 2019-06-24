import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'

import MainNav from './MainNav'
import TopNav from './TopNav'
import logo from '../images/logo.png'

import "./header.scss"

const Header = (props) => (
  <header className="page__header header">
    <TopNav locale={props.locale} langsMenu={props.langsMenu} />
    <div className="header-nav section">
      <div className="header-nav__logo">
        <Link to="/"><img src={logo} alt="Liberte" /></Link>
      </div>
      <div className="header-nav__menu">
        <MainNav locale={props.locale} />
      </div>
    </div>

  </header>
)

Header.propTypes = {
  langsMenu: PropTypes.array,
  locale: PropTypes.string
}

export default Header;