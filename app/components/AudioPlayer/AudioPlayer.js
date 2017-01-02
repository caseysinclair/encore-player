import React from 'react';
import styles from './AudioPlayer.scss';
<<<<<<< HEAD
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
=======
import ConnectedProgressBar from './components/ProgressBar';
import ConnectedAudioControls from './components/AudioControls';
import {load} from './audioApiService';
import {connect} from 'react-redux';


export class AudioPlayer extends React.Component {

  componentDidMount() {
    load();
  }

  renderAudioPlayerApp() {
    return (
      <div className={`${styles.inner} ${styles.base}`}>
        <div className={styles.content}>
          <ConnectedAudioControls/>
          <ConnectedProgressBar />
        </div>
      </div>
>>>>>>> origin/master
    )
  }

  render() {
<<<<<<< HEAD
    return (
      <div className={styles.container}>
        <div className={`${styles.inner} ${styles.base}`}>
          {this.renderAudioControls()}
          <ConnectedProgressBar />
        </div>
=======
    if (!this.props.isPlayable) {
      return null
    }

    return (
      <div className={styles.container}>
        {this.renderAudioPlayerApp()}
>>>>>>> origin/master
      </div>
    )
  }
}

<<<<<<< HEAD
AudioPlayer.propTypes = {
  playing: React.PropTypes.bool.isRequired,
  onPlay: React.PropTypes.func.isRequired,
  onStop: React.PropTypes.func.isRequired,
  isPlayable: React.PropTypes.bool.isRequired,
};
=======
>>>>>>> origin/master

const mapStateToProps = (state) => {
  state = state.audioPlayer;

  return {
<<<<<<< HEAD
    playing: state.playing,
=======
>>>>>>> origin/master
    isPlayable: state.isPlayable,
  }
};

<<<<<<< HEAD
function mapDispatchToProps(dispatch) {
  return {
    loadSrc: (src) => dispatch(audioPlayerActions.loadSrc(src)),
    onPlay: () => dispatch(audioPlayerActions.playAudio()),
    onStop: () => dispatch(audioPlayerActions.pauseAudio()),
  }
}

export const ConnectedAudioPlayer = connect(mapStateToProps, mapDispatchToProps)(AudioPlayer);
=======


const ConnectedAudioPlayer = connect(mapStateToProps)(AudioPlayer);

export default ConnectedAudioPlayer
>>>>>>> origin/master
