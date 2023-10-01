import React from 'react'
import Image from 'next/image'
import banner1 from "../public/1.png"
import banner2 from "../public/2.png"

import banner3 from "../public/3.png"

import banner4 from "../public/4.png"


const Hero = () => {
  return (
    <div
    id="FakeShopCarouselInterval"
    className="carousel slide"
    data-bs-ride="carousel"
  >
    <div className="carousel-inner"  >
      <div className="carousel-item active" data-bs-interval="10000">
        <Image src={banner1} className="d-block w-100 h-50" alt="banner-image" loading="lazy" />
      </div>
      <div className="carousel-item" data-bs-interval="2000">
        <Image src={banner2} className="d-block w-100 h-50" alt="banner-image" loading="lazy" />
      </div>
      <div className="carousel-item" data-bs-interval="2000">
        <Image src={banner3} className="d-block w-100 h-50" alt="banner-image" loading="lazy"/>
      </div>
      <div className="carousel-item" data-bs-interval="2000">
        <Image src={banner4} className="d-block w-100 h-50" alt="banner-image"  loading="lazy"/>
      </div>
    </div>
    <button
      className="carousel-control-prev"
      type="button"
      data-bs-target="#FakeShopCarouselInterval"
      data-bs-slide="prev"
    >
      <span className="carousel-control-prev-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Previous</span>
    </button>
    <button
      className="carousel-control-next"
      type="button"
      data-bs-target="#FakeShopCarouselInterval"
      data-bs-slide="next"
    >
      <span className="carousel-control-next-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Next</span>
    </button>
  </div>
  )
}

export default Hero
