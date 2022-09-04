import React from 'react'
import {AiOutlineMenu} from 'react-icons/ai'
import { Link } from 'react-router-dom';
import { Menudata } from '../Data/MenuData';
import styled from 'styled-components';
const Nav=styled.nav`
height:60px;
background: red;
`;
const Logo=styled(Link)`
color:#fff;
`;
 const NavMenu=styled.div ``;
 const NavMenuLinks=styled(Link)`
// `;
const Navbar = () => {
  return (
   <Nav>
   <Link to="/"><Logo/></Link>
   <AiOutlineMenu/>
   <NavMenu>
   {Menudata.map((item,index)=>{
    <NavMenuLinks to={item.link} key={index}>
    {item.title}
    </NavMenuLinks>
})}
   </NavMenu>
   </Nav>
  )
}

export default Navbar