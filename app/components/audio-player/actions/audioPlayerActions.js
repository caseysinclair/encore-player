export const PLAY_AUDIO = 'PLAY_AUDIO';
export const STOP_AUDIO = 'STOP_AUDIO';
export const SET_PROGRESS = 'SET_PROGRESS';
export const SET_DURATION = 'SET_DURATION';
export const SEEKING = 'SEEKING';
export const AUDIO_ELEMENT = 'AUDIO_ELEMENT';
export const AUDIO_TIME = 'AUDIO_TIME';

import {playMedia, stopMedia} from '../audioApiService';

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

export function updateProgress(setTime) {
  return function (dispatch) {
    dispatch(setTimer(setTime));
  }
}