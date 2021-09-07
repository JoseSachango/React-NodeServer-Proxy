

import React, { Component, useState,useEffect,useContext  } from "react";
import Navbar from "react-bootstrap/Navbar"
import Accordion from "react-bootstrap/Accordion"
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


const AccordianExperiment = (props) => {
    const {loginWithRedirect,logout,isAuthenticated,user} = useAuth0(); //React hook for functional componenets
    const {name,age,height} = useContext(DeveloperContext)


        return (

            <Accordion flush>
            <Accordion.Item eventKey="0">
                <Accordion.Header>{props.name}</Accordion.Header>
                <Accordion.Body>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
                est laborum.
                </Accordion.Body>
            </Accordion.Item>
            </Accordion>

        )

}


export default AccordianExperiment