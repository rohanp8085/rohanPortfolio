import React from 'react';
// import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { AiFillContacts, AiFillHome, AiFillQuestionCircle, AiOutlineMenu, AiTwotoneExperiment } from 'react-icons/ai';
import { FiPhoneCall } from "react-icons/fi";
import { GrProjects, GrServices } from "react-icons/gr";
import { GiNetworkBars, GiSkills } from "react-icons/gi";
import { FaQuestion } from 'react-icons/fa';




export default function Menubar() {
  const [state, setState] = React.useState({

    left: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <div className='menubar-box'
      // sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 200, height:"100vh" }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List sx={{ width: 180, height: 70 }}>

        <ListItem   >
          <ListItemButton>
            <ListItemIcon>
              < AiFillHome id='about-icon' />
            </ListItemIcon>
            <ListItemText><a className='about-link' href="#home">Home</a></ListItemText>

          </ListItemButton>
        </ListItem>


      </List>
      <List sx={{ width: 180 , height: 70}}>

        <ListItem  >
          <ListItemButton>
            <ListItemIcon>
              < AiFillQuestionCircle id='about-icon' />
            </ListItemIcon>
            <ListItemText><a className='about-link' href="#about">About</a></ListItemText>

          </ListItemButton>
        </ListItem>


      </List>
      <List sx={{ width: 180 , height: 70}}>

        <ListItem  >
          <ListItemButton>
            <ListItemIcon>
              < GrServices id='about-icon' />
            </ListItemIcon>
            <ListItemText><a className='about-link' href="#service">Services</a></ListItemText>

          </ListItemButton>
        </ListItem>


      </List>
      <List sx={{ width: 180 , height: 70 }}>

        <ListItem  >
          <ListItemButton >
            <ListItemIcon>
              < GiNetworkBars id='about-icon' />
            </ListItemIcon>
            <ListItemText ><a className='about-link' href="#expperience">Experience</a></ListItemText>

          </ListItemButton>
        </ListItem>


      </List>
      <List sx={{ width: 180, height: 70 }}>

        <ListItem  >
          <ListItemButton>
            <ListItemIcon>
              < GiSkills id='about-icon' />
            </ListItemIcon>
            <ListItemText><a className='about-link' href="#skill">Skills</a></ListItemText>

          </ListItemButton>
        </ListItem>


      </List>
      <List sx={{ width: 180, height: 70 }}>

        <ListItem  >
          <ListItemButton>
            <ListItemIcon>
              < GrProjects id='about-icon' />
            </ListItemIcon>
            <ListItemText><a className='about-link' href="#projects">Projects</a></ListItemText>

          </ListItemButton>
        </ListItem>


      </List>
      <List sx={{ width: 180 , height: 70}}>

        <ListItem  >
          <ListItemButton>
            <ListItemIcon>
              < FaQuestion id='about-icon' />
            </ListItemIcon>
            <ListItemText><a className='about-link' href="#faq">Faq</a></ListItemText>

          </ListItemButton>
        </ListItem>


      </List>
      <List sx={{ width: 180, height: 70 }}>

        <ListItem  >
          <ListItemButton>
            <ListItemIcon>
              < FiPhoneCall id='about-icon' />
            </ListItemIcon>
            <ListItemText><a className='about-link' href="#contact">Contact</a></ListItemText>

          </ListItemButton>
        </ListItem>


      </List>




    </div>
  );

  return (
    <div>
      {['left'].map((anchor) => (
        <React.Fragment key={anchor}>
          <button className='menu-btn' onClick={toggleDrawer(anchor, true)} ><AiOutlineMenu /></button>
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}






