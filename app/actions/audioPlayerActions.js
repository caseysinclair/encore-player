import {Howl} from 'howler';
import {store} from '../../main.js';

export const PLAY_AUDIO = 'PLAY_AUDIO';
export const STOP_AUDIO = 'STOP_AUDIO';
export const SET_PROGRESS = 'SET_PROGRESS';
export const SET_DURATION = 'SET_DURATION';
export const SEEKING = 'SEEKING';
export const AUDIO_ELEMENT = 'AUDIO_ELEMENT';
export const AUDIO_TIME = 'AUDIO_TIME';
export const SET_END = 'SET_END';
export const IS_PLAYABLE = 'IS_PLAYABLE';
export const SOURCE_AUDIO = 'SOURCE_AUDIO';

let audio = null;

export function play() {
  return {
    type: PLAY_AUDIO,
  }
}

export function stop() {
  return {
    type: STOP_AUDIO
  }
}

export function progress(val) {
  return {
    type: SET_PROGRESS,
    val
  }
}

export function duration(val) {
  return {
    type: SET_DURATION,
    val
  }
}

export function seeking(val) {
  return {
    type: SEEKING,
    val
  }
}

export function end() {
  return {
    type: SET_END
  }
}

export function playable() {
  return {
    type: IS_PLAYABLE
  }
}

export function setSourceAudio(val) {
  return {
    type: SOURCE_AUDIO,
    val,
  }
}

export function setAudioElement(val) {
  return {
    type: AUDIO_ELEMENT,
    val
  }
}

export function setTimer(val) {
  return {
    type: AUDIO_TIME,
    val
  }
}

export function loadSrc(src) {
  audio = new Howl({
    src: [src],
    usingWebAudio: true,
    autoplay: false,
    html5: true,
    ctx: true,
    onload: () => {
      store.dispatch(playable());
      store.dispatch(duration(audio.duration()))
    },
    onend: () => {
      store.dispatch(end());
    }
  });

  return dispatch => dispatch(setSourceAudio(src))
}

export function playAudio() {
  startPlayBack();

  return dispatch => {
    dispatch(play());
    dispatch(updateCurrentProgress());
  }
}

function startPlayBack() {
  audio.play();
}

function updateCurrentProgress() {
  const incrementProgress = () => store.dispatch(updateCurrentProgress());

  return dispatch => {
    if (audio.playing()) {
      dispatch(progress(audio.seek()));
      return setTimeout(incrementProgress, 250);
    }
  }
}

export function pauseAudio() {
  return function (dispatch) {
    audio.pause();
    return dispatch(stop())
  }
}

export function stopAudio() {
  return function (dispatch) {
    audio.stop();
    return dispatch(stop())
  }
}

