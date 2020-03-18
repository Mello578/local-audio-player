import React, { Component } from 'react';

import { Player } from './Player';
import { Playlist } from './Playlist';

export class Application extends Component {
    render() {
        return (
            <div className={'container'}>
                <Player />
                <Playlist />
            </div>
        );
    }
}
