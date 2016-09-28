import React from 'react';
import styles from './AudioPlayer.scss';
import ConnectedProgressBar from './ProgressBar';
import ConnectedAudioControls from './AudioControls';
import PlaybackInfo from './PlaybackInfo';
import {load} from './audioApiService';

export default class AudioPlayer extends React.Component {

  componentDidMount() {
    load();
  }

  render() {
    return (
      <div className={styles.container}>
        <PlaybackInfo />
        <div className={`${styles.inner} ${styles.base}`}>
          <ConnectedAudioControls/>
          <ConnectedProgressBar />
        </div>
      </div>
    )
  }
}