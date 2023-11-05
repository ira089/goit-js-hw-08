import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
// console.dir(iframe);

const player = new Player(iframe, {
  id: 19231868,
  width: 640,
});
// const data = { duration: 61.857, percent: 0.049, seconds: 3.034 };

const onPlay = function (data) {
  console.log('The currentTime ');
  const timeData = data.seconds;
  console.log(timeData);
  //   _.throttle(localStorage.setItem('videoplayer-current-time', timeData), 1000);
  localStorage.setItem('videoplayer-current-time', timeData);
};

player.on('timeupdate', throttle(onPlay, 1000));

const timeGet = localStorage.getItem('videoplayer-current-time');
// console.log(timeGet);
player
  .setCurrentTime(timeGet)
  .then(function (seconds) {
    // seconds = the actual time that the player seeked to
  })
  .catch(function (error) {
    switch (error.name) {
      case 'RangeError':
        // the time was less than 0 or greater than the video’s duration
        break;

      default:
        // some other error occurred
        break;
    }
  });
