import React, {createRef} from 'react';
import ReactDOM from 'react-dom';
import Img from 'gatsby-image';
import Fade from 'react-reveal/Fade';
import ProductImageVideo from './ProductImageVideo';
import ProductImage from './productImage';
import ProductYoutube from './productYoutube';
import Product from './product';
import SVG from '../SVG';

import './fixed_ratios.scss';
import './grid.scss';
import './products.scss';
// https://416serg.me/building-a-custom-accessible-image-lightbox-in-gatsbyjs/

class Products extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hover: false,
    };
  }
  hoverOn = (e) => {
    this.setState({ hover: true });
    e.currentTarget.querySelector('.product__video').play()
  }

  hoverOff = (e) => {
    this.setState({ hover: false });
    e.currentTarget.querySelector('.product__video').pause();
  }

  render() {
    const items = this.props.data;
    return (
      <>
        <div className='product-content'>
          <Fade cascade bottom delay={600}>
          <div className="brick-wall">
            {items.map((item, index) => {
              return(
                <div
                  key={index}
                  data-ref={`vidRef${index}`}
                  className={`brick brick-light brick-${index + 1} ${ item.youtube ? ' brick-double brick-video' : ''}`}
                  onMouseEnter={item.video && item.image ? this.hoverOn : () => true }
                  onMouseLeave={item.video && item.image ? this.hoverOff : () => true }
                  onClick={() => {
                      ReactDOM.render(<Product data={item} />, document.getElementById('brick-overlay'))
                    }
                  }
                  >
                  { item.image && !item.video && !item.youtube ? <ProductImage data={item}/> : null }
                  { item.video ? <ProductImageVideo data={item} index={index} /> : null }
                  { item.youtube ? <ProductYoutube data={item}/> : null }
                </div>
              )}
            )}
          </div>
          </Fade>
        </div>
        <div className="brick-overlay" id="brick-overlay"></div>
         {/* <Product
          image={selectedImage}
          title={moreData.title}
          description={moreData.description}
         /> */}
      </>
    );
  }
}


export default Products;
