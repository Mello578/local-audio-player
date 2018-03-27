import React, {Component} from 'react';
import {connect} from 'react-redux';
import {setRepeat} from '../../../store/actions/playerControlAction';

class RevertButton extends Component {

  revert() {
    const repeatedTrack = !this.props.dataPlay.currentTrack.loop;
    this.props.dataPlay.currentTrack.loop = repeatedTrack;
    const repeated = !this.props.repeat;
    const repeatAction = setRepeat(repeated);
    this.props.setRepeat(repeatAction);
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
      dataPlay: playerControlReducer.data,
      repeat: playerControlReducer.repeated
    }),
  dispatch => ({
    setRepeat(mode) {
      dispatch({type: mode.type, payload: mode.data})
    }
  })
)(RevertButton);