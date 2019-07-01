import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Img from "gatsby-image"
import Fade from 'react-reveal/Fade';
import SVG from '../components/SVG';
import Slider from "react-slick";
import Plyr from 'react-plyr';


import "slick-carousel/slick/slick.css";
//import "slick-carousel/slick/slick-theme.css";

import "./Hero.scss"

class Hero extends React.Component {
  constructor(props) {
    super(props);
  }

  next = () => {
    this.slider.slickNext();
  }
  previous = () => {
    this.slider.slickPrev();
  }

  render() {
    const hero = this.props.hero;
    var item_length = hero.image.length;
    //console.log(item_length);
    var settings = {
      dots: false,
      infinite: false,
      arrows: false,
      //arrows: hero.image.length > 1 ? true : false,
      speed: 600,
      slidesToShow: 1,
      slidesToScroll: 1,
      cssEase:"cubic-bezier(0.87, 0.03, 0.41, 0.9)",
      afterChange: function(index){
        // console.log(index);
      }
    };
    const ytIframe = '<iframe className="embed-player slide-media" width="980" height="520" src="https://www.youtube.com/embed/QV5EXOFcdrQ?enablejsapi=1&controls=0&fs=0&iv_load_policy=3&rel=0&showinfo=0&loop=1&playlist=QV5EXOFcdrQ&start=1" frameborder="0" allowfullscreen></iframe>'
    return (
      <Fade delay={1000}>
        <div className="hero">
        <Slider ref={c => (this.slider = c)} {...settings}>
          {hero.image.map((item, index, arr) => {
            return (
              <div
                key={index}
                className="slick__item"
              >
                { index === arr.length - 10 ? (
                  <>
                    <Plyr
                      type="youtube" // or "vimeo"
                      autoPlay
                      playsInline
                      muted
                      videoId="QV5EXOFcdrQ"
                    />
                    <span className="btn-play">
                      <i className="icon icon-play"><SVG icon='play' /></i>
                    </span>
                  </>
                  ) : (
                    <Img fluid={item.fluid}/>
                  )
                }
              </div>
            )
          })
          }
        </Slider>

        <div className={`hero__container section${hero.image.length < 2 ? ' no--slider' : ''}`}>
          {hero.image.length > 1 ? (
          <div className="slick__nav">
            <button className="slick__arrow slick__arrow--prev" onClick={this.previous}>
              <span className="slick__icon"></span>
              <span className="is-accessible">Previous</span>
            </button>
            <button className="slick__arrow slick__arrow--next" onClick={this.next}>
              <span className="slick__icon"></span>
              <span className="is-accessible">Previous</span>
            </button>
          </div>
          ) : ''}
          <div className="hero__container__data" >
            <div className="hero__title">{hero.title}</div>
            <p className="hero__desc">{hero.description.description}</p>
          </div>
        </div>
      </div>
      </Fade>
    );
  }
}

Hero.propTypes = {
  hero: PropTypes.object
}

export default Hero;