import { combineReducers } from 'redux';
import audioPlayer from './audioPlayerReducer';
import playlist from '../components/media-item/playlistReducer';

export default combineReducers({
  audioPlayer,
  playlist
})