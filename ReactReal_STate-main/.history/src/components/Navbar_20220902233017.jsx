import React from 'react'
import {AiOutlineMenu} from 'react-icons/ai'
import { Menudata } from '../Data/MenuData';
import styled,{css} from 'styled-components';
import { Link } from 'react-router-dom';
const Nav=styled.nav`
height:60px;
display:flex;
justify-content:space-between;
padding:1rem 2rem;
z-index:1000;
position:fixed;
background: #000;
width:100%;
`;
const NavLink=css`
color:#fff;
display:flex;
align-items: center;
padding:0 1rem;
height:100%;
cursor: pointer;
text-decoration:none;
`;
const Logo=styled(Link)`
${NavLink}
color:#fff;
font-style:italic;
font-size:25px;
`;
const NavMenuLinks=styled(Link)`
${NavLink}
`;
 const NavMenu=styled.div `
 display:flex;
 align-Items:center `;
``
const Navbar = () => {
  return (
   <Nav>
     <Logo to={`/`}>ALLIR</Logo>
      <AiOutlineMenu/>
     <NavMenu>
  {
    Menudata.map((item,index)=>{
        <NavMenuLinks to={item.link} key={index}>
        {item.title}
        </NavMenuLinks>
    })
  }
  </NavMenu>
   </Nav>
  )
}

export default Navbar