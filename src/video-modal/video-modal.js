/**
 * Open in a modal a local video
 *
 * Dependencies:
 * - Video JS (https://videojs.com/)
 * - CSS styling
 * - Babel compiling to use with older browsers
 *
 * Usage:
 * - Attach classname "js-play-video" to the trigger element
 * - Add the attribute "data-videosrc" on the trigger with the path to the video
 */

const playVideoBtns = document.querySelectorAll('.js-play-video');
let overlayCnt = document.querySelector('.js-overlay');
let btnClose = document.querySelector('.js-close-overlay');
let videoCnt = document.querySelector('.js-video');
let videoPlayer = '';

// Check if Overlay element exists
if (overlayCnt === null) {
  // Create Overlay element if it doesn't exist
  overlayCnt = document.createElement('div');
  overlayCnt.style.position = 'fixed';
  overlayCnt.style.zIndex = '-1';
  overlayCnt.style.top = 0;
  overlayCnt.style.left = 0;
  overlayCnt.style.display = 'flex';
  overlayCnt.style.alignItems = 'center';
  overlayCnt.style.width = '100vw';
  overlayCnt.style.height = '100vh';
  overlayCnt.style.padding = '2% 10%';
  overlayCnt.style.backgroundColor = 'rgba(0,0,0,0.8)';
  overlayCnt.style.boxSizing = 'border-box';
  overlayCnt.style.opacity = 0;
  overlayCnt.style.visibility = 'hidden';
  overlayCnt.style.maxHeight = 0;

  overlayCnt.className = 'js-overlay';
  document.body.appendChild(overlayCnt);
}

// Check if Button Close Overlay element exists
if (btnClose === null) {
  // Create Button Close Overlay element if it doesn't exist
  btnClose = document.createElement('div');
  btnClose.style.position = 'absolute';
  btnClose.style.top = '0.4em';
  btnClose.style.right = '0.5em';
  btnClose.style.width = '2em';
  btnClose.style.height = '2em';
  btnClose.style.padding = '0.5em';
  btnClose.style.fontSize = '1.5rem';
  btnClose.style.cursor = 'pointer';
  btnClose.className = 'js-close-overlay';
  overlayCnt.appendChild(btnClose);

  let btnCloseInner = document.createElement('div');
  btnCloseInner.style.position = 'relative';
  btnCloseInner.style.height = '1em';
  btnCloseInner.style.width = '1em';
  btnCloseInner.style.boxSizing = 'border-box';
  btnClose.appendChild(btnCloseInner);

  // Create X from 2 children
  let btnCloseLineOne = document.createElement('span');
  btnCloseLineOne.style.position = 'absolute';
  btnCloseLineOne.style.top = '50%';
  btnCloseLineOne.style.left = 0;
  btnCloseLineOne.style.display = 'block';
  btnCloseLineOne.style.width = '1em';
  btnCloseLineOne.style.height = '0.15em';
  btnCloseLineOne.style.backgroundColor = 'white';
  btnCloseLineOne.style.borderRadius = '1em';
  btnCloseLineOne.style.transform = 'rotate(45deg)';
  btnCloseInner.appendChild(btnCloseLineOne);

  let btnCloseLineTwo = document.createElement('span');
  btnCloseLineTwo.style.position = 'absolute';
  btnCloseLineTwo.style.top = '50%';
  btnCloseLineTwo.style.right = 0;
  btnCloseLineTwo.style.display = 'block';
  btnCloseLineTwo.style.width = '1em';
  btnCloseLineTwo.style.height = '0.15em';
  btnCloseLineTwo.style.backgroundColor = 'white';
  btnCloseLineTwo.style.borderRadius = '1em';
  btnCloseLineTwo.style.transform = 'rotate(-45deg)';
  btnCloseInner.appendChild(btnCloseLineTwo);
}

// Check if Video element exists
if (videoCnt === null) {
  // Create Video element if it doesn't exist
  videoCnt = document.createElement('video');
  videoCnt.className = 'js-video video-js vjs-big-play-centered';
  overlayCnt.appendChild(videoCnt);
}

const hideElement = (elem) => {
  elem.style.zIndex = '-1';
  elem.style.opacity = 0;
  elem.style.visibility = 'hidden';
  elem.style.maxHeight = 0;
};

const showElement = (elem) => {
  elem.style.zIndex = '999';
  elem.style.opacity = 1;
  elem.style.visibility = 'visible';
  elem.style.maxHeight = '9999em';
};

// Start video player
const startVideo = (videoUrl) => {
  showElement(overlayCnt);

  document.body.style.overflow = 'hidden';

  videoPlayer.src({
    src: videoUrl,
    type: 'video/mp4',
  });

  if (typeof videojs !== "undefined") {
    videojs(videoCnt).play();
  }
};

// Stop video player
const stopVideo = () => {
  hideElement(overlayCnt);

  document.body.style.overflow = 'auto';

  if (typeof videojs !== "undefined") {
    videojs(videoCnt).pause();
  }
};

playVideoBtns.forEach((videobtn) => {
  videobtn.addEventListener('click', () => {
    startVideo(videobtn.dataset.videosrc);
  });
});

btnClose.addEventListener('click', () => {
  stopVideo();
});

// Initialize video player
document.addEventListener('DOMContentLoaded', () => {
  if (typeof videojs !== "undefined") {
    videoPlayer = videojs(videoCnt, {
      controls: true,
      aspectRatio: '16:9',
      fluid: true,
    });
  }
});
