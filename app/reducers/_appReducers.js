import { combineReducers } from 'redux';
import audioPlayer from './audioPlayerReducer';
import playlist from './albumReducer';

export default combineReducers({
  audioPlayer,
  playlist
})
