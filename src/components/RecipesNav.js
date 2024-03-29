import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import Fade from 'react-reveal/Fade';
import { FormattedMessage } from 'react-intl';

import "./RecipesNav.scss"

const Recipes = props => {
  const recipe = props.data;
  return (
    <Fade delay={500}>
      <div className="nav-categories-container">
      <nav className="nav-categories">
        <span className="is-accessible">Navigation par catégories</span>
        <ul>
          {recipe.map((recipe, index) => (
            <li key={index}>
              <Link
                to={`/${recipe.node_locale.split('-')[0]}/${recipe.slug}/`}
                activeClassName="active"
                >
                {recipe.title}
              </Link>
            </li>
          ))}
          <li>
            <Link
              to={`/${props.lang}/`}
              activeClassName="active"
            >
              <FormattedMessage id="viewall" />
            </Link>
          </li>
        </ul>
      </nav>
  </div>
    </Fade>
  )
}

Recipes.propTypes = {
  locale: PropTypes.string
}

export default Recipes;