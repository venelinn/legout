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
      <div>
        <Zoom center delay={2000} >
        <button
          className="btn brick-close active"
          onClick={() => console.log('closeee')}
          >
            <i className="icon icon-close"><SVG icon='close' /></i>
        </button>
        </Zoom >

        <article className="story">
          <Fade delay={500} bottom>
          <div className='story-media'>
            <Img fluid={item.image.fluid} />
          </div>
          </Fade>
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
        </article>
      </div>
    </Slide>
  )
};

export default Product;
