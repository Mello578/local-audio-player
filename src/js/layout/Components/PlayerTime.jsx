import React, {Component} from 'react';
import {connect} from 'react-redux';
import {secondsFormat} from '../../utils/secondsFormat';

class Time extends Component {

  trackDuration(time) {
    return time
      ? secondsFormat(time)
      : '';
  }

  render() {
    return (
      <div className={'player-time-manager'}>
        <span>{this.trackDuration(this.props.playData.currentTime)}</span>
        <div className={'player-time__gap'}></div>
        <span>{this.trackDuration(this.props.playData.data.tracksDuration)}</span>
      </div>
    )
  }
}

export const PlayerTime = connect(({playerControlReducer}) =>
  ({
    playData: playerControlReducer
  })
)(Time);