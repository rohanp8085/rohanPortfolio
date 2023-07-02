import React from 'react'
import { BsFillArrowDownCircleFill } from 'react-icons/bs'
import { AiOutlineDownload } from "react-icons/ai";
import {motion} from 'framer-motion'
import Resume from '../assets/Resume/Resumefullstackintern.pdf'
import { Link } from 'react-scroll';
import { toast } from 'react-toastify';

const ResumeSection = () => {

const handleClick = () =>[
  toast.success("Download Successful")
]

  return (
    <>
     <div className="down-btn">
  <div className="down-arrow"><button className='down-arrow-btn' > <a id='arrowtage' href="#resume"><BsFillArrowDownCircleFill/></a></button></div>
  </div>
    < motion.div
       viewport={{once:true}}
        initial ={{opacity : 0, scale : 0,}}
        whileInView={{opacity:1, scale:1}}
        transition={{duration:0.8}}
     className='resume-sec' id='resume'>
       <h1 className='resume-heading'>I'M READY FOR YOUR PROJECTS. <span style={{color:"black"}}> HIRE ME NOW</span></h1>
       <span>
       <Link to='contact' id='contacttage'><button  className='resume-btn'>CONTACT ME</button></Link>
       <a href={Resume} download={"Resume rohan prajapati"}>
       <button className='resume-btn'  id='resumebtn' onClick={handleClick}> <AiOutlineDownload className='download-icon'/>MY RESUME</button>

       </a>

       </span>
    </motion.div>
      
    </>
  )
}

export default ResumeSection
