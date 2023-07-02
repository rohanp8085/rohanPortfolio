import React, { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import foodimg from '../assets/react/foodstore.png'
import ecommerceimg from '../assets/react/ecommerce.png'
import qrmaker from '../assets/react/qrmaker.png'
import expense from '../assets/react/expense.png'
import weather from '../assets/js/weather.png'
import landing from '../assets/js/landing.png'
import microsoft from '../assets/html/microsoft.png'
import signup from '../assets/js/signup.png'
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
import qoute from '../assets/react/qoute.png'
import calander from '../assets/js/calander.png'
import clock from '../assets/js/clock.png'
import fer from '../assets/js/fer.converter.png'
import multi from '../assets/js/multi.png'
import todo from '../assets/js/todo.png'
import auth from '../assets/react/auth.png'
import ai from '../assets/react/ai.png'







import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/pagination";


import { Grid} from "swiper";



const AllProject = () => {

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
        spaceBetween={40}
        pagination={{
          clickable: true,
        }}
        modules={[Grid]}
        className="mySwiper"
      >
        <SwiperSlide >
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
            <a href="https://myrestaurant-fooddelivery.netlify.app/" target='_blank'>Live preview</a>
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
         <img className='foodimg' src={ai} alt="" />
          <figcaption>
            <h2> JavaScript to Python</h2>
            <p> Seamlessly Convert JavaScript to Python with AI-Powered Conversion Website</p>
            <a href="https://javascriptopython.netlify.app/" target='_blank'>Live preview</a>
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
         <img className='foodimg' src={landing} alt="" />
          <figcaption>
            <h2>Double landing page</h2>
            <p>  Introducing Our Double landing page </p>
            <a href="https://rohanp8085.github.io/doublelandingpage/" target='_blank'>Live preview</a>
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

export default AllProject
