import {
  ADD_MEDIA_ITEM,
  CURRENTLY_PLAYING,
} from './playlistActions';

import uuid from 'uuid';

const init = () => {
  return {
    playlist: [],
    mediaItem: null,
    track: null,
    }
  };

export default function playlist(state = init(), action) {
  switch (action.type) {
    case ADD_MEDIA_ITEM:
      return Object.assign({}, state, {
        playlist: [
          ...state.playlist,
          {
            title: action.payload.title,
            cover: action.payload.cover,
            tracks: action.payload.tracks,
          }
        ]
      });
    case CURRENTLY_PLAYING:
      return Object.assign({}, state, {
        mediaItem: action.payload.media,
        track: action.payload.current,
      });
    default:
      return state
  }
}

