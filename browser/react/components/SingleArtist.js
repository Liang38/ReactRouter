import React, { Component } from 'react';
import Songs from '../components/Songs';
import axios from 'axios';
import Albums from '../components/AllAlbums';
import { Route, Link, Switch } from 'react-router-dom';

export default class SingleArtist extends Component {

  constructor(props) {
    super(props);
    this.state = {
      artist: {},
      artistAlbums: [],
      artistSongs: []
    }
  }

  componentDidMount() {
    let artistName = axios.get('/api/artists/' + this.props.match.params.artistId)
    let artistAlbums = axios.get('/api/artists/' + this.props.match.params.artistId + '/albums')
    let artistSong = axios.get('/api/artists/' + this.props.match.params.artistId + '/songs')

    Promise.all([artistName, artistAlbums, artistSong]).then(values => {
      // console.log('IMPORTANT INFO', values);
      this.setState({ artist: values[0].data, artistAlbums: values[1].data, artistSongs: values[2].data });

    })
  }

  render() {
    console.log(this.state)
                  const artist = this.state.artist; // or however you've named it

    return (

      <div>
        <h3>{artist.name}</h3>
        <ul className="nav nav-tabs">
          <li><Link to={`/artists/${artist.id}/albums/`} >ALBUMS</Link></li>
          <li><Link to={`/artists/${artist.id}/songs/`} >SONGS</Link></li>
        </ul>
        <Switch>
          <Route path={`/artists/${artist.id}/albums/`} render={() => <Albums albums={this.state.artistAlbums} />} />
          <Route path={`/artists/${artist.id}/songs/`} render={() => <Songs songs={this.state.artistSongs} />} />
        </Switch>
      </div>
    );
  }
}

  // render() {
  //   console.log('hi',this.state);
  //   const artist = this.state.artist;
  //   // console.log('asdfasdf' ,artist);

  //   return (

  //     <div className="artist">
  //       <div>
  //           <h1>{artist.name}</h1>
  //           <h4><Albums albums={this.state.artistAlbums}/></h4>
  //           <h4><Songs songs={this.state.artistSongs} /></h4>
  //       </div>

  //     </div>
  //   )
  // }