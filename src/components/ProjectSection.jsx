import React, { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Link } from 'react-router-dom'

const ProjectSection = () => {

  useEffect(() => {
    
    AOS.init();
  }, [])

  return (
    <div id='projects' className='project-container'>
   <span style={{display:"flex", alignItems:"center " , justifyContent:"center",flexDirection:"column"}}>
     <h1 data-aos="fade-up"
    data-aos-duration="1800"  id='res-portfolio'   style={{textAlign:"center",fontWeight:400,fontSize:20 , backgroundColor:"gold",width:"100px",marginBottom:"10px"}}>Portfolio</h1>
     <h1  data-aos="fade-up"
    data-aos-duration="1800" className='worktitle' style={{fontSize:40, marginTop:10}}>Some of my most recent projects</h1>
   </span>

    <nav  data-aos="fade-up"
    data-aos-duration="1800" className='project-navigation' >
     
    <Link to={'/'} className='project-btn'>All</Link>
        <Link to={'/html'} className='project-btn'>Html/Css</Link>
        <Link to={'/javascript'} className='project-btn'>Javascript</Link>
        <Link to={'/reactjs'} className='project-btn'>Reactjs</Link>

    </nav>
   
    
</div>
  )
}

export default ProjectSection
