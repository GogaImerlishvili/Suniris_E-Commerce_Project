import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { A11y,Autoplay,Pagination,Navigation } from 'swiper/modules';
import 'swiper/css/bundle';
import "./slider.css"

const Slider = ({slides}) => {
  if(slides){
  return (
    <Swiper
    className="swiper"
    modules={[A11y,Autoplay]}
    spaceBetween={5}
    slidesPerView={3}
    breakpoints={{
      769: {
        slidesPerView: 3
      }
    }}
    autoplay
  > 
    {slides.map((slide) => (
  <SwiperSlide key={slide.img}>
    <img className='img' src={slide.img} key={slide.id} alt={slide.title} />
    <h1 className='title2'>{slide.title}</h1>
  </SwiperSlide>
    ))}
  </Swiper>
  )
}
}


export default Slider;
