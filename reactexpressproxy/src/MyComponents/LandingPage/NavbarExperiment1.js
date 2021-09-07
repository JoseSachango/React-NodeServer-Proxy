import React, { Component, useState,useEffect } from "react";
import Navbar from "react-bootstrap/Navbar"
import Container from "react-bootstrap/Container"
import Nav from "react-bootstrap/Nav"
import NavDropdown from "react-bootstrap/NavDropdown"
import {Link, useLocation} from "react-router-dom"
import {useAuth0} from "@auth0/auth0-react"


const NavBarExperiment = () => {
        const location = useLocation()
        const {loginWithRedirect,logout,isAuthenticated} = useAuth0(); //React hook for functional componenets
        const [click,setClick] = useState(false)
        const [button, setButton] = useState(true)
        const [navbar,setNavbar] = useState(false)
        const handleClick = () =>{ setClick(!click)}
        const showButton =()=>{
            if (window.innerWidth <=960) {
                setButton(false);

            }else{
                setButton(true)
            }
        }
        useEffect(()=>{
            showButton()
        },[])
        const changeBackground = ()=>{
            
            if(window.scrollY>=80){
                setNavbar(true)
            }else{
                setNavbar(false)
            }
        }

        window.addEventListener("scroll",changeBackground)


        return(
            !isAuthenticated && (
                <>
                <Nav className={navbar ? "bg-light" : "bg-transparent"} style={{position: "fixed", left:"0px",right:"0px",top:"0px",height:"3rem", paddingLeft:"20px",paddingTop:"5px", zIndex:2}} variant="light">
                    <div className="container-fluid">
                        <span className="navbar-brand mb-0 h1 font-monospace fw-bold">Name</span>
                    </div>
                </Nav>
            
                </>

            )
        )

    
   
}

export default NavBarExperiment