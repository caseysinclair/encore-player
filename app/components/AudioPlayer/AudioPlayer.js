import React from 'react';
import styles from './AudioPlayer.scss';
import ConnectedProgressBar from './components/ProgressBar/ProgressBar';
import {PlayControls} from './components/PlayControls/PlayControls';
import {connect} from 'react-redux';
import * as audioPlayerActions from '../../actions/audioPlayerActions';

export default class AudioPlayer extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    return this.props.loadSrc('https://www.freesound.org/data/previews/329/329825_52391-lq.mp3')
  }

  handleAudioPlayback() {
    this.props.onPlay();
  }

  handleAudioStop() {
    this.props.onStop()
  }

  renderAudioControls() {
    return (
      <PlayControls
        isPlayable={this.props.isPlayable}
        playing={this.props.playing}
        onPlay={() => this.handleAudioPlayback()}
        onStop={() => this.handleAudioStop()}
      />
    )
  }

  render() {
    return (
      <div className={styles.container}>
        <div className={`${styles.inner} ${styles.base}`}>
          {this.renderAudioControls()}
          <ConnectedProgressBar />
        </div>
      </div>
    )
  }
}

AudioPlayer.propTypes = {
  playing: React.PropTypes.bool.isRequired,
  onPlay: React.PropTypes.func.isRequired,
  onStop: React.PropTypes.func.isRequired,
  isPlayable: React.PropTypes.bool.isRequired,
};

const mapStateToProps = (state) => {
  state = state.audioPlayer;

  return {
    playing: state.playing,
    isPlayable: state.isPlayable,
  }
};

function mapDispatchToProps(dispatch) {
  return {
    loadSrc: (src) => dispatch(audioPlayerActions.loadSrc(src)),
    onPlay: () => dispatch(audioPlayerActions.playAudio()),
    onStop: () => dispatch(audioPlayerActions.pauseAudio()),
  }
}

export const ConnectedAudioPlayer = connect(mapStateToProps, mapDispatchToProps)(AudioPlayer);
