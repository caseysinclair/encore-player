import React from 'react';
import styles from './AudioPlayer.scss';
import ConnectedProgressBar from './ProgressBar';
import ConnectedAudioControls from './AudioControls';
import bindAll from 'lodash/bindall';
import {load} from './audioApiService';

export default class AudioPlayer extends React.Component {
  constructor(props) {
    super(props);
    bindAll(this);
  }

  componentDidMount() {
    load('https://www.freesound.org/data/previews/353/353025_110287-lq.mp3');
  }

  render() {
    return (
      <div className={styles.container}>
        <div className={`${styles.inner} ${styles.base}`}>
          <ConnectedAudioControls/>
          <ConnectedProgressBar />
        </div>
      </div>
    )
  }
}
