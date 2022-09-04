import React, { useState } from "react";
import styled from "styled-components";
import { GiHamburgerMenu } from "react-icons/gi";
import { VscChromeClose } from "react-icons/vsc";
export default function Navbar() {
  const [navbarState, setNavbarState] = useState(false);
  return (
    <>
      <Nav>
        <div className="brand">
          <div className="container">
          ELIXER
          </div>
          <div className="toggle">
            {navbarState ? (
              <VscChromeClose onClick={() => setNavbarState(false)} />
            ) : (
              <GiHamburgerMenu onClick={() => setNavbarState(true)} />
            )}
          </div>
        </div>

        <ul>
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#services">About</a>
          </li>
          <li>
            <a href="#resume">Resume</a>
          </li>
          
        </ul>
        <button>Connect</button>
      </Nav>
      <ResponsiveNav state={navbarState}>
        <ul>
          <li>
            <a href="#home" onClick={() => setNavbarState(false)}>
              Home
            </a>
          </li>
          <li>
            <a href="#services" onClick={() => setNavbarState(false)}>
              About
            </a>
          </li>
          <li>
            <a href="#resume" onClick={() => setNavbarState(false)}>
            Resume
            </a>
          </li>
         
        </ul>
      </ResponsiveNav>
    </>
  );
}

const Nav = styled.nav`
  display: flex;
  justify-content: space-around;
  align-items: center;
  height:60px;
  
  background-color: transparent;
    .brand {
    .container {
      cursor: pointer;
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 0.4rem;
      font-size: 1.2rem;
      font-weight: 900;
      text-transform: uppercase;
    }
    .toggle {
      display: none;
    }
  }
  ul {
    display: flex;
    gap: 1rem;
    list-style-type: none;
    li {
      a {
        text-decoration: none;
        color: #000;
        font-size: 1.2rem;
        transition: 0.1s ease-in-out;
        &:hover {
          color: #000;
        }
      }
      &:first-of-type {
        a {
          color: #000;
          font-weight: 900;
        }
      }
    }
  }
  button {
    padding: 0.5rem 1rem;
    cursor: pointer;
    border-radius: 1rem;
    border: none;
    color: white;
    background-color: #000;
    font-size: 1.1rem;
    letter-spacing: 0.1rem;
    text-transform: uppercase;
    transition: 0.3s ease-in-out;
    &:hover {
      background-color: #0235e0;
    }
  }
  @media screen and (min-width: 280px) and (max-width: 1080px) {
    .brand {
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 100%;
      .toggle {
        display: block;
        font-size:30px;
      }
    }
    ul {
      display: none;
    }
    button {
      display: none;
    }
  }
`;

const ResponsiveNav = styled.div`
  display: flex;
  align-items: center;
  text-align:center;
  padding:40px;
  justify-content:center;
  position: absolute;
  z-index: 1;
  top: ${({ state }) => (state ? "50px" : "-400px")};
  height: 40vh;
  width: 100%;
  align-items: center;
  transition: 0.3s ease-in-out;
  background-color:#fff;
  ul {
    list-style-type: none;
    width: 100%;
   
    li {
      width: 100%;
      margin: 1rem 0;
      margin-left: 2rem;
   
      a {
        text-decoration: none;
        color: #000;
        font-size: 1.2rem;
        transition: 0.1s ease-in-out;
        &:hover {
          color: #000;\

          
        }
      }
      &:first-of-type {
        a {
          color: #000;
          border-bottom:2px solid;
          font-weight: 900;
          border-radius:1px solid green;
        }
      }
    }
  }
`;