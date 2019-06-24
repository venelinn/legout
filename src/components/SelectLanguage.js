import React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';
import { FormattedMessage } from 'react-intl';
import styled from 'styled-components'

const Nav = styled.nav`
  a {
    &[aria-current] {
      display: none;
    }
  }
`

/*
 * Rather than hide this, a better way would
 * be a tooltip and even in the unselected lang.
 * But, it's not recommended to call the API
 * directly, so consider removing entirely also.
 */
const LangSwitchMsg = styled.div`
  display: none;
`

const SelectLanguage = (props) => {
  const links = props.langsMenu.map(lang =>
    <Link to={lang.link} key={lang.langKey}>
      <li selected={lang.selected}>
        {lang.langKey}
      </li>
    </Link>
  );

  return (
    <Nav className="language-switcher">
      <LangSwitchMsg>
        <FormattedMessage id="selectLanguage" />
      </LangSwitchMsg>
      <ul>
        {links}
      </ul>
    </Nav>
  );
};

SelectLanguage.propTypes = {
  langsMenu: PropTypes.array
};

export default SelectLanguage;