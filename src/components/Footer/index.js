import React from 'react'
import PropTypes from 'prop-types';
import Fade from 'react-reveal/Fade';
import FooterEn from './FooterEn'
import FooterFr from './FooterFr'

import "./Footer.scss"

const Footer = (props) => (
  <Fade bottom delay={600}>
    <footer className="page__footer footer" id="layout-footer">
      {props.locale == 'en' ? (
        <FooterEn />
      ) : (
        <FooterFr />
      )}
    </footer>
  </Fade>
)

Footer.propTypes = {
  locale: PropTypes.string
}

export default Footer;