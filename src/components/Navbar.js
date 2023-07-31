import React, { useEffect, useState } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { Link, useLocation } from "react-router-dom";
import './Navbar.css';

export default function NavbarComponent() {
    const location = useLocation();
    const [prevScrollpos, setPrevScrollpos] = useState(window.pageYOffset);

    useEffect(() => {

        function handleScroll() {
          const navbar = document.getElementById("navbar");
            navbar.style.zIndex = "9999";
            const currentScrollPos = window.pageYOffset;
            if (prevScrollpos > currentScrollPos) {
              document.getElementById("navbar").style.top = "-10px";
            } else {
              document.getElementById("navbar").style.top = "-100px";
            }
            setPrevScrollpos(currentScrollPos);
        }

        window.addEventListener("scroll", handleScroll);

        // Cleanup function to remove the event listener when the component is unmounted
        return () => {
          window.removeEventListener("scroll", handleScroll);
        };
    }, [location, prevScrollpos]);

  return (
    <Navbar bg="" expand="lg" className='mt-2 fs-5 appear-nav' id='navbar'>
              <Navbar.Brand to="/">
              <Link className='nav-link' to="/">
                <img 
                  alt=""
                  src="/v_logo.svg"
                  width={100}
                  height={50}
                  className= "d-inline-block align-top align-left"
                  />{' '}
                </Link>
          
              </Navbar.Brand>

              <Navbar.Toggle aria-controls="navbarScroll" />

              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto " id="navitems" >
                  <Link className="nav-link px-4 navitem gradient" to="/" id='home_page'>
                    Home
                  </Link>
                  <Link className="nav-link px-4 navitem gradient" to="/experience" id='experience_page'>
                    Experience
                  </Link> 
                  <Link className="nav-link px-4 navitem gradient" to="/contact" id='projects_page'>
                    Projects
                  </Link>
                </Nav>

              
                <Nav className="justify-content-end" style={{ width: "100%" }}>
                  <Link className="nav-link" to="/get_app">
                    <button type="button" className='btn btn-outline-secondary fs-5 px-4' id='get_app-btn'>
                          Vivian
                    </button>
                  </Link> 
                  {/* <Link className="nav-link mx-4" to="/login">
                    <button type="button" className='btn px-5 fs-5 ' id='login-btn'>
                          Log in
                      </button>
                  </Link> */}
                </Nav>
              </Navbar.Collapse>
          </Navbar>
  )
}
