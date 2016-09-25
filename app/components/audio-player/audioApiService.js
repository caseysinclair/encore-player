import {Howl} from 'howler';
import {duration, progress, play, stop, end, playable} from './actions/audioPlayerActions';
import {currentlyPlaying} from '../media-item/playlistActions';
import {store} from '../../../main.js';

export let track = null;
let progressInterval = {};

export const load = (media) => track = new Howl({
  src: [media],
  usingWebAudio: true,
  autoplay: true,
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

export function switchMedia(song, media, current) {
  const payload = {media, current};
  const isLoaded = track.state();

  if (isLoaded !== 'unloaded') {
    track.unload();
  }

  load(song);
  return store.dispatch(currentlyPlaying(payload))
}