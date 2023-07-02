import React, { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import faq from '../assets/faq.png'
import { Accordion, AccordionDetails, AccordionSummary, Typography } from '@mui/material'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
const FaqSection = () => {
  useEffect(() => {
    AOS.init();
  }, [])
  return (
    <div className='faq-sec'>
       <div data-aos="fade-up"
    data-aos-duration="1800" className='faqtext-sec'>
       <h4 data-aos="fade-up"
    data-aos-duration="1800" className='faqtitle'>FAQ</h4>
       <h1 data-aos="fade-up"
    data-aos-duration="1800" className='question'>Have any questions?</h1>
       <Accordion  className='accordian'  sx={{  boxShadow:0}} >
        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
        <ArrowDropDownIcon sx={{fontSize:"30px"}}/>  <Typography className='accordian-text' variant='h6'>What is full stack development?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          Full stack development refers to the practice of working on both the front-end (client-side) and back-end (server-side) components of a web application. It involves handling the presentation layer, business logic, and database interactions to create a complete and functional application.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <div  className='responsive-faq'>
      <Accordion className='accordian'  sx={{mt:2 , boxShadow:0}} >
        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
        <ArrowDropDownIcon sx={{fontSize:"30px"}}/>  <Typography className='accordian-text' variant='h6'> What is an API?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          An API (Application Programming Interface) is a set of rules and protocols that allows different software applications to communicate and interact with each other.
          </Typography>
        </AccordionDetails>
      </Accordion>
      </div>
      <div className='responsive-faq'> 
      <Accordion  className='accordian'  sx={{mt:2 , boxShadow:0}} >
        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
        <ArrowDropDownIcon sx={{fontSize:"30px"}}/>  <Typography className='accordian-text' variant='h6'>What is the purpose of version control?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          Version control is a system that tracks and manages changes to files over time. It allows developers to collaborate, revert changes, and maintain a history of code revisions.          </Typography>
        </AccordionDetails>
      </Accordion>
      </div>

      <div className='responsive-faq'>
      <Accordion  className='accordian'  sx={{mt:2, boxShadow:0}} >
        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
        <ArrowDropDownIcon sx={{fontSize:"30px"}}/>  <Typography className='accordian-text' variant='h6'>What is the purpose of a framework?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
           A framework provides a structured and reusable foundation for developing applications. It includes pre-defined libraries, tools, and conventions that help streamline the development process.             </Typography>
        </AccordionDetails>
      </Accordion>
      </div>

      <div className='responsive-faq'>
      <Accordion className='accordian'  sx={{mt:2 , boxShadow:0}} >
        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
        <ArrowDropDownIcon sx={{fontSize:"30px"}}/>  <Typography className='accordian-text' variant='h6'> What is the purpose of CSS?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
         
          CSS (Cascading Style Sheets) is used to describe the visual appearance and formatting of a document written in HTML, enabling the separation of presentation from content.           </Typography>
        </AccordionDetails>
      </Accordion>
      </div>

       </div>
       <div data-aos="fade-up"
    data-aos-duration="1800" className="faqimage-sec">
        <img data-aos="fade-up"
    data-aos-duration="1800" className='faqimg' src={faq} alt="" />
       </div>
    </div>
  )
}

export default FaqSection
