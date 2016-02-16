import React, { Component } from 'react';
import fetchJSON from "./fetchJSON";
import List from "List";
import consts from "./consts"

import ItemDetails from "ItemDetails"
import HeaderNav from "HeaderNav"

export default class App extends Component {

  state = {
    artists: null,
    kinds: null,
  };

  fetchArtist(name){
    fetchJSON(consts.api.enpoints.getSearch(name,"artist")).then((response) => {
        if(!response.error){
          this.setState({artists:response.artists.items})
        }
    });
  };

  fetchKinds(){
    fetchJSON(consts.api.enpoints.getKinds()).then((response) => {
        if(!response.error){
          this.setState({kinds:response.genres})
        }
    });
  };


  onInputArtistChange = (value) => {
      this.fetchArtist(value);
  };

  componentDidMount() {
      this.fetchKinds();
  };

  render() {
    return (
      <div>
        <HeaderNav />
      </div>
    )
  }
}
