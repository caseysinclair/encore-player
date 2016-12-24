export const ADD_MEDIA_ITEM = 'ADD_MEDIA_ITEM';
export const CURRENTLY_PLAYING = 'CURRENTLY_PLAYING';

export function addMedia(payload) {
  return {
    type: ADD_MEDIA_ITEM,
    payload
  }
}

export function currentlyPlaying(payload) {
  return {
    type: CURRENTLY_PLAYING,
    payload
  }
}