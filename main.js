import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
<<<<<<< HEAD
import {ConnectedAudioPlayer} from './app/components/AudioPlayer/AudioPlayer';
import ConnectedLayoutFull from './app/components/media-item/LayoutFull';
import ConnectedNowPlaying from './app/components/now-playing/NowPlaying';

=======
import ConnectedAudioPlayer from './app/components/AudioPlayer/AudioPlayer';
import ConnectedLayoutFull from './app/components/Album/components/LayoutFull';
>>>>>>> origin/master
import {applyMiddleware, createStore} from 'redux';
import thunk from 'redux-thunk';
import promise from 'redux-promise';
import createLogger from 'redux-logger';
import {Provider} from 'react-redux'
<<<<<<< HEAD
import reducers from './app/reducers/appReducers';
=======
import reducers from './app/reducers/_appReducers';
>>>>>>> origin/master

const muiTheme = getMuiTheme({
  slider: {
    marginTop: 0
  }
})

const mockTracks = [
  {
    title: 'Song one',
    url: 'https://www.freesound.org/data/previews/329/329825_52391-lq.mp3'
  },
  {
    title: 'Song two',
    url: 'https://www.freesound.org/data/previews/353/353025_110287-lq.mp3'
  },
  {
    title: 'Song three',
    url: '//link'
  }
];


const mediaPayload = [
  {
    title: 'Drive',
    cover: '//i1.sndcdn.com/avatars-000212033323-kbfcl6-t500x500.jpg',
    tracks: mockTracks
  },
];

let logger = createLogger();
export const store = createStore(reducers, applyMiddleware(thunk, promise, logger));

const container = document.getElementById('root');
const main = document.getElementById('main');
const playingnow = document.getElementById('playingnow');

ReactDOM.render(
  <Provider store={store}>
    <MuiThemeProvider muiTheme={muiTheme}>
      <ConnectedAudioPlayer />
    </MuiThemeProvider>

  </Provider>, container);
