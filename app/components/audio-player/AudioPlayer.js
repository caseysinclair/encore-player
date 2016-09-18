import React from 'react';
import styles from './AudioPlayer.scss';
import ConnectedProgressBar from './ProgressBar';
import ConnectedAudioControls from './AudioControls';
import bindAll from 'lodash/bindall';

import {connect} from 'react-redux';
import {duration, progress} from './actions/audioPlayerActions';

class AudioPlayer extends React.Component {
  constructor(props) {
    super(props);
    bindAll(this);
  }

  componentDidMount() {
    this._audio.addEventListener('loadedmetadata', () => this.handleMetaData());
    this._audio.addEventListener('playing', () => this.handleProgress());
  }

  handleMetaData() {
    return this.props.duration(this._audio.duration)
  }

  handleProgress() {
    const player = this._audio;
    const setProgress = player.progressInterval = {};

    return setProgress.progress = setInterval(() => {
      if (player.paused) return clearInterval(setProgress.progress);
      return this.props.progress(player.currentTime)
    }, 500)
  }

  renderAudioElement() {
    return (
      <audio ref={(e) => this._audio = e}
             src={'https://www.freesound.org/data/previews/353/353025_110287-lq.mp3'}/>
    )
  }

  render() {
    return (
      <div className={styles.container}>
        <div className={`${styles.inner} ${styles.base}`}>
          <ConnectedAudioControls audioElement={this._audio}/>
          <ConnectedProgressBar />
          {this.renderAudioElement()}
        </div>
      </div>
    )
  }
}

AudioPlayer.PropTypes = {
  isPlaying: React.PropTypes.bool.isRequired,
};

const mapStateToProps = (state) => {
  return {
    playing: state.playing,
    currentProgress: state.progress,
    total: state.duration,
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    duration: (val) => dispatch(duration(val)),
    progress: (val) => dispatch(progress(val))
  }
};

const audioPlayer = connect(mapStateToProps, mapDispatchToProps)(AudioPlayer);

export default audioPlayer
