import React from 'react'
import { AiOutlineArrowUp } from 'react-icons/ai'
import { MdKeyboardArrowUp } from "react-icons/md";
import * as Scroll from 'react-scroll';
import { Link, Button, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'
const NavigationButton = () => {
  return (
   <>
   <Link to='home'  ><button className='navigate-btn'><MdKeyboardArrowUp/></button></Link>
   </>
  )
}

export default NavigationButton
