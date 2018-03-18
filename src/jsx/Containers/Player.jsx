import React, {Component} from 'react';
import {PlayerHeader} from '../components/PlayerHeader';
import {PlayerBody} from './PlayerBody';
import {PanelsControl} from './PanelsControl';

export class Player extends Component {
  render() {
    console.log('wdwddwdwd');
    return (
      <div className={'player'}>
        <PlayerHeader/>
        <PlayerBody/>
        <PanelsControl/>
      </div>
    )
  }
}
