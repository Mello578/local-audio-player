import React, {Component} from 'react';
import {connect} from 'react-redux';

class TrackSlider extends Component {

  dataPlay(state){
    console.log('state ', state)

  }

  render() {
    // this.mapStateToProps(this.props.dataPlay);
    return (
      <div className={'one-track--slider-box'}>
        <div className={'slider-buffering'} id={'slider-buffering' + this.props.id}>
          <div className={'slider-currentTime'} id={'slider-currentTime' + this.props.id}></div>
        </div>
      </div>
    )
  }
}

export const TracklistSlider = connect(({playerControlReducer, mergeProps}) =>
    ({
      dataPlay: playerControlReducer,
      mergeProps
    }),
  dispatch => ({


  })
)(TrackSlider);