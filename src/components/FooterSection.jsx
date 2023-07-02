import React, { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { BsFillPersonFill } from "react-icons/bs";
import { AiFillGithub, AiFillInstagram, AiFillLinkedin, AiOutlineMail} from "react-icons/ai";
import { BiMessage, BiTime } from "react-icons/bi";
import { FaFacebookF, FaHome } from "react-icons/fa";
import { IoCall } from "react-icons/io5";
import { GiPlatform } from "react-icons/gi";
import {  Button } from '@mui/material'
import { toast } from 'react-toastify';


const FooterSection = () => {

   const handleSubmit = () =>{
   
       toast.success("Form submited")
   }
  
  useEffect(() => {
    AOS.init();
  }, [])
  return (
    <>
    <div id='contact' className='footer'>
        <div className='form-control'>
         <h1  data-aos="fade-up"
    data-aos-duration="1800"  style={{textAlign:"center",marginBottom:"30PX", fontWeight:500,letterSpacing:1}}>KEEP IN TOUCH</h1>
         <hr data-aos="fade-up"
    data-aos-duration="1800" className='bottom-border' />
         <p data-aos="fade-up"
    data-aos-duration="1800" style={{textAlign:"center",marginTop:"10px"}}>Here you can find me. I'd like to hear from you all. You can hire me, ask me about anything or buy me coffee.</p>
         <div className='address-sec'>
              <div data-aos="fade-up"
    data-aos-duration="1800" className='place-sec'>
                <span className='home-icon'>
                  <FaHome/>
                </span>
                <h4 className='myplace'>MY PLACE</h4>
                <p className='address' style={{textAlign:"center"}}>M 1st 395 janta Quater,nanda nagar indore </p>
              </div>
              <div data-aos="fade-up"
    data-aos-duration="1800" className='place-sec'>
                <span className='home-icon'>
                  <IoCall/>
                </span>
                <h4 className='myplace'>CALL ME</h4>
                <p className='address' style={{textAlign:"center"}}> <a className='social-a'  href="">(+91)-8085020978</a> <br />  <a className='social-a'  href="">  (+91)-8305881411 </a> </p>

              </div>
            </div>
            <div data-aos="fade-up"
    data-aos-duration="1800" className='address-sec'>
              <div className='place-sec'>
                <span className='home-icon'>
                  <AiOutlineMail/>
                </span>
                <h4 className='myplace'>SEND MESSAGE</h4>
                <p className='address' style={{textAlign:"center"}}><a className='social-a'  href=''>Rohanprajapati@gmail.com</a> </p>
              </div>
              <div data-aos="fade-up"
    data-aos-duration="1800" className='place-sec'>
                <span className='home-icon'>
                  <BiTime/>
                </span>
                <h4 className='myplace'>WORK TIME</h4>
                <p className='address' style={{textAlign:"center"}}>Mon - Fri : 11.00 - 6.00</p>
              </div>
            </div>
            <span className='social-links'>
            <p data-aos="fade-up"
    data-aos-duration="1800" >FOLLOW ME HERE :</p>
            <span data-aos="fade-up"
    data-aos-duration="1800" className='footer-btn'>
              
              <div className='wrapper'>
                <div className='github'><p>github</p></div>
                <a href="https://github.com/rohanp8085" target='_blank'><button id='social-buttons'><AiFillGithub/></button></a>
              </div>
              <div className='wrapper linkedin'>
                <div className='github '><p>Linkedin</p></div>
                <a href="https://www.linkedin.com/in/rohan-prajapati-web-design/" target='_blank'><button id='social-buttons' >< AiFillLinkedin/></button></a>
              </div>
              <div className='wrapper facebook'>
                <div className='github'><p>Facebook</p></div>
                <a href="https://www.facebook.com/rohan.prajapati.5201/" target='_blank'><button className='fb-icon' id='social-buttons'><FaFacebookF/></button></a> 
              </div>
              <div className='wrapper instagram'>
                <div className='github'><p>Instagram</p></div>
                <a href="https://www.instagram.com/the_rohan09/" target='_blank'><button id='social-buttons'><AiFillInstagram/></button></a>
              </div>
            </span>
            </span>
        </div>
        <div data-aos="fade-up"
    data-aos-duration="1800" className='text-field'>
         <div data-aos="fade-up"
    data-aos-duration="1800" className='text-box'>
          <span data-aos="flip-left" data-aos-duration="3000" className='small-box'><GiPlatform/></span>
           <form action='https://formspree.io/f/mpzgakpn' target='_blank' method='post' onSubmit={handleSubmit}>
              <h4 data-aos="fade-up"
                 data-aos-duration="1800" style={{color:"white" , margin:"25px"}}>LEAVE ME A MESSAGE</h4>
              <hr data-aos="fade-up"
    data-aos-duration="1800" className='input-hr' />
              <p data-aos="fade-up"
               data-aos-duration="1800"  style={{color:"white" , marginLeft:"25px",marginTop:"35px",fontSize:"13px"}}>You can ask me about anything here, just type your name and e-mail and I'll answer you as soon as possible</p>
               <div className='input-sec'>
                <button className='input-btn'><BsFillPersonFill/></button>
               <span style={{display:"flex",flexDirection:"column"}}>
               <label htmlFor="input">  What is Your Name:</label>
                <input name='name' required className='input' id='input' type="text"  />
               </span>
               </div>
               <div className='input-sec'>
                <button className='input-btn'><AiOutlineMail/></button>
               <span style={{display:"flex",flexDirection:"column"}}>
               <label htmlFor="input"> Your Email Address:</label>
                <input name='email' required className='input' id='input' type="email"  />
               </span>
               </div>
               <div className='input-sec'>
                <button className='input-btn'><BiMessage/></button>
               <span style={{display:"flex",flexDirection:"column"}}>
               <label htmlFor="input"> How can I Help you?:</label>
                <textarea name='message' required className='input' id='input' type="text"  />
               </span>

               </div>
               <div className="send-btn-sec">
               <Button  id='send-btn' type='submit' sx={{width:100,bgcolor:"gold",borderRadius:0,fontSize:10,height:30,color:"black",fontWeight:600}} >s e n d</Button>

               </div>
             
               
           </form>
         </div>
         
        </div>
        
    </div>
  
    </>
  
  )
}

export default FooterSection
