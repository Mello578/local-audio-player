const {PlayList} = require('../classes/PlayList');

const fs = require('fs');

const MUSIC_DIRECTORY = './audio/';
const musicExpansion = '.mp3';
const imageExpansion = '.png';

function getPlayList() {
  return (req, res) =>
    generatedPlayList().then((playList) => res.send(playList))
}

function getName(path){
  const indexName = path.lastIndexOf('/');
  const indexExpansion = path.lastIndexOf('.');
  return path.slice(indexName + 1, indexExpansion);
}

function generatedPlayList() {
  return checkDirectory(MUSIC_DIRECTORY, 'directory')
    .then(arrayDirectory => {
      return Promise.all(arrayDirectory.map((item) => {
        return checkDirectory(item, 'data');
      }));
    })
    .then((filesArrays) => {
      return filesArrays.map((files, key) => {
        const image = files.find(data => data.slice(-4).localeCompare(imageExpansion) === 0);
        const music = files.filter(data => data.slice(-4).localeCompare(musicExpansion) === 0);
        const trackName = music.map(data => getName(data));
        return new PlayList(key, image, music, trackName)
      });
    });
}

function checkDirectory(directory, mode) {
  let pathName = mode === 'directory' ? './audio' : directory;
  return new Promise((resolve) => {
    fs.readdir(directory, (err, files) => {
      if (err) {
        return console.error(err)
      }
      resolve(files.map(file => pathName + '/' + file));
    });
  });
}

module.exports = getPlayList();
