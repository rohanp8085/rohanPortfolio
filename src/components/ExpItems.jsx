import React, { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FaPencilRuler } from 'react-icons/fa';

const ExpItems = () => {
  useEffect(() => {
    AOS.init();
  }, [])
  return (
    <div data-aos="fade-up"
    data-aos-duration="2500"  className='exp-box'>
       <span style={{background:"rgb(245, 214, 43)" ,width:100,height:30,display:"flex",alignItems:"center",justifyContent:"center"}}><h4>Dec , 2022</h4></span>
       <span className='diamond-sec'>
        <button className='diamond-btn'><FaPencilRuler className='diamond-icon' style={{fontSize:"25px"}}/></button>
        <hr className='row'></hr>
       </span>
       <div className='exp-caption'>
           <h3 style={{marginBottom:15,borderBottom:"3px solid rgb(255, 191, 0)",width:200,paddingBottom:8}}>Training And Internship</h3>
           <p style={{marginBottom:10,color:"gray"}}>Full Stack Developer </p>
           <a href='https://www.eskillsweb.com/' style={{marginBottom:20,color:"black" ,fontSize:"12px",fontWeight:"bold",textDecoration:"none"}}>Eskill Web services Indore</a>

           <p style={{color:"gray"}}>A full stack developer is a versatile professional who possesses the skills and expertise to handle both the frontend and backend aspects of web development.</p>
       </div>
     </div>
  )
}

export default ExpItems
