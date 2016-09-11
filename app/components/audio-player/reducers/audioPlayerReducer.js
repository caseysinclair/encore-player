import { PLAY_AUDIO, STOP_AUDIO, SET_PROGRESS, SET_DURATION } from '../actions/audioPlayerActions';

const init = () => {
   return {
     playing: false,
     progress: 0,
     duration: 0,
   }
};

export function audioPlayerApp(state = init(), action) {
  switch (action.type) {
    case PLAY_AUDIO:
      return {
        playing: true
      };
    case STOP_AUDIO:
      return {
        playing: false
      };
    case SET_PROGRESS:
      return {
        progress: action.val
      };
    case SET_DURATION:
      return {
        duration: action.val
      };
    default:
      return state
  }
}