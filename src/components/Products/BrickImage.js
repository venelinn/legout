import React from 'react';
import Img from 'gatsby-image';
import SVG from '../SVG';

const ProductImage = (props) => {
  const item = props.data;
  return (
    <div className="fixed-ratio fixed-ratio-square product-item__link">
      <div className="fixed-ratio-content">
        <Img fluid={item.image.fluid} />
        <span className="brick-plus">
          <i className="icon icon-plus"><SVG icon='plus' /></i>
        </span>
      </div >
    </div>
  )
};

export default ProductImage
