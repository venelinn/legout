import React from 'react'
import PropTypes from 'prop-types'
import Fade from 'react-reveal/Fade';

import SelectLanguage from './SelectLanguage'

import "./TopNav.scss"

const TopNav = (props) => (
  <Fade>
  <div className="nav-metas-container">
    <div className="layout-wrapper cf">
      <nav className="nav nav-metas">
        <span className="is-accessible">Meta navigation</span>
        <ul className="cf topnav">
          {props.locale == 'en' ? (
            <>
              <li>
                <a href="http://www.liberte.ca/en/company" target="_blank">About us</a>
              </li>
              <li>
                <a href="http://www.liberte.ca/en/contact-us" target="_blank">Contact us</a>
              </li>
              <li>
                <SelectLanguage langsMenu={props.langsMenu} />
              </li>
            </>

          ) : (
          <>
						<li>
							<a href="http://www.liberte.ca/fr/entreprise" target="_blank">À propos de nous</a>
						</li>
						<li>
							<a href="http://www.liberte.ca/fr/nous-joindre" target="_blank">Nous joindre</a>
						</li>
						<li>
              <SelectLanguage langsMenu={props.langsMenu} />
						</li>
            </>
          )}
					</ul>
      </nav>
    </div>
  </div>
  </Fade>

)

TopNav.propTypes = {
  locale: PropTypes.string
}

export default TopNav;