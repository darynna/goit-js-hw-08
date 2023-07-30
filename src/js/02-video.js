import Player from '@vimeo/player';
import throttle from 'lodash.throttle';
const LS_KEY = "videoplayer-current-time";
const iframe = document.querySelector('iframe');
    const player = new Player(iframe);

    player.on('play', function() {
        console.log('played the video!');
    });

    player.getVideoTitle().then(function(title) {
        console.log('title:', title);
    });

    const onPlay = function(data) {
    localStorage.setItem(LS_KEY, data.seconds)
};

player.on('timeupdate', throttle(onPlay, 1000));
const savedTima = localStorage.getItem(LS_KEY)

player.setCurrentTime(savedTima).then(function(seconds) {
    // seconds = the actual time that the player seeked to
}).catch(function(error) {
    switch (error.name) {
        case 'RangeError':
            // the time was less than 0 or greater than the video’s duration
            break;

        default:
            // some other error occurred
            break;
    }
});