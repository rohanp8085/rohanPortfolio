import React, { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import microsoft from '../assets/html/microsoft.png'
import dashboard from '../assets/html/dashboard.png'
import descente from '../assets/html/descente.png'
import ecommerce2 from '../assets/html/ecommerce1.png'
import engadged from '../assets/html/engadged.png'
import galary from '../assets/html/galary.png'
import micro from '../assets/html/micro.png'
import netflix from '../assets/html/netflix.png'
import oneplus from '../assets/html/onplus.png'
import plural from '../assets/html/plural.png'
import prime from '../assets/html/prime.png'
import squarespace from '../assets/html/squarespace.png'
import wersty from '../assets/html/wersty.png'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/pagination";


import { Grid, Pagination } from "swiper";

const HtmlSection = () => {

  useEffect(() => {
    
    AOS.init();
  }, [])
  return (
    <Swiper 
    
        slidesPerView={3}
        grid={{
          rows: 2,
        }}
        spaceBetween={40}
        pagination={{
          clickable: true,
        }}
        modules={[Grid, Pagination]}
        className="mySwiper"
      >
    <SwiperSlide>
        <figure className="snip0016">
         <img className='foodimg' src={descente} alt="" />
          <figcaption>
            <h2> website  Ui</h2>
            <p>Seamlessly Intuitive UI Design for a Seamless Journey</p>
            <a href="https://rohanp8085.github.io/descente/" target='_blank'>Live preview</a>
        </figcaption>
          </figure>
          </SwiperSlide>
          <SwiperSlide>
        <figure className="snip0016">
         <img className='foodimg' src={ecommerce2} alt="" />
          <figcaption>
            <h2>Ecommerce UI</h2>
            <p>Engaging Ecommerce UI for Seamless Online Shopping Experiences</p>
            <a href="https://rohanp8085.github.io/E-commerce-website/" target='_blank'>Live preview</a>
        </figcaption>
          </figure>
          </SwiperSlide>
          <SwiperSlide>
        <figure className="snip0016">
         <img className='foodimg' src={engadged} alt="" />
          <figcaption>
            <h2>engadget website</h2>
            <p> Explore the World of Gadgets and Tech Trends on Our Engadget-inspired Clone Website</p>
            <a href="https://rohanp8085.github.io/Engadgat/" target='_blank'>Live preview</a>
        </figcaption>
          </figure>
          </SwiperSlide>
          <SwiperSlide>
        <figure className="snip0016">
         <img className='foodimg' src={galary} alt="" />
          <figcaption>
            <h2>Random Image Generator</h2>
            <p> Discover Endless Inspiration with our Random Image Generator</p>
            <a href="https://rohanp8085.github.io/Randomimage/" target='_blank'>Live preview</a>
        </figcaption>
          </figure>
          </SwiperSlide>
          <SwiperSlide>
        <figure className="snip0016">
         <img className='foodimg' src={micro} alt="" />
          <figcaption>
            <h2>Microsoft Website Clone</h2>
            <p>  Introducing Our Microsoft Website Clone</p>
            <a href="https://rohanp8085.github.io/microsoft-log-in-page/" target='_blank'>Live preview</a>
        </figcaption>
          </figure>
          </SwiperSlide>
          <SwiperSlide>
        <figure className="snip0016">
         <img className='foodimg' src={netflix} alt="" />
          <figcaption>
            <h2>netflix Website Clone</h2>
            <p>  Introducing Our netflix Website Clone</p>
            <a href="https://rohanp8085.github.io/netflix-clone/" target='_blank'>Live preview</a>
        </figcaption>
          </figure>
          </SwiperSlide>
          <SwiperSlide>
        <figure className="snip0016">
         <img className='foodimg' src={oneplus} alt="" />
          <figcaption>
            <h2>oneplus Website Clone</h2>
            <p>  Introducing Our oneplus Website Clone</p>
            <a href="https://rohanp8085.github.io/oneplus/" target='_blank'>Live preview</a>
        </figcaption>
          </figure>
          </SwiperSlide>
          <SwiperSlide>
        <figure className="snip0016">
         <img className='foodimg' src={plural} alt="" />
          <figcaption>
            <h2>pluralsight Website Clone</h2>
            <p>  Introducing Our pluralsight Website Clone</p>
            <a href="https://rohanp8085.github.io/PLURALSHIT/" target='_blank'>Live preview</a>
        </figcaption>
          </figure>
          </SwiperSlide>
          <SwiperSlide>
        <figure className="snip0016">
         <img className='foodimg' src={prime} alt="" />
          <figcaption>
            <h2>Primevideo Website Clone</h2>
            <p>  Introducing Our Primevideo Website Clone</p>
            <a href="https://rohanp8085.github.io/primevideo-website-/" target='_blank'>Live preview</a>
        </figcaption>
          </figure>
          </SwiperSlide>
          <SwiperSlide>
        <figure className="snip0016">
         <img className='foodimg' src={squarespace} alt="" />
          <figcaption>
            <h2>squarespace Website Clone</h2>
            <p>  Introducing Our squarespace Website Clone</p>
            <a href="https://myrestaurant-fooddelivery.netlify.app/" target='_blank'>Live preview</a>
        </figcaption>
          </figure>
          </SwiperSlide>
          <SwiperSlide>
        <figure className="snip0016">
         <img className='foodimg' src={wersty} alt="" />
          <figcaption>
            <h2>ui Clone</h2>
            <p>  Introducing Our ui </p>
            <a href="https://rohanp8085.github.io/warsty-website/" target='_blank'>Live preview</a>
        </figcaption>
          </figure>
          </SwiperSlide>
          <SwiperSlide>
        <figure className="snip0016">
         <img className='foodimg' src={microsoft} alt="" />
          <figcaption>
            <h2>Microsoft website Clone</h2>
            <p>  Introducing Our Microsoft website Clone </p>
            <a href="https://rohanp8085.github.io/microsoft-website-/" target='_blank'>Live preview</a>
        </figcaption>
          </figure>
          </SwiperSlide>
          <SwiperSlide>
        <figure className="snip0016">
         <img className='foodimg' src={dashboard} alt="" />
          <figcaption>
            <h2>Dashboard Ui</h2>
            <p>  Introducing Our dashboard ui </p>
            <a href="https://rohanp8085.github.io/dashboard-/" target='_blank'>Live preview</a>
        </figcaption>
          </figure>
          </SwiperSlide>
      </Swiper>
  )
}

export default HtmlSection
