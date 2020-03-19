import React, { Component } from 'react';
import { connect } from 'react-redux';

import { setRepeat } from '../../../store/actions/playerControlAction';
import { audioController } from '../../../utils/startStopPlay';
import { store } from '../../index';

export class Revert extends Component {
    revert() {
        const repeatedTrack = !audioController.audio.loop;
        audioController.audio.loop = repeatedTrack;

        store.dispatch(setRepeat(repeatedTrack));
    }

    render() {
        return <button className={'button button-revert'} onClick={() => this.revert()} />;
    }
}
