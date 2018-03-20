import React, {Component} from 'react';

export class PlayerHeader extends Component{
  render(){
    return (
      <div>
        <span className={'player-header--name-performer'}>Lykke Li</span>
        <span className={'player-header--name-track'}>I Follow Rivers (The Magician Remix)</span>
      </div>
    )
  }
}