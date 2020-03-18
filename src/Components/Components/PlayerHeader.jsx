import React, {Component} from 'react';
import {connect} from 'react-redux';

class Player extends Component{
  render(){
    return (
      <div>
        <span className={'player-header--name-performer'}>{this.props.dataPlay.trackArtist}</span>
        <span className={'player-header--name-track'}>{this.props.dataPlay.trackTitle ||  this.props.dataPlay.trackName}</span>
      </div>
    )
  }
}

export const PlayerHeader = connect(
  ({playerControlReducer}) =>
    ({
      dataPlay: playerControlReducer.data
    })
)(Player);