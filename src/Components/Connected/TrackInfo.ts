import { connect } from 'react-redux';
import { TrackInfo } from 'src/Components/Player/TrackInfo';

function mapStateToProps({ playerControlReducer }) {
    return playerControlReducer.data;
}

export const ConnectedTrackInfo = connect(mapStateToProps)(TrackInfo);
