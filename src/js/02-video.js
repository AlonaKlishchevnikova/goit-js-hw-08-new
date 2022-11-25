import Player from "@vimeo/player";
import throttle from "lodash.throttle";
const VIDEO_TIME = "videoplayer-current-time";

const iframe = document.querySelector('iframe');
const player = new Player(iframe);
const currentTime = localStorage.getItem(VIDEO_TIME);


// player.setCurrentTime(currentTime);
function onSavePausedTime ({ seconds }) {
    localStorage.setItem(VIDEO_TIME, seconds);    
}
currentTime ? player.setCurrentTime(currentTime) : null;
player.on('timeupdate', throttle(onSavePausedTime, 1000));

