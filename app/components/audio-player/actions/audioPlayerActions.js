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
  console.log(val);
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
    return updateProgress(dispatch, ref)
  }
}

export function stopAudio(ref) {
  return function (dispatch) {
    dispatch(stop());
    return ref.pause();
  }
}

const updateProgress = (dispatch, player) => {
  player.play();
  return setInterval(dispatch(progress(player.currentTime)), 500);
};
