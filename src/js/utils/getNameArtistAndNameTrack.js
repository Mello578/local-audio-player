export function getName(trackData) {
const separator = ' - ';
const index = trackData.indexOf(separator);
return {
  artist: index !== -1 ? trackData.slice(0, index) : '',
  trackName: index !== -1 ? trackData.slice(index + 3) : trackData
}
}