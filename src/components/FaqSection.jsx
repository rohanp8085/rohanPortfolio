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
    <div className='faq-sec' id='faq'>
      <div data-aos="fade-up"
        data-aos-duration="1800" className='faqtext-sec'>
        <h4 data-aos="fade-up"
          data-aos-duration="1800" className='faqtitle'>FAQ</h4>
        <h1 data-aos="fade-up"
          data-aos-duration="1800" className='question'>Have any questions?</h1>
        <Accordion className='accordian' sx={{ boxShadow: 0 }} >
          <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
            <ArrowDropDownIcon sx={{ fontSize: "30px" }} />  <Typography className='accordian-text' variant='h6'>What technologies did you use to build this portfolio website?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              I built this portfolio website using HTML, CSS, and JavaScript for the front-end. It's hosted on a Node.js server, and the projects section is powered by MongoDB for data storage.
            </Typography>
          </AccordionDetails>
        </Accordion>

        <div className='responsive-faq'>
          <Accordion className='accordian' sx={{ mt: 2, boxShadow: 0 }} >
            <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
              <ArrowDropDownIcon sx={{ fontSize: "30px" }} />  <Typography className='accordian-text' variant='h6'>Can you share more details about your past projects and contributions?</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Absolutely! You can find detailed information about my past projects, along with links to live demos or GitHub repositories, in the projects section of my portfolio website.
              </Typography>
            </AccordionDetails>
          </Accordion>
        </div>
        <div className='responsive-faq'>
          <Accordion className='accordian' sx={{ mt: 2, boxShadow: 0 }} >
            <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
              <ArrowDropDownIcon sx={{ fontSize: "30px" }} />  <Typography className='accordian-text' variant='h6'>What do you enjoy most about being a MERN Stack Developer?</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                I love the versatility and power of the MERN stack, enabling me to build full-stack web applications from the ground up. Working with modern technologies and solving complex problems in web development brings me great satisfaction.          </Typography>
            </AccordionDetails>
          </Accordion>
        </div>

        <div className='responsive-faq'>
          <Accordion className='accordian' sx={{ mt: 2, boxShadow: 0 }} >
            <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
              <ArrowDropDownIcon sx={{ fontSize: "30px" }} />  <Typography className='accordian-text' variant='h6'>How do you stay updated with the latest industry trends?</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                I am an avid learner and stay updated by reading tech blogs, participating in online coding communities, attending webinars, and following influential figures in the industry.        </Typography>
            </AccordionDetails>
          </Accordion>
        </div>

        <div className='responsive-faq'>
          <Accordion className='accordian' sx={{ mt: 2, boxShadow: 0 }} >
            <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
              <ArrowDropDownIcon sx={{ fontSize: "30px" }} />  <Typography className='accordian-text' variant='h6'> What's your approach to web development and design?</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>

                I believe in creating clean and user-friendly interfaces that provide a seamless user experience. I follow industry best practices and stay up-to-date with the latest trends and technologies to deliver high-quality solutions.         </Typography>
            </AccordionDetails>
          </Accordion>
        </div>

      </div>
      <div className="faqimage-sec">
        <img className='faqimg' src={faq} alt="" />
      </div>
    </div>
  )
}

export default FaqSection
