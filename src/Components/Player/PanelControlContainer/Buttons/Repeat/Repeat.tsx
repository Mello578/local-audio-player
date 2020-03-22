import React from 'react';
import { setRepeat } from 'src/store/actions/playerControlAction';
import { audioController } from 'src/utils/startStopPlay';
import { connect } from 'react-redux';

import { mapDispatchToPropsRepeat, RepeatDispatchModel } from './propsComponent';
import style from './Repeat.module.less';

const RepeatComponent: React.FC<RepeatDispatchModel> = ({ setRepeatTrack }) => {
    const repeat = () => {
        const repeatedTrack = !audioController.audio.loop;
        audioController.audio.loop = repeatedTrack;
        setRepeatTrack(setRepeat(repeatedTrack));
    };

    return <button className={`button ${style.repeat}`} onClick={repeat} />;
};

export const Repeat = connect(
    null,
    mapDispatchToPropsRepeat
)(RepeatComponent);
