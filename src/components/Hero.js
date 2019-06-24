import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Img from "gatsby-image"

import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";

import "./Hero.scss"

const Hero = (props) => {
  const hero = props.hero;
  const handleOnDragStart = e => e.preventDefault()
  return (
    <div className="hero">
      <AliceCarousel
        fadeOutAnimation={true}
        dotsDisabled={true}
      >
        {hero.image.map((item, index) => (
          <Img key={index} fluid={item.fluid}/>
          ))
        }
      </AliceCarousel>

      <div className="hero__container section">
          <div class="hero__title">{hero.title}</div>
          <p class="hero__desc">{hero.description.description}</p>
      </div>
    </div>
  )
}



Hero.propTypes = {
  hero: PropTypes.object
}

export default Hero;