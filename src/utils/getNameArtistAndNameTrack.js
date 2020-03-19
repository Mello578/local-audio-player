export function getName(meta, trackName) {
    return {
        trackName: meta && meta.artist && meta.title ? `${meta.artist} - ${meta.title}` : trackName,
        trackArtist: meta && meta.artist ? meta.artist : '',
        trackTitle: meta && meta.title ? meta.title : ''
    };
}
