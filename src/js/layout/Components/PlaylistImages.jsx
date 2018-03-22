import React, {Component} from 'react';
import {connect} from 'react-redux';
import {playlist} from '../../store/actions/playlistActions';
import {hideImgsPlaylistAction} from '../../store/actions/imagesPlaylistAction';
import {backgroundVinilAction} from '../../store/actions/backgroundVinylAction';

export class ImagesOfPlaylist extends Component {

  async openPlaylist(e) {
    const idPlaylist = e.target.id;
    const data = this.props.data;
    const selectedPlayList = playlist(data.tracks[idPlaylist].map((item, key) =>
      ({
        id: key,
        track: new Audio(item),
        trackName: data.trackName[idPlaylist][key]
      })
    ));
    const actionImgsPlaylist = hideImgsPlaylistAction(false);

    let pathImagesVinyl = data.images[idPlaylist].slice(2);
    pathImagesVinyl = 'url(' + pathImagesVinyl + ') no-repeat 70px 66px /59%';
    const actionImagesVinyl = backgroundVinilAction(pathImagesVinyl);

    this.props.moviePlaylist(selectedPlayList);
    this.props.hideImgsPlaylist(actionImgsPlaylist);
    this.props.setBackgroundVinyl(actionImagesVinyl)
  }

  render() {
    return (
      <div className={'playlist-images'} style={{display: this.props.visible ? 'block' : 'none'}}>
        {
          this.props.data.images.map((item, key) => {
            return (
              <img className={'playlist--one-image'} src={item} key={key} id={this.props.data.id[key]} width={'200px'}
                   onClick={(e) => this.openPlaylist(e)}></img>
            )
          })
        }
      </div>
    )
  }
}

export const PlaylistImages = connect(({imgsPlaylistReducer}) =>
    ({
      data: imgsPlaylistReducer.data,
      visible: imgsPlaylistReducer.visible
    })
  ,
  dispatch => ({
    moviePlaylist(playlist) {
      dispatch({type: playlist.type, payload: playlist.data})
    },
    hideImgsPlaylist(mode) {
      dispatch({type: mode.type, payload: mode.data})
    },
    setBackgroundVinyl(img) {
      dispatch({type: img.type, payload: img.background})
    }
  })
)(ImagesOfPlaylist);