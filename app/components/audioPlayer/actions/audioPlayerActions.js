export const PLAY_AUDIO = 'PLAY_AUDIO';
export const STOP_AUDIO = 'STOP_AUDIO';
export const SET_PROGRESS = 'SET_PROGRESS';

export function play() {
  return {
    type: PLAY_AUDIO
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