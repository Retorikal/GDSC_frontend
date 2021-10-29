import React, { useState, useEffect, Component } from "react";

import sponge from 'img/suponjibobu.jpg';
import squid from 'img/squidward.jpg';
import collosal from 'img/collosal.jpg';
import bttf from 'img/bttf.jpg';
import blackwidow from 'img/blackwidow.jpg';

const data = {
  0:{name:"SpongeBob the Anime", rating: 5, thumb:sponge, desc:"Jesus christ, this is really weeb"},
  1:{name:"Squidward", rating: 4.7, thumb:squid, desc:"He's not happy that someone broke his clarinet. Now he seeks revenge."},
  2:{name:"Collosal", rating: 3, thumb:collosal, desc:"It's big"},
  3:{name:"Back to the Future", rating: 4.5, thumb:bttf, desc:"That's just the Avengers post time-heist"},
  4:{name:"Black Widow", rating: 5, thumb:blackwidow, desc:"Fun fact, black widow is a spider name. Somehow she's in the Avengers now."},
}

const search = (query) => {
  let result = []

  for(var key in data){
    let mov = data[key];
    if(JSON.stringify(mov).match(query, "i") != null)
      result.push({id:key, name:mov.name, rating:mov.rating, thumb:mov.thumb});
  }

  return result;
}

const detail = (id) => {
  return data[id];
}

const getList = () => {
  let result = []

  for(var key in data){
    let mov = data[key];
    result.push({id:key, name:mov.name, rating:mov.rating, thumb:mov.thumb});
  }

  return result;
}

const API = {search:search, detail:detail, getList:getList}

export default API;
