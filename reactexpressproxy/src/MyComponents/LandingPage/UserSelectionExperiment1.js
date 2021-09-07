import React, { Component, useState,useEffect,useContext  } from "react";
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
import Card from "react-bootstrap/Card"
import DeveloperContext from "../../utils/DeveloperContext"
import API from "../../utils/API"
import Accordion from "./AccordianExperiment"







const UserSelectionExperiment = () => {

    const {loginWithRedirect,logout,isAuthenticated,user} = useAuth0(); //React hook for functional componenets
    const {name,age,height} = useContext(DeveloperContext)
    console.log("This is the user informaiton", JSON.stringify(user,null,2))

    const handleProducerClick = () =>{
        API.postUserInfo("/api/user/post",{googleId:user.sub,name:user.name,userType:"jjj",profileCompleted:false}).then(resultPost=>{
            console.log("Succefully posted user data. This is what was returned: ",resultPost)
          }).catch(errPost=>{
            console.log("There was an error with the posting of a new user: ",errPost)
          }) 
    }   

 


    return (
        isAuthenticated && (
            
            <Container  style={{height:"100vh",backgroundColor:"rgba(69, 179, 113, .1)",position:"relative"}}  fluid>
                <Row style={{height:"5rem",top:"50px"}}>

                </Row>
                <Row style={{height:"15rem",top:"50px"}}>
                  
                  
                    <Col xl={2} md={2} >
                       
                    </Col>
                    <Col xl={4} md={4}>
                        <Card style={{ width: '20rem',boxShadow:"12px 12px 2px 1px rgba(0, 0, 255, .2)",zIndex:1}}>
                            <Card.Img variant="top" src="https://imgur.com/YUa0O1z.png" />
                            <Card.Body>
                                <Card.Title>Roaster</Card.Title>
                                <Card.Text>
                                <Accordion name={"Example"}/>
                                </Card.Text>
                                <Button variant="primary">Register As Roaster</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col  xl={4} md={4}>
                        <Card style={{ width: '20rem',boxShadow:"12px 12px 2px 1px rgba(0, 0, 255, .2)",zIndex:1 }}>
                            <Card.Img variant="top" src="https://imgur.com/YUa0O1z.png" />
                            <Card.Body>
                                <Card.Title>Producer</Card.Title>
                                <Card.Text>
                                <Accordion name={"Example"}/>
                                </Card.Text>
                                <Button variant="primary" onClick={handleProducerClick}>Register As Producer</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col  xl={2} md={2}>
                        
                    </Col>
                   
                    
                </Row>
                <Row style={{height:"100rem",top:"50px"}}>
                    
                </Row>
            </Container>
        )

    )
}


export default UserSelectionExperiment