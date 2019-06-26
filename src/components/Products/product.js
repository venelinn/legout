import React from 'react';
import Img from 'gatsby-image';
import SVG from '../SVG';
import Fade from 'react-reveal/Fade';

import './story.scss';

const Product = (props) => {
  console.log(props);
  const item = props.data;
  return (
      <div className="brick-overlay">
        <button
          className="btn brick-close active"
          onClick={() => console.log('closeee')}
          >
          <i className="icon icon-close"><SVG icon='close' /></i>
        </button>

        <article className="story">
          <Fade delay={500} bottom>
          <div className='story-media'>
            <Img fluid={item.image.fluid} />
          </div>
          </Fade>
          <Fade cascade bottom delay={1000}>
          <div className='story-content'>
            <div className='story-title'>{item.title}</div>
            <div
              dangerouslySetInnerHTML={{
              __html: item.description.childMarkdownRemark.html
            }}
          />
          </div>
          </Fade>
        </article>
      </div>
  )
};

export default Product;
