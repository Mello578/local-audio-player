import React, {Component} from 'react';
import {VinylData} from './Vinyl';
import {connect} from 'react-redux';

class Volume extends Component {

  render() {
    return (
      <span className={'volume-level'}>{Math.round(this.props.level * 100)}</span>
    )
  }
}

export const VolumeLevel = connect(({soundControlReducer}) =>
  ({
    level: soundControlReducer.level
  })
)(Volume);