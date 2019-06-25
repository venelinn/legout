import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { getCurrentLangKey, getLangs, getUrlForLang } from 'ptz-i18n';
import { IntlProvider, addLocaleData } from 'react-intl';
import 'intl';

import styled, { ThemeProvider } from "styled-components"
import theme from 'styled-theming';

import { colors } from '../theme/colors'
import { fonts } from '../theme/fonts'
import en from 'react-intl/locale-data/en';
import 'intl/locale-data/jsonp/en';
import fr from 'react-intl/locale-data/fr';
import 'intl/locale-data/jsonp/fr';

import GlobalStyle from '../styles/global'

import Header from './Header'
import Footer from '../components/Footer'
import favicon from '../images/favicon.png';

import "../styles/style.scss"

// add concatenated locale data
addLocaleData([...en, ...fr]);

class Layout extends Component {
  constructor(props) {
    super(props);
    this.children = this.props.children;
    const data = this.props.data;
    const location = this.props.location;
    const url = location.pathname;
    const { langs, defaultLangKey } = data.site.siteMetadata.languages;
    this.langKey = getCurrentLangKey(langs, defaultLangKey, url);
    this.homeLink = `/${this.langKey}/`;
    this.langsMenu = getLangs(langs, this.langKey, getUrlForLang(this.homeLink, url));

    // get the appropriate message file based on langKey
    // at the moment this assumes that langKey will provide us
    // with the appropriate language code
    this.i18nMessages = require(`../data/messages/${this.langKey}`);
  }
  render() {
    return (
      <IntlProvider
        locale={this.langKey}
        messages={this.i18nMessages}
      >
        <ThemeProvider theme={{ locale: this.langKey, colors: colors, fonts: fonts }}>
          <main className="page">
            <React.Fragment>
              <GlobalStyle />
            </React.Fragment>
              <Header langsMenu={this.langsMenu} locale={this.langKey} />
                <section className="page__container">
                  {this.children}
                </section>
                <Footer locale={this.langKey} />
          </main>
        </ThemeProvider>
      </IntlProvider>
    );
  }
}

export default Layout
