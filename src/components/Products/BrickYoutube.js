import React from 'react';
import Img from 'gatsby-image';
import SVG from '../SVG';

const ProductYoutube = (props) => {
  const item = props.data;
  return (
    <div className="fixed-ratio fixed-ratio-double-brick product-item__link">
      <div className="fixed-ratio-content">
        <Img fluid={item.image.fluid} />
          <span className="btn-play">
            <i className="icon icon-play"><SVG icon='play' /></i>
          </span>
      </div >
    </div>
  )
};

export default ProductYoutube
