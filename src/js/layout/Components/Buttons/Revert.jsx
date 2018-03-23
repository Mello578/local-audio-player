import React, {Component} from 'react';
import {connect} from 'react-redux';

class RevertButton extends Component {

  revert() {
    let repeatedTrack =  this.props.dataPlay.currentTrack.loop;
    this.props.dataPlay.currentTrack.loop = !repeatedTrack;
  }

  render() {
    return (
      <button className={'button button-revert'} onClick={() => this.revert()}></button>
    )
  }
}

export const Revert = connect(
  ({playerControlReducer}) =>
    ({
      dataPlay: playerControlReducer.data
    })
)(RevertButton);