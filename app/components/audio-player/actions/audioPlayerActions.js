export const PLAY_AUDIO = 'PLAY_AUDIO';
export const STOP_AUDIO = 'STOP_AUDIO';
export const SET_PROGRESS = 'SET_PROGRESS';
export const SET_DURATION = 'SET_DURATION';
export const SEEKING = 'SEEKING';

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

export function playAudio(ref) {
  return function (dispatch) {
    dispatch(play());
    return ref.play();
  }
}

export function stopAudio(ref) {
  return function (dispatch) {
    dispatch(stop());
    return ref.pause();
  }
}

export function updateProgress(ref, setTime) {
  return function (dispatch) {
    dispatch(progress(ref.setTime));

    return ref.currentTime = setTime;
  }
}