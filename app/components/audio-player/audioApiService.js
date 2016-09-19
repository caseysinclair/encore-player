import {Howl} from 'howler';
import {duration, progress, play, stop} from './actions/audioPlayerActions';
import {store} from '../../../main.js';

export let track = null;
let progressInterval = {};

export const load = (media) => track = new Howl({
  src: [media],
  usingWebAudio: true,
  html5: true,
  ctx: true,
  onload: () => {
    return store.dispatch(duration(track.duration()))
  },
  onplay: () => {
    store.dispatch(play());
    return progressInterval.set = setInterval(() => {
      store.dispatch(progress(track.seek()))
    }, 500);
  },
  onpause: () => {
    store.dispatch(stop());
    return clearInterval(progressInterval.set)
  }
});

export function playMedia() {
  return track.play();
}

export function stopMedia() {
  return track.pause();
}