import React, { useState, useEffect, Component } from "react";

import logo from 'logo.svg';

import Card from 'react-bootstrap/Card';

import {Line} from 'react-chartjs-2';

const imgStyle={
  maxWidth:'100%',
  maxHeight:'20em',
  width: 'auto',
  height: 'auto'
}

const MovieCard = (props) => {
	return(
    <Card className="bg-dark text-white my-2 mx-2" style={{width: '20em'}}> 
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <img className="mw-100" src={props.thumb} style={imgStyle}/>
      </Card.Body>
    </Card>
	)
}

export default MovieCard;