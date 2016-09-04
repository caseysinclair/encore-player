import React from 'react';
import ReactDOM from 'react-dom';
import AudioPlayer from './app/components/audioPlayer/AudioPlayer';

import {Provider} from 'react-redux'
import {createStore} from 'redux'
import { audioPlayerApp } from './app/components/audioPlayer/reducers/audioPlayerReducer';

let store = createStore(audioPlayerApp);

const container = document.getElementById('root');
ReactDOM.render(
  <Provider store={store}>
    <AudioPlayer />
  </Provider>, container);
