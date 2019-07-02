import React from 'react';
import Img from 'gatsby-image';
import SVG from '../SVG';
import Reveal from 'react-reveal/Reveal';
import Fade from 'react-reveal/Fade';
import Zoom from 'react-reveal/Zoom';
import Slide from 'react-reveal/Slide';


import './story.scss';

const Product = (props) => {
  const item = props.data;
  return (
    <Slide top>
      <div className={`brick-overlay${ item.youtube ? ' brick-overlay-video' : ''}`}>
        <Zoom center delay={2000} >
        <button
          className="btn brick-close active"
          onClick={() => console.log('closeee')}
          >
            <i className="icon icon-close"><SVG icon='close' /></i>
        </button>
        </Zoom >

        <article className={`story${ item.youtube ? ' story-video' : ''}`}>
          <Fade delay={500} bottom>
            <div className={`story-media fixed-ratio ${ item.youtube ? 'fixed-ratio-widescreen' : 'fixed-ratio-square'}`}>
              <div className="fixed-ratio-content">
                { item.video ? (
                <video playsInline={true} muted autoPlay preload="auto">
                  <source src={item.video.file.url} type={item.video.file.contentType} />
                </video>
              ) : (
                <Img fluid={item.image.fluid} />
              )}
              </div>
            </div>
          </Fade>
          {!item.youtube ? (
          <Fade cascade bottom delay={1000}>
          <div className='story-content'>
            <div className='story-content__wrap'>
              <div className='story-title'>{item.title}</div>
              <div
                dangerouslySetInnerHTML={{
                  __html: item.description.childMarkdownRemark.html
                }}
                />
              <div className="story-actions">icons here</div>
            </div>
          </div>
          </Fade>
          ) : '' }
        </article>
      </div>
    </Slide>
  )
};

export default Product;
