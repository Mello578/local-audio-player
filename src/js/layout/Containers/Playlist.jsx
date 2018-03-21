import React, {Component} from 'react';
import {PlaylistImages} from '../Components/PlaylistImages';
import {PlaylistTracks} from '../Components/PlaylistTracks';

export class Playlist extends Component {
  render() {
    return (
      <div className={'playlist'}>
        <PlaylistImages/>
        <PlaylistTracks/>
      </div>
    )
  }
}