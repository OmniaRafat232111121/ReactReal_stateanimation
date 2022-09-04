import React from 'react'
import {AiOutlineMenu} from 'react-icons/ai'
import { Menudata } from '../Data/MenuData';
import styled from 'styled-components';
const Nav=styled.nav`
height:60px;
background: red;
`;
const Logo=styled.a`
color:#fff;
`;
 const NavMenu=styled.div `
 display:flex;
 align-Items: `;
 const NavMenuLinks=styled.div``;

const Navbar = () => {
  return (
   <Nav>
   <Logo>ALLIE</Logo>
   <AiOutlineMenu/>
   <NavMenu>
   {Menudata.map((item,index)=>{
    <NavMenuLinks  key={index}>
    {item.title}
    </NavMenuLinks>
})}
   </NavMenu>
   </Nav>
  )
}

export default Navbar