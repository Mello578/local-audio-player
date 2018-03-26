const {PlayList} = require('../classes/PlayList');

const fs = require('fs');
const mime = require('mime');
const audioMetaData = require('audio-metadata');
const mp3Duration = require('mp3-duration');

const MUSIC_DIRECTORY = './audio/';
const musicExpansion = 'audio';
const imageExpansion = 'image';

function getPlayList() {
  return (req, res) =>{
    return generatedPlayList().then(playList => res.send(playList));
  }
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
        let playlist = new PlayList();
        playlist.id = key;
        playlist.img = files.find(data =>  mime.getType(data).indexOf(imageExpansion) > -1);
        playlist.music = files.filter((data) => mime.getType(data).indexOf(musicExpansion) > -1);
        playlist.trackName = playlist.music.map(data => getName(data));
        let meta = playlist.music.map(data => Promise.resolve(fs.readFileSync(data)));
        return Promise.all(meta).then(data => {
         playlist.meta = data.map(item => audioMetaData.id3v2(item));
         playlist.duration = data.map(item => mp3Duration(item));
         return playlist
        });
      });
    }).then((data)=>{
      return Promise.all(data);
    }).then(arrayPlaylist => arrayPlaylist)
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
