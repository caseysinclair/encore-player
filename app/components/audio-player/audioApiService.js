import {Howl} from 'howler';
import {duration, progress, play, stop, end, playable} from './actions/audioPlayerActions';
import {store} from '../../../main.js';

export let track = null;
let progressInterval = {};

export const load = (media) => track = new Howl({
  src: [media],
  usingWebAudio: true,
  html5: true,
  ctx: true,
  onload: () => {
    store.dispatch(playable());
    return store.dispatch(duration(track.duration()))
  },
  onplay: () => {
    store.dispatch(play());
    return progressInterval.set = setInterval(() => {
      store.dispatch(progress(track.seek()))
    }, 120);
  },
  onpause: () => {
    store.dispatch(stop());
    return clearInterval(progressInterval.set);
  },
  onend: () => {
    store.dispatch(end());
    return clearInterval(progressInterval.set)
  }
});

export function playMedia() {
  return track.play();
}

export function stopMedia() {
  return track.pause();
}

export function seekMedia(v) {
  stopMedia();
  track.seek(v);
  return playMedia();
}