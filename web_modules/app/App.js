import React, { Component } from 'react';

import Item from "Item"
import List from "List"
import Input from "Input"

const kinds = {
	rap : {name: "Rap"},
	rock : {name: "Rock"},
	electro : {name: "Electro"}	
}
const kindsArray = Object.keys(kinds).map((k) => { return kinds[k] });


export default class App extends Component {
  state = {
        artists: "",  
        value:"",
   }
  test =  (event) =>{
    console.log(event)
  }

  onChangeHandler = (event) => {
    console.log(event);
        

    this.setState({inputValue: event.target.value})
      fetch('https://api.spotify.com/v1/search?limit=20&type=artist&q='+event.target.value)
      .then((response) => response.json())
      .then((responseJson) => {    
       this.state.artists = responseJson.artists.items
      })
      .catch((error) => {
        console.warn(error);
      });


    
  }
    
  componentDidMount = () => {    
    fetch('https://api.spotify.com/v1/search?limit=20&type=artist&q=bob')
    .then((response) => response.json())
    .then((responseJson) => {          
      this.setState({artists: responseJson.artists.items})
    })
    .catch((error) => {
      console.warn(error);
    });

      

  }

  render() {

	return(
      <div>        
        <div className="col">          
       	  <List items={this.state.artists}  onChange={this.onChangeHandler} />
        </div>
        <div className="col">          
       	  <List items={kindsArray} onChange={this.onChangeHandler} />
        </div>

      
      </div>
    );
  }
}
