import React, { useEffect, useState } from 'react'
import { ToastContainer } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
import Home from './components/Home'
import ResumeSection from './components/ResumeSection'
import SkillSection from './components/SkillSection'
import HobbySection from './components/HobbySection'
import ScrollAnimation from './components/ScrollAnimation'
import ExpSection from './components/ExpSection'
import ProjectSection from './components/ProjectSection'
import AllProject from './components/AllProject'
import { BrowserRouter, Route,  Routes } from 'react-router-dom'
import HtmlSection from './components/HtmlSection'
import JavaScirpt from './components/JavaScirpt'
import PacmanLoader from "react-spinners/PacmanLoader";
import ReactSection from './components/ReactSection'
import HiremeSection from './components/HiremeSection'
import FaqSection from './components/FaqSection'
import FooterSection from './components/FooterSection'
import CssBaseline from "@mui/material/CssBaseline";
// import BasicSpeedDial from './components/SpeedDial'
import NavigationButton from './components/NavigationButton'




const App = () => {
const [loading , setLoading] = useState(false)

useEffect(()=>{
      setLoading(true)
      setTimeout(() => {
        setLoading(false)
      }, 1000);
},[])
 
  return (
    <div id='welcomespinner'>
      {
        loading ?

        <span className='spinner'>
         
          <PacmanLoader

        color={"gold"}
        loading={loading}
       
        
        
      />
        </span>

        :
      
     <>   <ScrollAnimation/>
   <Home/>
   <ResumeSection/>
   <SkillSection/>
   <ExpSection/>
   <HobbySection/>
   <BrowserRouter>
   <CssBaseline />
   <ProjectSection/>
   <Routes>
     <Route path='/' element={<AllProject/>}/>
     <Route path='/html' element={<HtmlSection/>}/>
     <Route path='/javascript' element={<JavaScirpt/>}/>
     <Route path='/reactjs' element={<ReactSection/>}/>
   </Routes>
  </BrowserRouter>
   <HiremeSection/>
   <FaqSection/>
   <FooterSection/>
   
  {/* <BasicSpeedDial/> */}
  <NavigationButton/>
  <ToastContainer
  position="top-center"
  autoClose={1000}
  hideProgressBar={false}
  newestOnTop={false}
  closeOnClick
  rtl={false}
  pauseOnFocusLoss
  draggable
  pauseOnHover
  theme="dark"/>
 
   
   </>

}
    </div>
    
  )
}

export default App
