import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Img from "gatsby-image"
import Fade from 'react-reveal/Fade';

import Slider from "react-slick";

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
    console.log(item_length);
    var settings = {
      dots: false,
      infinite: false,
      arrows: false,
      //arrows: hero.image.length > 1 ? true : false,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      afterChange: function(index){
        console.log(index);
      }
    };
    return (
      <Fade delay={1000}>
        <div className="hero">
        <Slider ref={c => (this.slider = c)} {...settings}>
          {hero.image.map((item, index) => (
            <Img key={index} fluid={item.fluid}/>
            ))
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