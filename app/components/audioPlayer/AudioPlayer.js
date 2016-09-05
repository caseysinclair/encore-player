import React from 'react';
import styles from './AudioPlayer.scss';
import ProgressBar from './ProgressBar';
import bindAll from 'lodash/bindall';

import {connect} from 'react-redux';
import {play, stop, progress} from './actions/audioPlayerActions';

class AudioPlayer extends React.Component {
  constructor(props) {
    super(props);
    bindAll(this);
  }

  componentDidMount() {
    const player = document.querySelector('audio');

    player.addEventListener('playing', () => this.handleProgress(player));
    player.addEventListener('paused', () => this.handlePaused(player));
  }

  handleProgress(player) {
    this.props.play();

    setInterval(() => {
      this.props.progress(player.currentTime)
    }, 500)
  }

  handlePaused(player) {
    this.props.stop()
  }

   playback() {
    const player = document.querySelector('audio');

    if (player.paused) {
      return player.play();
    }

    return player.pause();
  }

  renderProgressBar() {
    const {total, currentProgress} = this.props;

    return (
      <ProgressBar total={total} progress={currentProgress}/>
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
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    play: () => dispatch(play()),
    stop: () => dispatch(stop()),
    progress: (val) => dispatch(progress(val))
  }
};

const audioPlayer = connect(mapStateToProps, mapDispatchToProps)(AudioPlayer);

export default audioPlayer