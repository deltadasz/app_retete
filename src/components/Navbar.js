 import React, { useState, useRef, useEffect } from 'react'
 import * as FaIcons from "react-icons/fa";
 import * as AiIcons from "react-icons/ai";
 import { Link } from 'react-router-dom';
 import { SidebarData } from './SidebarData';
 import './Navbar.css';
 import { IconContext } from 'react-icons'
 import logo from '../Assets/logo.png';
 import Breakfast from '../Pages/Breakfast';


 function Navbar() {
     const [sidebar, setSidebar] = useState(false);
     const showSidebar = () => setSidebar(!sidebar);

     let menuRef = useRef();

     useEffect(() => {
       document.addEventListener("mousedown", (event) => {
         if(!menuRef.current.contains(event.target)) {
            setSidebar(false);
         }
       })
     })

     return (
         <>
         <IconContext.Provider value={{color:'#f5f5f5'}}>
         <div className="navbar" >
             <Link to="#" className='menu-bars'>
             <FaIcons.FaBars onClick={showSidebar}/>
             </Link>
             
               <img className='page-logo' src={logo} alt="Logo" href="../Pages/Breakfast" />
         </div>
         <nav className={sidebar ? 'nav-menu active' : 'nav-menu'} ref={menuRef}>
             <ul className='nav-menu-items' onClick={showSidebar}>
                 <li className='navbar-toggle'>
                     <Link to="#" className='menu-bars'>
                         <AiIcons.AiOutlineClose/>
                     </Link>
                 </li>
                 {SidebarData.map((item, index) => {
                     return (
                        <li key={index} className={item.cName}>
                        <Link to={item.path}>
                            {item.icon}
                            <span>{item.title}</span>
                        </Link>
                    </li>
                     )
                 })}
             </ul>
         </nav>
         </IconContext.Provider>
         </>
     )
 }


 export default Navbar;
