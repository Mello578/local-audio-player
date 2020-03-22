import React from 'react';
import { connect } from 'react-redux';
import { secondsFormat } from 'src/utils/secondsFormat';
import { playTrack, Playlist } from 'store';
import { TRACK_PLAY, TRACK_STOP } from 'src/constants';
import { audioController, startPauseStopPlay } from 'src/utils/startStopPlay';

import {
    mapDispatchToPropsPlaylistTracks,
    mapStateToPropsPlaylistTracks,
    PlaylistTracksDispatchModel
} from './propsComponent';
import style from './PlaylistTracks.module.less';
import { TrackSlider } from './TrackSlider';

interface TracksOfPlaylistModel extends Playlist, PlaylistTracksDispatchModel {}

const TracksOfPlaylist: React.FC<TracksOfPlaylistModel> = ({ tracksInfo, visible, played }) => {
    const setPlayTrack = e => {
        const numbTrack = e.target.id.replace(/\D+/g, '');
        const selectedTrack = tracksInfo.find(item => item.id === parseInt(numbTrack, 10));
        //остановка текущего трека при включении следующего трека
        const track = audioController ? audioController.characteristic : audioController;
        if (track && selectedTrack.id !== track.id) {
            startPauseStopPlay(audioController.characteristic, TRACK_STOP);
        }
        startPauseStopPlay(selectedTrack, TRACK_PLAY, tracksInfo);
        played(playTrack(selectedTrack));
    };

    return !visible ? null : (
        <div className={style.tracks}>
            {tracksInfo.map((item, key) => {
                return (
                    <div key={key} className={style.trackContainer}>
                        <div className={style.track}>
                            <img
                                src="src/static/images/smallPlay.png"
                                alt="play"
                                id={`play${item.id}`}
                                onClick={setPlayTrack}
                            />
                            <span className={style.trackName} id={`track-name${item.id}`} onClick={setPlayTrack}>
                                {item.trackName}
                            </span>
                            <div className={style.trackDuration}>
                                <span id={`track-duration_${item.id}`}>{secondsFormat(item.tracksDuration)}</span>
                            </div>
                        </div>
                        <TrackSlider trackName={item.trackName} id={item.id} />
                    </div>
                );
            })}
        </div>
    );
};

export const PlaylistTracks = connect(
    mapStateToPropsPlaylistTracks,
    mapDispatchToPropsPlaylistTracks
)(TracksOfPlaylist);
