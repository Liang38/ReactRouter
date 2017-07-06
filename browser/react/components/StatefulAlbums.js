import AllAlbums from '../components/AllAlbums';
import axios from 'axios';
import React, { Component } from 'react';


export default class StateFulAlbums extends Component {
    constructor(props){
    super(props);
    this.state={
      albums: []
    }
  }
  componentDidMount () {
    axios.get('/api/albums/')
      .then(res => res.data)
      .then(albums => {
        this.setState({ albums })
      });
  }
  render(){
      return(
      <AllAlbums albums={this.state.albums}/>
      );
  }
}