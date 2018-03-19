const {PlayList} = require('../classes/PlayList');

const fs = require('fs');
const path = require('path');

const MUSIC_DIRECTORY = path.resolve(__dirname, '../../audio/');
const musicExpansion = '.mp3';
const imageExpansion = '.png';

function generatedPlayList() {
  return checkDirectory(MUSIC_DIRECTORY, 'directory')
    .then(arrayDirectory => {
      return Promise.all(arrayDirectory.map((item) => {
        return checkDirectory(item, 'data');
      }));
    })
    .then((filesArrays) => {
      return filesArrays.map((files, key) => {
        let image = files.find(data => data.slice(-4).localeCompare(imageExpansion) === 0);
        let music = files.filter(data => data.slice(-4).localeCompare(musicExpansion) === 0);
        return new PlayList(key, image, music)
      });
    });
}

function checkDirectory(directory, mode) {
  let pathName = mode === 'directory' ? path.resolve(__dirname, '../../audio/') : directory;
  return new Promise((resolve) => {
    fs.readdir(directory, (err, files) => {
      if (err) {
        return console.error(err)
      }
      resolve(files.map(file => path.resolve(pathName, file)));
    });
  });
}

module.exports = generatedPlayList();
