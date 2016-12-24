import React from 'react';
import styles from './AudioPlayer.scss';
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
    )
  }

  render() {
    if (!this.props.isPlayable) {
      return null
    }

    return (
      <div className={styles.container}>
        {this.renderAudioPlayerApp()}
      </div>
    )
  }
}


const mapStateToProps = (state) => {
  state = state.audioPlayer;

  return {
    isPlayable: state.isPlayable,
  }
};



const ConnectedAudioPlayer = connect(mapStateToProps)(AudioPlayer);

export default ConnectedAudioPlayer
