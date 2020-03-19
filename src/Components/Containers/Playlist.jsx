import React, { Component } from 'react';

import { PlaylistTracks } from '../Components/PlaylistTracks';
import { ConnectedPlaylistImages } from '../Connected/PlaylistImages';

export class Playlist extends Component {
    render() {
        return (
            <div className="playlist">
                <ConnectedPlaylistImages />
                <PlaylistTracks />
            </div>
        );
    }
}
