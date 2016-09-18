export const PLAY_AUDIO = 'PLAY_AUDIO';
export const STOP_AUDIO = 'STOP_AUDIO';
export const SET_PROGRESS = 'SET_PROGRESS';
export const SET_DURATION = 'SET_DURATION';
export const SEEKING = 'SEEKING';

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

function handleProgress(player) {
  player.timer = {};

  if (player.timer.setProgress) {
    clearInterval(player.timer.setProgress);
  }

  player.timer.setProgress = setInterval(() => {
    if (player.paused) {
      return clearInterval(player.timer.setProgress);
    } else {
      return this.props.progress(player.currentTime);
    }
  }, 500);
}