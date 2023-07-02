import React, { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { BsCamera } from 'react-icons/bs';
import { FaPencilRuler, FaTv } from "react-icons/fa";
import {motion} from 'framer-motion'
const SkillSection = () => {

  useEffect(() => {
    AOS.init();
  }, [])
  return (
    <div  data-aos="fade-up"
    data-aos-duration="1500" >
       <div  id='service'  className="skill-sec">
       <p className='skill-text' >What I Do?</p>
        <motion.h1 
             initial={{x: -300}}
             animate={{x: 0}}
             transition={{
              duration : "2",
              delay :"0"
              
             }}
        className='skill-heading'>How I can help your next project</motion.h1>
       </div>
       <div data-aos="fade-up"
    data-aos-duration="1500" className='container-box'>
        <div className="box">
          <span> <FaTv className='tvicon'/></span>
          <h2 className='box-heading'>Web Design</h2>
          <p className='box-text' >Web designing is the process of  planning, conceptualizing, and implementing the plan for designing a website in a way that is functional and offers a good user experience</p>
        </div>
        <div className="box">
          <span> <FaPencilRuler className='tvicon'/></span>
          <h2 className='box-heading'> Development</h2>
          <p className='box-text' >
         Development refers to the process of growth, progress, or advancement, particularly in the context of social, economic, technological, or personal spheres.</p>
        </div>
        <div className="box">
          <span> <BsCamera className='tvicon'/></span>
          <h2 className='box-heading'>Photograpy</h2>
          <p className='box-text' >Photography is the art, science, and practice of capturing and creating images using light. It involves using a camera or other light-sensitive devices to record visual information</p>
        </div>
       </div>

      </div>
  )
}

export default SkillSection
