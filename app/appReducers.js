import { combineReducers } from 'redux';
import audioPlayer from './components/audio-player/reducers/audioPlayerReducer';
import playlist from './components/media-item/playlistReducer';

export default combineReducers({
  audioPlayer,
  playlist
})