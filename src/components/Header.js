import { useLayoutEffect, useState } from "react";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import "../styles/components/Header.css";
import List from "@mui/material/List";
import { Drawer } from "@mui/material";
import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';
import PermContactCalendarIcon from '@mui/icons-material/PermContactCalendar';
import SearchIcon from '@mui/icons-material/Search';
import MenuIcon from '@mui/icons-material/Menu';
import {Link } from "react-router-dom";


const Header = () => {
  const [display_side_nav, set_display_side_nav] = useState(false);
  const toggle_drawer = ()=> {
    console.log('byn');
    set_display_side_nav(false);
    
  };
  let icons = [<HomeIcon/>, <SearchIcon/> , <InfoIcon/>, <PermContactCalendarIcon/>];
  let links = ['Home', 'Explore', 'About', 'Contact'];
  let paths = ['/', '/recipes', '/about', '/contact']
  let links_reversed = links.slice().reverse()
  let paths_reversed = paths.slice().reverse()
  const [width, set_width] = useState(window.innerWidth);
  
  useLayoutEffect(() => {
    const setWidth=()=> {
    set_width(window.innerWidth);
    console.log('Width of device: ' + width)
    }
    
    window.addEventListener('resize', setWidth);
  }
  );

  return (
    <>
      <div id="container-header">
      {width <= 1024 ? 
      <div style={{textAlign:'left', width:'100%'}}>
      <MenuIcon fontSize="large" onClick={()=> {set_display_side_nav(true)}}/> </div>: links_reversed.map((text, index)=> {
    
         return(
           <div className="header-button">
             <a href={paths_reversed[index]}>{text}</a>
           </div>
         )
        })}
        
        
      </div>
     

       

      <Drawer
      
        anchor='left'
        open={display_side_nav}
        onClose={()=>{set_display_side_nav(false)}}
      >
        <List>
        {links.map((text, index) => (
          <Link style={{color:'black', textDecoration:'none'}} to={paths[index]}>
          <ListItem button key={text}>
            
            <ListItemIcon>
              {icons[index]}
            </ListItemIcon>
            <ListItemText primary={text} />
           
            
          </ListItem>
          </Link>
        ))}
      </List>
      </Drawer>
    </>
  );
};

export default Header;
