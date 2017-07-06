import React, { Component } from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom'

export default class AllArtists extends Component {

  constructor(props){
    super(props);
    this.state = {
      artists: []
    }
  }
  componentDidMount () {
    axios.get('/api/artists/')
      .then(res => res.data)
      .then(artists => {
        this.setState({ artists: artists })
        console.log(artists)
      });
  }
  render () {
    const artists = this.state.artists;
    // const selectArtist = this.props.selectArtist;
    // console.log(this.state.artists);

    return (
        <div>
        <h3>Artists</h3>
            <div className="list-group">
            {
            this.state.artists.map(artist => {
                return (
                <div className="list-group-item" key={artist.id}>
                    {/* determine where to actually Link to later! */}
                    <Link to={`/artists/${artist.id}`}>{ artist.name }</Link>   
                </div>
                )    
            })
            }
        </div>
        </div>
    );
  }
}
