import React, { Component } from 'react';
import { connect } from 'react-redux';

import { SOUND_LOUD_BACKGROUND, SOUND_LOW_BACKGROUND } from '../../constants/playerConst';

class Indicator extends Component {
    render() {
        return (
            <div style={{ display: 'inherit' }}>
                <span
                    className={'player--volume-controls--phone-level1'}
                    style={{ background: Math.round(this.props.volume * 100) > 24 ? SOUND_LOW_BACKGROUND : '' }}
                />
                <span
                    className={'player--volume-controls--phone-level2'}
                    style={{ background: Math.round(this.props.volume * 100) > 74 ? SOUND_LOUD_BACKGROUND : '' }}
                />
                {/*<span className={'volume-level'}>{Math.round(this.props.volume * 100)}</span>*/}
            </div>
        );
    }
}

export const VolumeIndicator = connect(({ soundControlReducer }) => ({
    volume: soundControlReducer.volume
}))(Indicator);
