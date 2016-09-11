import React from 'react';
import ReactDOM from 'react-dom';
import AudioPlayer from './app/components/audio-player/AudioPlayer';

import {applyMiddleware, createStore} from 'redux';
import thunk from 'redux-thunk';
import promise from 'redux-promise';
import createLogger from 'redux-logger';
import {Provider} from 'react-redux'
import { audioPlayerApp } from './app/components/audio-player/reducers/audioPlayerReducer';

let logger = createLogger();
let store = createStore(audioPlayerApp, applyMiddleware(thunk, promise, logger));

const container = document.getElementById('root');
ReactDOM.render(
  <Provider store={store}>
    <AudioPlayer />
  </Provider>, container);

