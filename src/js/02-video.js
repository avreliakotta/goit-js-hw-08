import VimeoPlayer from '@vimeo/player';
import throttle from 'lodash.throttle';
const iframe = document.querySelector('#vimeo-player');
const player = new VimeoPlayer(iframe, {
  id: 236203659,
  width: 640,
  height: 360,
  url: 'https://player.vimeo.com/video/236203659',
});
player
  .play()
  .then(() => {
    console.log('Video started playing');
  })
  .catch(error => {
    console.error('Error playing video:', error);
  });

player.on(
  'timeupdate',
  throttle(function (data) {
    const currentTime = data.seconds;
    const savedCurrentTimeMarkup = localStorage.setItem(
      'videoplayer-current-time',
      currentTime.toString()
    );
  }, 1000)
);
function getSavedCurrentTime() {
  const savedCurrentTime = localStorage.getItem('videoplayer-current-time');
  if (savedCurrentTime) {
    return Number(savedCurrentTime);
  }
}

player
  .setCurrentTime(getSavedCurrentTime())
  .then(() => {})
  .catch(error => {
    console.error('Error setting currentTime:', error);
  });
