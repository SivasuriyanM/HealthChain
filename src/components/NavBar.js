import React ,{ useState } from 'react'
import Logo from "../assets/HcLogo.jpg";
import { Link } from "react-router-dom"
import '../styles/Navbar.css'
import Reorder from '@mui/icons-material/ViewList';


function NavBar() {

    const [openLinks, setOpenLinks] = useState(false); 

    const toggleNavbar = () =>{
        setOpenLinks(!openLinks);
    }
  return (
    <div className='navbar'>
        <div className='leftSide' id={openLinks?"open":"close"} >
            <img src = {Logo}/>
            <div className='hiddenLinks'>
            <Link to="/">HOME</Link>            
            </div>
        </div>
        <div className='rightSide'>
            <Link to="/">HOME</Link>
            <button onClick={toggleNavbar}>
            <Reorder/>
            </button>
        </div>
        
    </div>
  )
}

export default NavBar