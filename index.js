import React from 'react';
import ReactDOM from 'react-dom';
import Discover from 'components/Discover/Discover';
import {ConnectedAudioPlayer} from 'components/AudioPlayer/AudioPlayer';
import { Router, Route, Link, browserHistory } from 'react-router'
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
const main = document.getElementById('main');
const player = document.getElementById('player');


const DiscoverApp = () => (<Discover albums={mediaPayload}/>);

ReactDOM.render(
  <Router history={browserHistory}>
    <Provider store={store}>
      <ul>
        <li><Link to="/">discover</Link></li>
      </ul>
    <Route path="/" component={DiscoverApp} />
      <ConnectedAudioPlayer />
  </Provider>
  </Router>, main
);
