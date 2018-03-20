import React, {Component} from 'react';
import {connect} from 'react-redux';

export class ImagesPlaylist extends Component {
  op(){
    console.log('this  ', this.props)
  }

  render() {
this.op();
    return (
      <div className={'playlist-images'}style={{display: this.props.visible ? 'block' : 'none'}}>
        {
          this.props.data.images.map((item, key)=>{
            return (
              <img className={'playlist--one-image'} src={item} key={key} width={'200px'}></img>
            )
          })
        }
      </div>
    )
  }
}

export const ImagesForPlaylist = connect(({imgsPlaylistReducer}) =>
    ({
      data: imgsPlaylistReducer.data,
      visible: imgsPlaylistReducer.visible
    })
  ,
  dispatch => ({})
)(ImagesPlaylist);