import React, { Component, useState,useEffect } from "react";
import Navbar from "react-bootstrap/Navbar"
import Container from "react-bootstrap/Container"
import Nav from "react-bootstrap/Nav"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Image from "react-bootstrap/Image"
import {useAuth0} from "@auth0/auth0-react"
import LoginCard from "./LoginCard"
import LoginButton from "./LoginButton"
import Button from "react-bootstrap/Button"
import axios from "axios";





const LandingPageExperimentAbs = () => {

    const {loginWithRedirect,logout,isAuthenticated} = useAuth0(); //React hook for functional componenets
    const [click,setClick] = useState(false)
    const [button, setButton] = useState(true)
    const [navbar,setNavbar] = useState(false)
    const [offsetY,setOffsetY] = useState(0)
    const [img,setImg] = useState(window.pageYOffset)
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
    const handleScroll = () =>{
        setOffsetY(window.pageYOffset)
    }
    useEffect(()=>{
        window.addEventListener("scroll",handleScroll)

        return ()=> window.removeEventListener("scroll",handleScroll)
    },[])
    



    return (
        !isAuthenticated && (
            <Container className="bg-light" style={{height:"100vh",position:"relative"}}  fluid>
                
                <Row style={{height:"15rem"}}>
                  
                  
                    <Col >
                        <Row>
                            <Image  style={{position:"absolute",left:"0px",top:"0px",bottom:"0px",right:"0px",transform:`translateY(${offsetY*10})px`}} src="https://imgur.com/b5MM8Fb.png" fluid/>

                        </Row>
                        <Row style={{position:"absolute",top:"10rem",width:"100vw"}}>
                            <Col xl={1}>
                                
                            </Col>
                    
                            <Col xl={7}>
                                <Row>
                                    <p style={{height:"15rem", color:"white",transform:`translateY(${offsetY*.5}px)`}} className="display-1  ps-5 font-monospace fw-bold" absolute>Step into the world on Angolan Coffee</p>

                                </Row>
                                <Row style={{top:"20px"}}>
                                    <p style={{height:"10rem", color:"white"}} className="display-6  ps-5 font-monospace " absolute>Foster relationships impact communities using our app</p>

                                </Row>
                                <Row  style={{}}>
                                    <Col xl={3}>

                                    </Col>
                                    <Col xl={5}>
                                        <Button className="font-monospace fw-bold" size="lg"  onClick={()=>loginWithRedirect()}>
                                            Log In/Sign Up
                                        </Button>
                                    </Col>
                                    <Col xl={4}>

                                    </Col>
                                 
                                </Row>

                            </Col>
                            <Col xl={4}>

                            </Col>
                            
                    
                
                        </Row>
                    </Col>
                   
                    
                </Row>
            </Container>
        )

    )
}


export default LandingPageExperimentAbs