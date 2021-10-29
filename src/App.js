import React, { useState, useEffect, Component } from "react";

import logo from 'logo.svg';

import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import MovieCard from 'MovieCard'

import API from 'API';

import {Line} from 'react-chartjs-2';
  
import 'App.css';
import 'bootstrap/dist/css/bootstrap.min.css';


function Content(props) {
  const [query, onQueryChange] = useState("");
  const [movlist, onMovlistChange] = useState(API.getList());
  
  const search = async () => {
    if(query == "") onMovlistChange(API.getList());
    else onMovlistChange(API.search(query));
  }

  return (
    <div className="App">
      <Navbar bg="dark" variant="dark" expand="lg">
        <Navbar.Brand href="#home">NetPlix</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto"/>
          <Form inline>
            <FormControl 
              type="text" 
              placeholder="Search movie.." 
              className="mr-sm-2" 
              onChange = {(e) => {onQueryChange(e.target.value)}}/>
            <Button variant="outline-success" onClick={search}>Search</Button>
          </Form>
        </Navbar.Collapse>
      </Navbar>

      <Container className="content bg-light">
        {movlist.map((mov) => <MovieCard title={mov.name} thumb={mov.thumb} rating={mov.rating}/>)}
      </Container>
    </div>
  );
}

function App(props) {
  return (
    <Content/>  
  );
}

export default App;
