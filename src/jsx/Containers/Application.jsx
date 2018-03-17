import React, {Component} from 'react';

import {Player} from './Player';

export class Application extends Component {
  render() {
    return (
      <div className={'container'}>
        <Player/>
      </div>
    )
  }
}
