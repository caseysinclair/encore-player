import React from 'react';
import styles from './AudioPlayer.scss';
import ProgressBar from './ProgressBar';
import ConnectedAudioControls from './AudioControls';
import bindAll from 'lodash/bindall';

import {connect} from 'react-redux';
import {play, stop, progress, duration} from './actions/audioPlayerActions';

class AudioPlayer extends React.Component {
  constructor(props) {
    super(props);
    bindAll(this);
  }

  componentDidMount() {
    const player = document.querySelector('audio');

    player.addEventListener('playing', () => this.handleProgress(player));
    player.addEventListener('paused', () => this.handlePaused());
    player.addEventListener('loadedmetadata', () => this.handleMetaData(player));
  }

  handleMetaData(player) {
    return this.props.duration(player.duration)
  }

  handleProgress(player) {
    player.timer = {};

    if (player.timer.setProgress) {
      clearInterval(player.timer.setProgress);
    }

    player.timer.setProgress = setInterval(() => {
      if (player.paused) {
        return clearInterval(player.timer.setProgress);
      } else {
        return this.props.progress(player.currentTime);
      }
    }, 500);
  }

  handlePaused() {
    this.props.stop()
  }

  playback() {
    const player = document.querySelector('audio');

    if (player.paused) {
      this.props.play();
      return player.play();
    } else {
      this.props.stop();
      return player.pause();
    }
  }

  renderProgressBar() {
    const {total, currentProgress} = this.props;

    return (
      <ProgressBar total={total} progress={currentProgress}/>
    )
  }

  renderControls() {
    return (
      <ConnectedAudioControls onClick={() => this.playback()}/>
    )
  }

  renderAudioElement() {
    return (
      <audio src={'https://www.freesound.org/data/previews/353/353025_110287-lq.mp3'}/>
    )
  }

  render() {
    return (
      <div className={styles.container} onClick={() => this.playback()}>
        <div className={`${styles.contents} ${styles.base}`}>
          {this.renderControls()}
          {this.renderProgressBar()}
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
    play: () => dispatch(play()),
    stop: () => dispatch(stop()),
    progress: (val) => dispatch(progress(val)),
    duration: (val) => dispatch(duration(val))
  }
};

const audioPlayer = connect(mapStateToProps, mapDispatchToProps)(AudioPlayer);

export default audioPlayer