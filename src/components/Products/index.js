import React from 'react';
import Img from 'gatsby-image';
import Fade from 'react-reveal/Fade';
import { Dialog } from '@reach/dialog';
import '@reach/dialog/styles.css';

import './products.scss';
// https://416serg.me/building-a-custom-accessible-image-lightbox-in-gatsbyjs/
class Products extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hover: false,
      showLightbox: false,
      selectedImage: null,
      moreData: null
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
//    console.log(items);
    const { selectedImage, showLightbox, moreData } = this.state;
    return (
      <>
        <div className='product-content'>
          <Fade cascade bottom delay={600}>
          <div className='stack'>
            {items.map((item, index) => (
              <div className='bgrid product-item' key={index}>
                <div
                  key={index}
                  className={`product-item__link${ this.state.hover ? ' video__item' : ''}`}
                  data-type={ item.video ? 'with-video' : 'no-video'}
                  type='button'
                  onMouseEnter={item.video ? this.hoverOn : () => true }
                  onMouseLeave={item.video ? this.hoverOff : () => true }
                  onClick={() =>
                    this.setState({
                      showLightbox: true,
                      selectedImage: item.image,
                      moreData: {
                        title: item.title,
                        description: item.description.childMarkdownRemark.html
                      }
                    })
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
        {showLightbox && (
          <Dialog
            className='modal'
            onDismiss={() => this.setState({ showLightbox: false })}
          >
            <div className='modal__header'>
              <Img fluid={selectedImage.fluid} />
            </div>
            <div className='modal__content'>
              <div className='modal__content__name'>
                {moreData.title}
              </div>
              <div
                dangerouslySetInnerHTML={{
                __html: moreData.description
              }}
            />
            </div>
            <div className='modal__footer'>
              <button
                type='button'
                onClick={() => this.setState({ showLightbox: false })}
              >
                Close
              </button>
            </div>
          </Dialog>
        )}
      </>
    );
  }
}


export default Products;
