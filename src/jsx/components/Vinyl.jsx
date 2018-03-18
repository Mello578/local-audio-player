import React, {Component} from 'react';

export class Vinyl extends Component {
  render() {
    return (
      <div className={'player-body'}>
        <div className={'player-body--center-vinyl'}>
          <img src='/src/img/vinyl.png' alt='vinyl' className={'player-body--vinyl'}/>
        </div>
      </div>
    )
  }
}