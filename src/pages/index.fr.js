import React from "react"
import * as PropTypes from "prop-types"
import { graphql } from 'gatsby'

import Layout from "../components/layout"
import SEO from "../components/seo"
import Recipes from "../components/RecipesNav"
import Grid from "../components/Grid"
import Hero from "../components/Hero"

const propTypes = {
  data: PropTypes.object.isRequired,
}

class IndexPage extends React.Component {
  render() {
    const hero = this.props.data.hero.edges[0].node;
    const products = this.props.data.product.edges;
    const recipes = this.props.data.recipes.edges[0].node.mainMenu;
    return (
      <Layout data={this.props.data} location={this.props.location}>
        <SEO title="Liberte" lang='fr' />
        <Hero hero={hero} />
        <div className="section">
          <Recipes data={recipes} lang={this.props.pageContext.langKey} />
          <Grid data={products} />
        </div>
      </Layout>
    )
  }
}

IndexPage.propTypes = propTypes

export default IndexPage

export const pageQuery = graphql`
  query PageFrQuery {
    site {
      siteMetadata {
        languages {
          defaultLangKey
          langs
        }
      }
    }
    hero: allContentfulHomeHero(filter: { node_locale: { eq: "fr-CA" } }) {
      edges {
        node {
          title
          node_locale
          description {
            description
          }
          image {
            title
            fluid(maxWidth: 1500, quality: 80) {
              ...GatsbyContentfulFluid_withWebp_noBase64
            }
          }
        }
      }
    }
    product: allContentfulProduct(filter: { node_locale: { eq: "fr-CA" } }) {
      edges {
        node {
          id
          title
          description {
            childMarkdownRemark {
              html
            }
          }
          image {
            fluid(maxWidth: 500, quality: 80) {
              ...GatsbyContentfulFluid_withWebp_noBase64
            }
          }
          node_locale
        }
      }
    }
    recipes: allContentfulNavigation(filter: { node_locale: { eq: "fr-CA" } }) {
      edges {
        node {
          mainMenu {
            title
            slug
            node_locale
          }
        }
      }
    }
  }
`
