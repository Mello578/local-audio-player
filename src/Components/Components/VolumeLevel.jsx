import React, {Component} from 'react';
import {connect} from 'react-redux';

class Volume extends Component {

  render() {
    return (
      <span className={'volume-level'}>{Math.round(this.props.volume * 100)}</span>
    )
  }
}

export const VolumeLevel = connect(({soundControlReducer}) =>
  ({
    volume: soundControlReducer.volume
  })
)(Volume);