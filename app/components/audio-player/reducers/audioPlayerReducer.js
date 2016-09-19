import {
  PLAY_AUDIO,
  STOP_AUDIO,
  SET_PROGRESS,
  SET_DURATION,
  SEEKING,
  AUDIO_ELEMENT,
  AUDIO_TIME,
} from '../actions/audioPlayerActions';

const init = () => {
   return {
     playing: false,
     progress: 0,
     duration: 0,
     seeking: null,
     audioEl: null,
   }
};

export function audioPlayerApp(state = init(), action) {
  switch (action.type) {
    case PLAY_AUDIO:
      return Object.assign({}, state, {
          playing: true,
        });
    case STOP_AUDIO:
      return Object.assign({}, state, {
        playing: false
      });
    case SET_PROGRESS:
      return Object.assign({}, state, {
        progress: action.val
      });
    case SET_DURATION:
      return Object.assign({}, state, {
        duration: action.val
      });
    case SEEKING:
      return Object.assign({}, state, {
        seeking: action.val
      });
    case AUDIO_ELEMENT:
      return Object.assign({}, state, {
        audioEl: action.val
      });
    default:
      return state
  }
}
