import React from 'react';
import { hideImagesPlaylistAction } from 'src/store/actions/imagesPlaylistAction';
import { ImagesPlaylist } from 'src/store/initionalState/models';
import { playerVinylAction } from 'src/store/actions/playerVinylAction';

import { playlist } from '../../store/actions/playlistActions';
import { getName } from '../../utils/getNameArtistAndNameTrack';

interface PlaylistImagesModel extends ImagesPlaylist {
    moviePlaylist(t: any): void;
    hideImagesPlaylist(t: any): void;
    setBackgroundVinyl(t: any): void;
    allInfoPlaylist: any;
}

export const PlaylistImages: React.FC<PlaylistImagesModel> = ({
    visible,
    imagesInfo,
    moviePlaylist,
    hideImagesPlaylist,
    setBackgroundVinyl,
    allInfoPlaylist
}) => {
    const openPlaylist = async e => {
        const idPlaylist = e.target.id;
        const selectedPlayList = playlist(
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
        const actionImagesVinyl = playerVinylAction(pathImagesVinyl);

        moviePlaylist(selectedPlayList);
        hideImagesPlaylist(hideImages);
        setBackgroundVinyl(actionImagesVinyl);
    };

    return visible && imagesInfo ? (
        <div className="playlist-images">
            {imagesInfo.images.map((item, key) => {
                return (
                    <img
                        className={'playlist--one-image'}
                        src={item}
                        key={key}
                        id={imagesInfo.id[key].toString()}
                        width={'200px'}
                        onClick={openPlaylist}
                    />
                );
            })}
        </div>
    ) : null;
};
