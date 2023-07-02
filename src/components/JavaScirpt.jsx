import React, { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/pagination";
import qrmaker from '../assets/react/qrmaker.png'
import weather from '../assets/js/weather.png'
import signup from '../assets/js/signup.png'
import qoute from '../assets/react/qoute.png'
import calander from '../assets/js/calander.png'
import clock from '../assets/js/clock.png'
import fer from '../assets/js/fer.converter.png'
import multi from '../assets/js/multi.png'
import todo from '../assets/js/todo.png'




import { Grid, Pagination } from "swiper";

const JavaScirpt = () => {

  useEffect(() => {
    
    AOS.init();
  }, [])
  return (
    <>
     <Swiper 
        slidesPerView={3}
        grid={{
          rows: 2,
        }}
        spaceBetween={20}
        pagination={{
          clickable: true,
        }}
        modules={[Grid, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
        <figure className="snip0016">
         <img className='foodimg' src={qrmaker} alt="" />
          <figcaption>
            <h2>   Qr-Code Generator</h2>
            <p>QR Code Magic: Generate and Unlock the Power of Scannable Codes</p>
            <a href="https://qr-maker-eight.vercel.app/" target='_blank'>Live preview</a>
        </figcaption>
          </figure>
          </SwiperSlide>
          <SwiperSlide>
        <figure className="snip0016">
         <img className='foodimg' src={qoute} alt="" />
          <figcaption>
            <h2>   Random qoute Generator</h2>
            <p>Unleash inspiration, one quote at a time.</p>
            <a href="https://qoute-app-website.netlify.app/" target='_blank'>Live preview</a>
        </figcaption>
          </figure>
          </SwiperSlide>
          <SwiperSlide>
        <figure className="snip0016">
         <img className='foodimg' src={todo} alt="" />
          <figcaption>
            <h2> Todo App </h2>
            <p>Effortlessly master your to-dos: Unleash productivity with our powerful todo app</p>
            <a href="https://todo-app-delta-six.vercel.app/" target='_blank'>Live preview</a>
        </figcaption>
          </figure>
          </SwiperSlide>
          <SwiperSlide>
        <figure className="snip0016">
         <img className='foodimg' src={weather} alt="" />
          <figcaption>
            <h2> Weather App </h2>
            <p>Stay ahead of the forecast: Explore weather updates with our interactive website</p>
            <a href="https://rohanp8085.github.io/weather-app/" target='_blank'>Live preview</a>
        </figcaption>
          </figure>
           </SwiperSlide>
           <SwiperSlide>
        <figure className="snip0016">
         <img className='foodimg' src={multi} alt="" />
          <figcaption>
            <h2> Multiplication App</h2>
            <p>Multiply Your Math Skills</p>
            <a href="https://rohanp8085.github.io/multiplication-app/" target='_blank'>Live preview</a>
        </figcaption>
          </figure>
           </SwiperSlide>
           <SwiperSlide>
        <figure className="snip0016">
         <img className='foodimg' src={calander} alt="" />
          <figcaption>
            <h2>Mini Calendar</h2>
            <p> Your All-in-One Calendar Website for Efficient Scheduling and Planning</p>
            <a href="https://rohanp8085.github.io/Mini-calendar/" target='_blank'>Live preview</a>
        </figcaption>
          </figure>
           </SwiperSlide>
           <SwiperSlide>
        <figure className="snip0016">
         <img className='foodimg' src={clock} alt="" />
          <figcaption>
            <h2>Digital Clock</h2>
            <p>Time in Focus - Experience Precision and Elegance with our Digital Clock</p>
            <a href="https://rohanp8085.github.io/Digital-Clock/" target='_blank'>Live preview</a>
        </figcaption>
          </figure>
           </SwiperSlide>
           <SwiperSlide>
        <figure className="snip0016">
         <img className='foodimg' src={fer} alt="" />
          <figcaption>
            <h2>Fahrenheit to Celsius</h2>
            <p>Effortlessly Convert Fahrenheit to Celsius with our User-Friendly Website</p>
            <a href="https://rohanp8085.github.io/FahrenheittoCelsius/" target='_blank'>Live preview</a>
        </figcaption>
          </figure>
           </SwiperSlide>
           <SwiperSlide>
        <figure className="snip0016">
         <img className='foodimg' src={signup} alt="" />
          <figcaption>
            <h2>Signup & login form</h2>
            <p>  Introducing Our Signup & login form </p>
            <a href="https://rohanp8085.github.io/signup-login-form/" target='_blank'>Live preview</a>
        </figcaption>
          </figure>
          </SwiperSlide>
      </Swiper>
    </>
  )
}

export default JavaScirpt
