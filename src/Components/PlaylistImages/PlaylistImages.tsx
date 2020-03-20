import React from 'react';
import { connect } from 'react-redux';
import { hideImagesPlaylistAction } from 'src/store/actions/imagesPlaylistAction';
import { vinylBackgroundAction } from 'src/store/actions/vinylBackgroundAction';
import { playlistAction } from 'src/store/actions/playlistActions';

import { getName } from '../../utils/getNameArtistAndNameTrack';

import style from './PlaylistImages.module.less';
import {
    mapDispatchToPropsPlaylistImages,
    mapStateToPropsPlaylistImages,
    PlaylistImagesDispatchModel,
    PlaylistImagesStateModel
} from './propsComponent';

interface PlaylistImagesModel extends PlaylistImagesStateModel, PlaylistImagesDispatchModel {}

const PlaylistImagesComponent: React.FC<PlaylistImagesModel> = ({
    visible,
    imagesInfo,
    moviePlaylist,
    hideImagesPlaylist,
    setBackgroundVinyl,
    allInfoPlaylist
}) => {
    const openPlaylist = async e => {
        const idPlaylist = e.target.id;
        const selectedPlayList = playlistAction(
            allInfoPlaylist.tracks[idPlaylist].map((item, key) => {
                const meta = allInfoPlaylist.meta[idPlaylist][key];
                return {
                    id: key,
                    namePlaylist: allInfoPlaylist.namePlaylist[idPlaylist],
                    track: item,
                    tracksDuration: allInfoPlaylist.duration[idPlaylist][key],
                    ...getName(meta, allInfoPlaylist.trackName[idPlaylist][key])
                };
            })
        );
        const hideImages = hideImagesPlaylistAction(false);

        let pathImagesVinyl = allInfoPlaylist.images[idPlaylist].slice(2);
        pathImagesVinyl = `url(${pathImagesVinyl}) no-repeat 12px 10px / 99%`;

        moviePlaylist(selectedPlayList);
        hideImagesPlaylist(hideImages);
        setBackgroundVinyl(vinylBackgroundAction(pathImagesVinyl));
    };

    return visible && imagesInfo ? (
        <>
            {imagesInfo.images.map((item, key) => {
                return (
                    <img
                        className={style.playlistImage}
                        src={item}
                        key={key}
                        id={imagesInfo.id[key].toString()}
                        width={'200px'}
                        onClick={openPlaylist}
                        alt={'Какая то картинка'}
                    />
                );
            })}
        </>
    ) : null;
};

export const PlaylistImages = connect(
    mapStateToPropsPlaylistImages,
    mapDispatchToPropsPlaylistImages
)(PlaylistImagesComponent);
