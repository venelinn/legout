import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import styled from 'styled-components'
import { FormattedMessage } from 'react-intl';

import { device } from '../theme/breakpoints'

const Nav = styled.nav`
  display: inline;
  font-size: 14px;
  font-weight: bold;
  ul {
    margin: 0;
    padding: 0;
    list-style: none;
    overflow: hidden;
  }

  li a {
    display: block;
    padding: 1rem;
    text-decoration: none;
  }
  span {
    display: inline;
    padding: 1rem;
  }

  /* menu */

  .menu {
    max-height: 0;
    transition: max-height .2s ease-out;
  }

  /* menu icon */

  .menu-icon {
    cursor: pointer;
    display: inline-block;
    padding: 28px 0;
    position: relative;
    user-select: none;
    margin-top: 20px;
    padding-right: 20px;
  }

  .menu-icon .navicon {
    background: ${props => props.theme.colors.backgroundMobileNavIcon};
    display: block;
    height: 2px;
    position: relative;
    transition: background .2s ease-out;
    width: 18px;
  }

  .menu-icon .navicon:before,
  .menu-icon .navicon:after {
    background: ${props => props.theme.colors.backgroundMobileNavIcon};
    content: '';
    display: block;
    height: 100%;
    position: absolute;
    transition: all .2s ease-out;
    width: 100%;
  }

  .menu-icon .navicon:before {
    top: 5px;
  }

  .menu-icon .navicon:after {
    top: -5px;
  }

  /* menu btn */

  .menu-btn {
    display: none;
  }

  .menu-btn:checked ~ .menu {
    max-height: 265px;
    width: 100vw;
  }

  .menu-btn:checked ~ .menu-icon {
    float: right;
  }

  .menu-btn:checked ~ .menu-icon .navicon {
    background: transparent;
  }

  .menu-btn:checked ~ .menu-icon .navicon:before {
    transform: rotate(-45deg);
  }

  .menu-btn:checked ~ .menu-icon .navicon:after {
    transform: rotate(45deg);
  }

  .menu-btn:checked ~ .menu-icon:not(.steps) .navicon:before,
  .menu-btn:checked ~ .menu-icon:not(.steps) .navicon:after {
    top: 0;
  }

  @media ${device.laptop} {
    ul {
      font-size: 17px;
      margin: auto;
      line-height: 100px;
    }
    li {
      display: inline;
    }
    li a {
      padding: 1rem;
      display: inline;
    }
    li a:hover {
      background-color: transparent;
    }
    .menu {
      max-height: none;
    }
    .menu-icon {
      display: none;
    }
  }
`

const MainNav = (props) => (
  <Nav className="main-nav">
    <input className="menu-btn" type="checkbox" id="menu-btn" />
    <label className="menu-icon" htmlFor="menu-btn"><span className="navicon"></span></label>
      <ul className="menu cf">
      {props.locale == 'en' ? (
        <>
          <li>
            <a href="http://www.liberte.ca/en/products/" target="_blank">Products</a>
          </li>
          <li>
            <a href="http://www.liberte.ca/en/recipes/" target="_blank">Recipes</a>
          </li>
          <li>
            <a href="http://www.liberte.ca/en/community" target="_blank">Community</a>
          </li>
          <li>
            <a href="http://www.liberte.ca/en/faq" target="_blank">FAQ</a>
          </li>
          <li>
            <span>The taste</span>
          </li>
        </>
      ) : (
        <>
          <li>
            <a  href="http://www.liberte.ca/fr/produits" target="_blank">Produits</a>
          </li>
          <li>
            <a  href="http://www.liberte.ca/fr/recettes/" target="_blank">Recettes</a>
          </li>
          <li>
            <a  href="http://www.liberte.ca/fr/communaute" target="_blank">Communauté</a>
          </li>
          <li>
            <a  href="http://www.liberte.ca/fr/faq" target="_blank">FAQ</a>
          </li>
          <li>
            <span>Le goût</span>
          </li>
        </>
      )}
      </ul>
  </Nav>
)

MainNav.propTypes = {
  locale: PropTypes.string
}

export default MainNav;