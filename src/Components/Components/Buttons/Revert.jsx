import React, {Component} from 'react';
import {connect} from 'react-redux';
import {setRepeat} from '../../../js/store/actions/playerControlAction';
import {audioController} from '../../../js/utils/startStopPlay';
import {store} from '../../index';

export class Revert extends Component {

  revert() {
    const repeatedTrack = !audioController.audio.loop;
    audioController.audio.loop = repeatedTrack;

    const repeatAction = setRepeat(repeatedTrack);
    store.dispatch({type: repeatAction.type, payload: repeatAction.data});
  }

  render() {
    return (
      <button className={'button button-revert'} onClick={() => this.revert()}></button>
    )
  }
}