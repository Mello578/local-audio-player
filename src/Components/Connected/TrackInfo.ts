import { connect } from 'react-redux';
import { TrackInfo } from 'src/Components/Player/TrackInfo';

function mapStateToProps({ playerControlReducer }) {
    return playerControlReducer.trackInfo;
}

export const ConnectedTrackInfo = connect(mapStateToProps)(TrackInfo);
