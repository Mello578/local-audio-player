const fs = require('fs');
const os = require('os');

const mime = require('mime');
const audioMetaData = require('audio-metadata');
const mp3Duration = require('mp3-duration');
const watch = require('watch');

const MUSIC_DIRECTORY = './audio/';
const musicExpansion = 'audio';
const imageExpansion = 'image';

let allData = [];

/**
 * просматриваем за состоянием директории audio, при любом изменении запускаем парсинг внутри директории
 */
(() => {
    watch.watchTree(MUSIC_DIRECTORY, () => {
        generatedPlayList().then(playList => (allData = playList.map(item => item)));
    });
})();

function getPlayList() {
    return (req, res) => res.send(allData);
}

/**
 * резервное название на случай отсутствия метаданных
 * @param path
 */
function getName(path) {
    const indexName = path.lastIndexOf('/');
    const indexExpansion = path.lastIndexOf('.');
    return path.slice(indexName + 1, indexExpansion);
}

function getNamePlaylist(path) {
    const indexName = path.lastIndexOf('audio/');
    const indexExpansion = path.lastIndexOf('/');
    return path.slice(indexName + 6, indexExpansion);
}

function generatedPlayList() {
    return checkDirectory(MUSIC_DIRECTORY, 'directory')
        .then(arrayDirectory => {
            return Promise.all(
                arrayDirectory.map(item => checkDirectory(item, 'data'))
            );
        })
        .then(filesArrays => {
            return filesArrays.map((files, key) => {
                const tracks = files.filter(data => mime.getType(data).indexOf(musicExpansion) > -1);
                const playlist = {
                    id: key,
                    namePlaylist: getNamePlaylist(files[0]),
                    images: files.find(data => mime.getType(data).indexOf(imageExpansion) > -1),
                    trackName: tracks.map(data => getName(data)),
                    tracks
                };
                const meta = playlist.tracks.map(data => Promise.resolve(fs.readFileSync(data)));
                return Promise.all(meta).then(data => {
                    playlist.meta = data.map(item => audioMetaData.id3v2(item));
                    if (os.platform() === 'linux') {
                        playlist.duration = data.map(item => mp3Duration(item)._settledValue);
                    } else {
                        playlist.duration = data.map(item => mp3Duration(item)._settledValue());
                    }

                    return playlist;
                });
            });
        })
        .then(data => {
            return Promise.all(data);
        })
        .then(arrayPlaylist => arrayPlaylist);
}

function checkDirectory(directory, mode) {
    const pathName = mode === 'directory' ? './audio' : directory;
    return new Promise(resolve => {
        fs.readdir(directory, (err, files) => {
            if (err) {
                return console.error(err);
            }
            resolve(files.map(file => `${pathName}/${file}`));
        });
    });
}

module.exports = getPlayList();
