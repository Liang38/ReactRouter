import React, { Component } from 'react';
import Songs from '../components/Songs';
import axios from 'axios';

export default class SingleArtist extends Component {

  constructor(props){
    super(props);
    this.state = {
      selectedArtist:{}
    }
  }

  componentDidMount(){
    axios.get('/api/artists/' + this.props.match.params.artistId)
    .then(res => res.data)
      .then(artist => {
        this.setState({ selectedArtist: artist });
      });
  }
  render () {
    const artist = this.state.selectedArtist;
    console.log(this.props.match.params);
    return (
      <div className="artist">
        <div>
          <h3>{ artist.name }</h3>
            {/*<h4>ALBUMS</h4>
            <h4>SONGS</h4>*/}
          <img src={ artist.imageUrl } className="img-thumbnail" />
        </div>
        <Songs songs={artist.songs} />
      </div>
    );
  }
}
