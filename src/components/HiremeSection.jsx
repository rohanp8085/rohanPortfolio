import React, { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Link } from 'react-scroll';
const HiremeSection = () => {
  useEffect(() => {
    AOS.init();
  }, [])
  return (
    <div className='hireme'>
        
       <h1 data-aos="fade-up"
    data-aos-duration="1800"  className='hiringtitle'>Interested in working with me?</h1>
     <Link to='contact'><button data-aos="fade-up"data-aos-duration="1800"  className='hire-btn'>Hire me!</button></Link>
    </div>
  )
}

export default HiremeSection
