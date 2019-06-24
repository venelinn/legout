import React from 'react'
import PropTypes from 'prop-types';
import FooterEn from './FooterEn'
import FooterFr from './FooterFr'

import "./Footer.scss"

const Footer = (props) => (
  <footer className="page__footer footer" id="layout-footer">
    {props.locale == 'en' ? (
      <FooterEn />
    ) : (
      <FooterFr />
    )}
  </footer>
)

Footer.propTypes = {
  locale: PropTypes.string
}

export default Footer;