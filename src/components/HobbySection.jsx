import React, { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import Resume from '../assets/Resume/Resumefullstackintern.pdf'
import { toast } from 'react-toastify';
const HobbySection = () => {
   
   useEffect(() => {
      AOS.init();
    }, [])
   
    const handleClick = () =>{
      toast.success("Download Successful")
      
    }

  return (
     <>
    <span data-aos="fade-up"
    data-aos-duration="1500"  className='Title'><h1 id='skill'>My Skills</h1></span>

    <div  className='hobbeis'>
      
      <div   data-aos="fade-up"
    data-aos-duration="1500" className='hobby-sec'>
         <span >
            <h4>Web Design</h4>
            <hr /> <hr className='newline' />
            <h3 className='present webpresent'>83%</h3>
         </span>
         <span>
            <h4>HTML/CSS</h4>
            <hr /> <hr className='newline html' />
            <h3 className='present htmlpresent'>85%</h3>
         </span>
         <span>
            <h4>Javascript</h4>
            <hr /> <hr className='newline js' />
            <h3 className='present jspresent'>50%</h3>
         </span>
       </div>
       <div  data-aos="fade-up"
    data-aos-duration="1500" className='hobby-sec'>
       <span>
            <h4>React JS</h4>
            <hr /> <hr className='newline react' />
            <h3 className='present reactpresent'>90%</h3>
         </span>
         <span>
            <h4>Bootstrap</h4>
            <hr /> <hr className='newline Bootstrap' />
            <h3 className='present Bootstrappresent'>85%</h3>
         </span>
         <span>
            <h4>Material UI</h4>
            <hr /> <hr className='newline matarial' />
            <h3 className='present jspresent'>80%</h3>
         </span>
       </div>
     
    </div>
   <span  data-aos="fade-up"
    data-aos-duration="1500" style={{display:"flex",alignItems:"flex-start", justifyContent:"center"}}>
      <a href={Resume} download={"Resume rohan prajapati"}>
      <button className='downloadbtn' onClick={handleClick} >Download CV</button>
      </a>
      
    </span>
     </>
  )
}

export default HobbySection
