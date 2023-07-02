import React, { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/pagination";
import { Grid, Pagination } from "swiper";
import foodimg from '../assets/react/foodstore.png'
import ecommerceimg from '../assets/react/ecommerce.png'
import qrmaker from '../assets/react/qrmaker.png'
import expense from '../assets/react/expense.png'
import qoute from '../assets/react/qoute.png'
import todo from '../assets/js/todo.png'
import auth from '../assets/react/auth.png'
import ai from '../assets/react/ai.png'
const ReactSection = () => {

  useEffect(() => {
    AOS.init();
  }, [])
  return (
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
         <img className='foodimg' src={foodimg} alt="" />
          <figcaption>
            <h2> Foodstore website </h2>
            <p>Food Haven: Delightful Eats at Your Fingertips</p>
            <a href="https://myrestaurant-fooddelivery.netlify.app/" target='_blank'>Live preview</a>
        </figcaption>
          </figure>
          </SwiperSlide>
          <SwiperSlide>
        <figure className="snip0016">
         <img className='foodimg' src={ecommerceimg} alt="" />
          <figcaption>
            <h2>ECommerce website</h2>
            <p> Your Gateway to Unlimited Online Shopping Delights</p>
            <a href="https://glittery-phoenix-5bc296.netlify.app/" target='_blank'>Live preview</a>
        </figcaption>
          </figure>
          </SwiperSlide>
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
         <img className='foodimg' src={auth} alt="" />
          <figcaption>
            <h2> Auth App </h2>
            <p>Seamless access, secure control: Experience hassle-free login and logout with our app</p>
            <a href="#">Live preview</a>
        </figcaption>
          </figure>
           </SwiperSlide>
           <SwiperSlide>
        <figure className="snip0016">
         <img className='foodimg' src={expense} alt="" />
          <figcaption>
            <h2>Expense Manager App</h2>
            <p>Simplify Your Expenses, Maximize Your Savings</p>
            <a href="https://expense-manager-website.netlify.app/" target='_blank'>Live preview</a>
        </figcaption>
          </figure>
           </SwiperSlide>
           <SwiperSlide>
        <figure className="snip0016">
         <img className='foodimg' src={ai} alt="" />
          <figcaption>
            <h2> JavaScript to Python</h2>
            <p> Seamlessly Convert JavaScript to Python with AI-Powered Conversion Website</p>
            <a href="https://javascriptopython.netlify.app/" target='_blank'>Live preview</a>
        </figcaption>
          </figure>
           </SwiperSlide>
      </Swiper>
  )
}

export default ReactSection
