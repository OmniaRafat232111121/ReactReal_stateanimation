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
const Logo=styled.a`
${NavLink}
color:#fff;
font-style:italic;
font-size:25px;
`;
 const NavMenu=styled.div `
 display:flex;
 align-Items:center `;
 const NavMenuLinks=styled(Link)`
 ${NavLink}
 `;

const Navbar = () => {
  return (
   <Nav>
<Link to="/"> 
</Link>
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