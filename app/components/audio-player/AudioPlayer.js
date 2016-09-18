import React from 'react';
import styles from './AudioPlayer.scss';
import ConnectedProgressBar from './ProgressBar';
import ConnectedAudioControls from './AudioControls';
import bindAll from 'lodash/bindall';

import {connect} from 'react-redux';
import {duration} from './actions/audioPlayerActions';

class AudioPlayer extends React.Component {
  constructor(props) {
    super(props);
    bindAll(this);
  }

  componentDidMount() {
    const player = document.querySelector('audio');
    player.addEventListener('playing', () => this.handleProgress(player));
    player.addEventListener('loadedmetadata', () => this.handleMetaData(player));
  }

  handleMetaData(player) {
    return this.props.duration(player.duration)
  }

  renderAudioElement() {
    return (
      <audio src={'https://www.freesound.org/data/previews/353/353025_110287-lq.mp3'}/>
    )
  }

  render() {
    return (
      <div className={styles.container}>
        <div className={`${styles.inner} ${styles.base}`}>
          <ConnectedAudioControls />
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
    duration: (val) => dispatch(duration(val))
  }
};

const audioPlayer = connect(mapStateToProps, mapDispatchToProps)(AudioPlayer);

export default audioPlayer