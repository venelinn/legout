import React from 'react';
import Img from 'gatsby-image';
import SVG from '../SVG';

const ProductImageVideo = (props) => {
  const item = props.data;
  return (
    <div className="fixed-ratio fixed-ratio-square video__item product-item__link">
      <div className="fixed-ratio-content">
        <Img fluid={item.image.fluid} />
        <div className='product-item-video'>
          <video playsInline={true} muted className="product__video gif-video"  preload="auto">
            <source src={item.video.file.url} type={item.video.file.contentType} />
          </video>
        </div>
        <span className="brick-plus">
          <i className="icon icon-plus"><SVG icon='plus' /></i>
        </span>
      </div >
    </div>
  )
};

export default ProductImageVideo
