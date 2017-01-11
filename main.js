import React from 'react';
import ReactDOM from 'react-dom';
import {ConnectedAudioPlayer} from './app/components/AudioPlayer/AudioPlayer';
import Discover from './app/components/Discover/Discover';

import {applyMiddleware, createStore} from 'redux';
import thunk from 'redux-thunk';
import promise from 'redux-promise';
import createLogger from 'redux-logger';
import {Provider} from 'react-redux'
import reducers from './app/reducers/_appReducers';

const mediaPayload = [
  {
    title: 'Drive',
    cover: '//i1.sndcdn.com/avatars-000212033323-kbfcl6-t500x500.jpg',
    artist: 'Casey Sinclair',
    genre: 'Instrumental'
  },
];

let logger = createLogger();
export const store = createStore(reducers, applyMiddleware(thunk, promise, logger));

const container = document.getElementById('root');
const main = document.getElementById('main');
const playingnow = document.getElementById('playingnow');

ReactDOM.render(
  <Provider store={store}>
    <Discover albums={mediaPayload} />
  </Provider>, main
);
