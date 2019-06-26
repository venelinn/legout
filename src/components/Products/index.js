import React from 'react';
import ReactDOM from 'react-dom';
import Img from 'gatsby-image';
import Fade from 'react-reveal/Fade';
import Product from './product';

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
    this.refs[e.target.dataset.ref].play();
  }

  hoverOff = (e) => {
    this.setState({ hover: false });
    this.refs[e.target.dataset.ref].pause();
  }

  render() {
    const items = this.props.data;
    const { hover } = this.state;
    return (
      <>
        <div className='product-content'>
          <Fade cascade bottom delay={600}>
          <div className="brick-wall">
            {items.map((item, index) => (
              <div className={`brick brick-${index + 1} ${ item.youtube ? ' brick-double brick-video' : ''}`} key={index}>
                <div
                  key={index}
                  className={`product-item__link${ this.state.hover ? ' video__item' : ''}`}
                  data-type={ item.video ? 'with-video' : 'no-video'}
                  type='button'
                  onMouseEnter={item.video ? this.hoverOn : () => true }
                  onMouseLeave={item.video ? this.hoverOff : () => true }
                  onClick={() => {
                    ReactDOM.render(<Product data={items} />, document.getElementById('brick-overlay'))
                  }

                  }
                >
                  <Img fluid={item.image.fluid} />
                  {item.video ? (
                  <div className='product-item-video'>
                    <video className="product__video" data-ref={`vidRef${index}`} ref={`vidRef${index}`} preload="auto">
                      <source src={item.video.file.url} type={item.video.file.contentType} />
                    </video>
                  </div>
                  ) : ''}
                </div>
              </div>
            ))}
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
