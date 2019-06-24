import React from 'react'
import PropTypes from 'prop-types'
import Img from 'gatsby-image';
import styled from 'styled-components'

const Wrapper = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fit,minmax(320px, 1fr));
  grid-gap: 1rem;
  margin: 2rem 0;
  .product__content {
    display: none;
  }
`

const Grid = props => {
  const products = props.data;
  //console.log(props.data);
  return (
    <Wrapper>
      {products.map((product, index) => (
        <div key={index} className="product">
          <Img fluid={product.node.image.fluid} />
          <div className="product__content">
            <h2>{product.node.title}</h2>
            <div
                dangerouslySetInnerHTML={{
                __html: product.node.description.childMarkdownRemark.html
              }}
            />
          </div>
        </div>
      ))}
  </Wrapper>
  )
}

Grid.propTypes = {
  locale: PropTypes.string
}

export default Grid;