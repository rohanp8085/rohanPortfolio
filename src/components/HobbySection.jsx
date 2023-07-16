import React, { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import Resume from '../assets/Resume/Resumefullstackintern.pdf'
import { toast } from 'react-toastify';
import PropTypes from 'prop-types';
import LinearProgress from '@mui/material/LinearProgress';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';


function LinearProgressWithLabel(props) {
   return (
     <Box sx={{ display: 'flex', alignItems: 'center' }}>
       <Box sx={{ width: '100%', mr: 1,}}>
         <LinearProgress variant="determinate" {...props} sx={{height:"8px", borderRadius:"5px",  bgcolor:"gainsboro"}} />
       </Box>
       <Box sx={{ minWidth: 35 }}>
         <Typography variant="body2" color="text.secondary">{`${Math.round(
           props.value,
         )}%`}</Typography>
       </Box>
     </Box>
   );
 }
 
 LinearProgressWithLabel.propTypes = {
   /**
    * The value of the progress indicator for the determinate and buffer variants.
    * Value between 0 and 100.
    */
   value: PropTypes.number.isRequired,
 };
 
const HobbySection = () => {
   const [progress, setProgress] = React.useState(10);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prevProgress) => (prevProgress >= 85 ? 10 : prevProgress + 10));
    }, 800);
    return () => {
      clearInterval(timer);
    };
  }, []);
   
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
      
      
       <Box sx={{ width: '95%' }}>
       <h4>Html/css</h4>
       <LinearProgressWithLabel  value={progress}   />
       </Box>
       <Box sx={{ width: '95%' }}>
       <h4>JavaScript</h4>
       < LinearProgressWithLabel  value={progress}  />
       </Box>
      
       <Box sx={{ width: '95%' }}>
       <h4>React js</h4>
       < LinearProgressWithLabel  value={progress} />
       </Box>
        
         
       </div>
       <div  data-aos="fade-up"
    data-aos-duration="1500" className='hobby-sec'>
       <Box sx={{ width: '95%' }}>
       <h4>Next js</h4>
       < LinearProgressWithLabel  value={progress} />
       </Box>
       <Box sx={{ width: '95%' }}>
       <h4>Node Js</h4>
       < LinearProgressWithLabel  value={progress} />
       </Box>  
       <Box sx={{ width: '95%' }}>
       <h4>Express js</h4>
       < LinearProgressWithLabel  value={progress} />
       </Box>  
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
