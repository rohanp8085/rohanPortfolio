import React, { useEffect, useState } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
// import Box from '@mui/material/Box';
import cercle from '../assets/cercleimage.jpeg'
import { AnimatePresence } from 'framer-motion'
import Typewriter from 'typewriter-effect'
import {motion} from 'framer-motion'
import { BsMessenger  } from "react-icons/bs";
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai'
import { FaFacebookF } from 'react-icons/fa'
import TemporaryDrawer from './Menubar'
import { IoCall } from "react-icons/io5";


const Home = () => {

  const [navbar , setNavbar] = useState(false)

  useEffect(() => {
    AOS.init();
  }, [])

  const changeBackground = () =>{
    if(window.scrollY >= 80){
      setNavbar(true);
    }else{
      setNavbar(false)
    }
  };
  window.addEventListener('scroll', changeBackground)

  return (
    <>
   
     <div id='home' className='container'>
     <nav className={navbar ? 'navbar active' : 'navbar'} >
      
        <h1 className='portfolio'> <hr className='logo-hr' /> <hr  className='logo-hrtwo'/>ROHAN <p className='portfoliopp'>Portfolio</p></h1>
        <a className='ContactNumber' href="tel: +918085020978">
        <h3   style={{display:"flex",alignItems:"center",justifyContent:"center",width:"100%"}}>
          < IoCall style={{marginRight:"12px"}}/>  (+91) 8085020978
         </h3>
        </a>
        <div className="btn-sec">
          <a href="#contact"><button className='talk-btn'>Let's talk</button></a>
          <TemporaryDrawer/>
          
        </div>
        
    </nav>

     <div className="cercle">
       <motion.img
       
       initial ={{opacity : 0, scale : 0,}}
       whileInView={{opacity:1, scale:1}}
       transition={{duration:0.8}} 
        className='cercleimage' src={cercle} alt="" />
        < motion.button
         
        initial ={{opacity : 0, scale : 0,}}
        whileInView={{opacity:1, scale:1}}
        transition={{duration:0.8}}
         className='hy-btn ' > <img className='handimage ' src="https://assets.website-files.com/609cb31ed014c633e4f63d41/609e2ff8b5f04c9dfa1b1eaf_emoji-hello.png" alt="" /> Hi there!</motion.button>
       <motion.button 
        
       initial ={{opacity : 0, scale : 0,}}
       whileInView={{opacity:1, scale:1}}
       transition={{duration:0.8}}
        className='sec-btn res-btn ' > <img className='handimage' src="https://assets.website-files.com/609cb31ed014c633e4f63d41/609e2ff8bb713d42bec6abe6_emoji-notebook.png" alt="" /> Web Developer</motion.button>
       <motion.button
        
       initial ={{opacity : 0, scale : 0,}}
       whileInView={{opacity:1, scale:1}}
       transition={{duration:0.8}}
       className='thrid-btn res-btn ' > <img className='handimage' src="https://assets.website-files.com/609cb31ed014c633e4f63d41/609e2ff8b33bcefa7371b0c8_emoji-target.png" alt="" />Feelancer</motion.button>
       <motion.button
        
       initial ={{opacity : 0, scale : 0,}}
       whileInView={{opacity:1, scale:1}}
       transition={{duration:0.8}}
       className='fourth-btn res-btn ' > <img className='handimage' src="https://assets.website-files.com/609cb31ed014c633e4f63d41/609e2ff88c500051d111df23_emoji-surfing.png" alt="" /> </motion.button>
        <motion.button 
         
        initial ={{opacity : 0, scale : 0,}}
        whileInView={{opacity:1, scale:1}}
        transition={{duration:0.8}}
        className='fifth-btn res-btn' > <img className='handimage' src="https://assets.website-files.com/609cb31ed014c633e4f63d41/609e2ff845bc8418f8dbfe67_emoji-camera.png" alt="" />Photographer</motion.button>
        <motion.button
        
        initial ={{opacity : 0, scale : 0,}}
        whileInView={{opacity:1, scale:1}}
        transition={{duration:0.8}}
        className='sixth-btn res-btn ' > <img className='handimage' src="https://assets.website-files.com/609cb31ed014c633e4f63d41/609e2ff88f07e7d52fe27c2c_emoji-mailbox.png" alt="" /> <span ><p style={{color:"gray",fontSize:"12px",marginRight:"10px"}}>Work with me</p>  <p style={{color:"black", fontWeight:"bold"}}>Request a Quote</p></span> </motion.button>


     </div>
   </div>
   <div  data-aos="fade-up"
    data-aos-duration="3000" id='about' className="second-sec">
    <h5 className='web'>HI THERE ,  <strong style={{color:"black"}}>I'M ROHAN</strong></h5>
     <span className='text-animation'>
     <h1 className='iam' style={{color:"black" , marginRight:"30px" , textAlign:"center"}}>I'm a </h1>
    <h1
    
     className='developers'> <Typewriter options={{autoStart: true,
            loop:true,
            delay : 70,
            typeSpeed : 100,
            deleteSpeed : 80,
            strings : [
              "Full Stack Developer",,
              "Frontend Developer",
              "Web Designer",
              "Thinker ",
              "Creative ",
              
            ]
            }}/></h1>
     </span>
    <AnimatePresence><motion.p
     initial={{opacity:0}}
     animate={{opacity:1}}
     exit={{opacity:0}}
     transition={{duration:6}}
     className='web-text' >I'm a designer & developer with a passion for web design. I enjoy developing simple,  clean and slick websites that provide real value to the end user Thousands of clients have procured exceptional results while working with me.</motion.p>
     </AnimatePresence>
    <div className='contact-sec'>
      <span  className='email-text'>
        <p  style={{color:"gray", fontSize:"18px", fontWeight:"0px"}}>Let's get in touch</p>
        <h4  style={{color:"black"}}>Rohanprajapati3739@gmail.com</h4>
      </span>
      <button  className='msg-btn'><a href='#contact'><  BsMessenger className='msgicon'/></a></button>
      <span   className='social-media '>
      <p id='follow' style={{color:"gray", fontSize:"18px", fontWeight:"0px"}}>Follow Me </p>
       <span className='social-btn'>
       
       
              
              <div className='wrapper'>
                <div className='github homegit' ><p>github</p></div>
                <a href="https://github.com/rohanp8085" target='_blank'><button id='social-buttons'><AiFillGithub/></button></a>
              </div>
              <div className='wrapper linkedin'>
                <div className='github  homegit'><p>Linkedin</p></div>
                <a href="https://www.linkedin.com/in/rohan-prajapati-web-design/" target='_blank'><button id='social-buttons' >< AiFillLinkedin/></button></a>
              </div>
              <div className='wrapper facebook'>
                <div className='github homegit'><p>Facebook</p></div>
               <a href="https://www.facebook.com/rohan.prajapati.5201/" target='_blank'><button className='fb-icon' id='social-buttons'><FaFacebookF/></button></a> 
              </div>
              <div className='wrapper instagram'>
                <div className='github homegit'><p>Instagram</p></div>
                 <a href="https://www.instagram.com/the_rohan09/" target='_blank'><button id='social-buttons'><AiFillInstagram/></button></a>
              </div>
            </span>
       </span>
      
    </div>
   </div>

  
   
    </>
  )
}

export default Home