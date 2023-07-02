import React from 'react'
import {motion , useScroll} from 'framer-motion'

const ScrollAnimation = () => {
    const {scrollYProgress} = useScroll()
  return (
    <motion.div
    style={{
        scaleX : scrollYProgress,
        position:"fixed",
        top : 0,
        right :0,
        background :"black",
        height:4,
        width:"100%",
        zIndex:"3",
        transformOrigin:"0%"
        
    }}>
      
    </motion.div>
  )
}

export default ScrollAnimation
