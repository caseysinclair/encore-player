import React from 'react';
import styles from './AudioPlayer.scss';
import ProgressBar from './ProgressBar';
import Howler from 'howler';
import { formatAudioTime } from '../utils/audioUtils';
import bindAll from 'lodash/bindAll';

export default class AudioPlayer extends React.Component {
  constructor() {
    super();
    bindAll(this);

    this.mainAudioTrack = null;
    this.state = {
      source: './app/assests/game1.mp3',
      duration: null,
      progress: null
    };
  }

  componentWillMount() {
    this.handleAudioSourceChange(this.state.source);
  }

  handleAudioSourceChange(audio) {
    this.mainAudioTrack = new Howler.Howl({
      src: audio
    });
  }

  handlePlayback() {
    this.mainAudioTrack.play();
    this.setState({duration: this.mainAudioTrack._duration});
  }

  getAudioStream() {
    return (
      <span>
        <a onClick={() => this.handlePlayback() }>Player</a>
        <br />
        <a onClick={() => this.mainAudioTrack.stop()}>Stop</a>
      </span>
    )
  }

  renderProgressBar() {
    return (
      <ProgressBar
        duration={this.state.duration}
        progress={this.state.progress}
      />
    )
  }

  render() {
    return (
      <div className={styles.container}>
        {this.getAudioStream()}
        <div className={`${styles.contents} ${styles.base}`}>
          {this.renderProgressBar()}
        </div>
      </div>
    )
  }
}
