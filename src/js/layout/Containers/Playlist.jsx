import React, {Component} from 'react';
import {ImagesForPlaylist} from '../Components/ImagesForPlaylist';


export class Playlist extends Component {
  render() {
    return (
      <div className={'playlist'}>
        <ImagesForPlaylist/>
      </div>
    )
  }
}