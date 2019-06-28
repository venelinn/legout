import React, {createRef} from 'react';
import ReactDOM from 'react-dom';
import Img from 'gatsby-image';
import Fade from 'react-reveal/Fade';
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
    console.log(this.refs[e.target.dataset.ref])
    this.refs[e.target.dataset.ref].play();
  }

  hoverOff = (e) => {
    this.setState({ hover: false });
    this.refs[e.target.dataset.ref].pause();
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

              <div className={`brick brick-light brick-${index + 1} ${ item.youtube ? ' brick-double brick-video' : ''}`} key={index}>
                <div
                  key={index}
                  className={`fixed-ratio${ item.video && item.image ? ' video__item' : ''}${ item.youtube ? ' fixed-ratio-double-brick' : ' fixed-ratio-square'} product-item__link`}
                  type='button'
                  onMouseEnter={item.video && item.image ? this.hoverOn : () => true }
                  onMouseLeave={item.video && item.image ? this.hoverOff : () => true }
                  onClick={() => {
                      ReactDOM.render(<Product data={item} />, document.getElementById('brick-overlay'))
                    }
                  }
                >
                  <div className="fixed-ratio-content">
                    <Img fluid={item.image.fluid} />
                    {item.video ? (
                      <div className='product-item-video'>
                        <video className="product__video gif-video" data-ref={`vidRef${index}`} ref={`vidRef${index}`} preload="auto">
                          <source src={item.video.file.url} type={item.video.file.contentType} />
                        </video>
                      </div>
                    ) : ''}
                    {item.youtube ? (
                      <span class="btn-play">
                        <i class="icon icon-play"><SVG icon='play' /></i>
                      </span>
                    ) : (
                      <span className="brick-plus">
                        <i className="icon icon-plus"><SVG icon='plus' /></i>
                      </span>
                    )}
                  </div >
                </div>
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
