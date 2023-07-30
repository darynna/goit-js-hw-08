import Player from '@vimeo/player';
import throttle from 'lodash.throttle';
const LS_KEY = "videoplayer-current-time";
const iframe = document.querySelector('iframe');
const player = new Player(iframe);

    

const onPlay = function(data) {
    localStorage.setItem(LS_KEY, data.seconds)
};

player.on('timeupdate', throttle(onPlay, 1000));
const savedTima = localStorage.getItem(LS_KEY)

player.setCurrentTime(savedTima || 0).then(function(seconds) {
    // seconds = the actual time that the player seeked to
}).catch(function(error) {
    switch (error.name) {
        case 'RangeError':
            break;
        default:
            break;
    }
});