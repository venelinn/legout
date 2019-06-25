import React from "react"
import * as PropTypes from "prop-types"
import { graphql } from 'gatsby'

import Layout from "../components/layout"
import SEO from "../components/seo"
import Recipes from "../components/RecipesNav"
import Products from "../components/Products"
import Hero from "../components/Hero"

const propTypes = {
  data: PropTypes.object,
}

class IndexPage extends React.Component {
  render() {
    const hero = this.props.data.hero.edges[0].node;
    const products = this.props.data.product.edges.map( (item) => {return item.node});
    const recipes = this.props.data.recipes.edges[0].node.mainMenu;
    return (
      <Layout data={this.props.data} location={this.props.location} >
        <SEO title="Liberte" lang='en' />
        <Hero hero={hero} />
        <div className="section">
          <Recipes data={recipes} lang={this.props.pageContext.langKey} />
          <Products data={products} />
        </div>

      </Layout>
    )
  }
}

IndexPage.propTypes = propTypes

export default IndexPage

export const pageQuery = graphql`
  query PageEnQuery {
    site {
      siteMetadata {
        languages {
          defaultLangKey
          langs
        }
      }
    }
    hero: allContentfulHomeHero(filter: { node_locale: { eq: "en-US" } }) {
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
    product: allContentfulProduct(filter: { node_locale: { eq: "en-US" } }) {
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
          video {
            file {
              url
              fileName
              contentType
            }
          }
          node_locale
        }
      }
    }
    recipes: allContentfulNavigation(filter: { node_locale: { eq: "en-US" } }) {
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
