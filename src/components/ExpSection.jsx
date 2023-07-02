import React, { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { IoDiamondOutline } from "react-icons/io5";
import ExpItems from './ExpItems';


const ExpSection = () => {
  useEffect(() => {
    AOS.init();
  }, [])
  return (
    <div  id='expperience' className='exp-container'>
        
     <span data-aos="fade-up"
    data-aos-duration="1800"  style={{display:"flex",alignItems:"center",justifyContent:"center",height:"300px",flexDirection:"column"}}> 
      <p style={{textAlign:"center", backgroundColor:"rgb(245, 214, 43)",marginBottom:20}}  >Resume</p>
      <h1 style={{textAlign:"center",fontSize:40}}>A summary of My Resume</h1>
     </span>    
     <div data-aos="fade-up"
    data-aos-duration="1800" className='exp-box'>
       <span style={{background:"rgb(245, 214, 43)" ,width:100,height:30,display:"flex",alignItems:"center",justifyContent:"center"}}><h4>July , 2021</h4></span>
       <span className='diamond-sec'>
        <button className='diamond-btn'><IoDiamondOutline className='diamond-icon'/></button>
        <hr className='row'></hr>
       </span>
       <div className='exp-caption'>
           <h3 style={{marginBottom:15,borderBottom:"3px solid rgb(255, 191, 0)",width:90,paddingBottom:8}}>Graduation </h3>
           <p style={{marginBottom:10,color:"gray"}}>Bachelors's in Computer Application </p>
           <a href='https://www.svimi.org/' style={{marginBottom:20,color:"black" ,fontSize:"12px",fontWeight:"bold",textDecoration:"none"}}>Shri Vaishnav Institute of Management, DAVV , Indore</a>

           <p style={{color:"gray"}}>BCA, or Bachelor of Computer Applications, is an undergraduate degree program that focuses on computer science and its practical applications.</p>
       </div>
     </div>
        <  ExpItems />
    </div>
  )
}

export default ExpSection
