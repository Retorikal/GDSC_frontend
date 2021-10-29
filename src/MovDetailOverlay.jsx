import React, { useState, useEffect, Component } from "react";
import AuthContextProvider, { UseAuth } from "context/Auth";

import logo from 'logo.svg';

import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';

import {Line} from 'react-chartjs-2';

const MovDetailOverlay = (props) => {
	return(
        <Card className="bg-dark text-white my-2"> 
          <Card.Body>
            <Card.Title>{props.title}</Card.Title>
            <img src={props.thumb}/>
          </Card.Body>
        </Card>
	)
}

export default MovDetailOverlay;