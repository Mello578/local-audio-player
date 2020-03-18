import React, { Component } from 'react';
import { connect } from 'react-redux';

import { playlist } from '../../store/actions/playlistActions';
import { hideImagesPlaylistAction } from '../../store/actions/imagesPlaylistAction';
import { backgroundVinylAction } from '../../store/actions/backgroundVinylAction';
import { getName } from '../../utils/getNameArtistAndNameTrack';

export class ImagesOfPlaylist extends Component {
    async openPlaylist(e) {
        const idPlaylist = e.target.id;
        const allData = this.props.allData;
        const selectedPlayList = playlist(
            allData.tracks[idPlaylist].map((item, key) => {
                const meta = allData.meta[idPlaylist][key];
                return {
                    id: key,
                    namePlaylist: allData.namePlaylist[idPlaylist],
                    track: item,
                    tracksDuration: allData.duration[idPlaylist][key],
                    ...getName(meta, allData.trackName[idPlaylist][key])
                };
            })
        );
        const hideImages = hideImagesPlaylistAction(false);

        let pathImagesVinyl = allData.images[idPlaylist].slice(2);
        pathImagesVinyl = `url(${pathImagesVinyl}) no-repeat 12px 10px / 99%`;
        const actionImagesVinyl = backgroundVinylAction(pathImagesVinyl);

        this.props.moviePlaylist(selectedPlayList);
        this.props.hideImagesPlaylist(hideImages);
        this.props.setBackgroundVinyl(actionImagesVinyl);
    }

    render() {
        return this.props.visible && this.props.data ? (
            <div className="playlist-images">
                {this.props.data.images.map((item, key) => {
                    return (
                        <img
                            className={'playlist--one-image'}
                            src={item}
                            key={key}
                            id={this.props.data.id[key]}
                            width={'200px'}
                            onClick={e => this.openPlaylist(e)}
                        />
                    );
                })}
            </div>
        ) : null;
    }
}

export const PlaylistImages = connect(
    ({ allDataReducer, imagesPlaylistReducer }) => ({
        allData: allDataReducer.data,
        data: imagesPlaylistReducer.data,
        visible: imagesPlaylistReducer.visible
    }),
    dispatch => ({
        moviePlaylist(playlist) {
            dispatch({ type: playlist.type, payload: playlist.data });
        },
        hideImagesPlaylist(mode) {
            dispatch({ type: mode.type, payload: mode.data });
        },
        setBackgroundVinyl(img) {
            dispatch({ type: img.type, payload: img.background });
        }
    })
)(ImagesOfPlaylist);
