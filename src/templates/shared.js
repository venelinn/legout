import React from "react"
import * as PropTypes from "prop-types"
import { Link, graphql } from 'gatsby'
import Img from "gatsby-image"
import styled from "styled-components"

import Layout from "../components/layout"
import Hero from '../components/Hero'
import SEO from "../components/seo"
import Recipes from "../components/RecipesNav"
import Products from "../components/Products"

const propTypes = {
  data: PropTypes.object.isRequired,
}

const Wrapper = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fit,320px);
  grid-gap: 1rem;
  margin: 2rem 0;
  .product__content {
    display: none;
  }
`

class sharedTemplate extends React.Component {
  render() {
    //const products = this.props.data.page.products
    // console.log(this.props.data)
    // const hero = this.props.data.page.hero
    //const recipes = this.props.data.recipes.edges[0].node.mainMenu;
    return (
      <Layout data={this.props.data} location={this.props.location}>
        {/* <SEO title={this.props.data.page.title} lang={this.props.data.page.node_locale} /> */}
        {/* {hero  ? (
          <Hero hero={hero[0]} />
        ) : ''} */}
        <div className="section">
          {/* <Recipes data={recipes} lang={this.props.data.page.node_locale.split('-')[0]} /> */}
          {/* <Products data={products} /> */}
        </div>
      </Layout>
    )
  }
}

sharedTemplate.propTypes = propTypes

export default sharedTemplate

export const sharedQuery = graphql`
  query sharedQuery($id: String!) {
    site {
      siteMetadata {
        languages {
          defaultLangKey
          langs
        }
      }
    }
    page: contentfulPage(id: { eq: $id }) {
      id
      title
      node_locale
      hero {
        title
        description {
          description
        }
        assets {
          image {
            fluid(maxWidth: 1500, quality: 80) {
              ...GatsbyContentfulFluid_withWebp_noBase64
            }
          }
        }
      }
      products {
        id
        title
        description {
          childMarkdownRemark {
            html
          }
        }
        image {
          id
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
      }
    }
    recipes: allContentfulNavigation {
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
