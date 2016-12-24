import React from 'react';
import styles from './AudioControls.scss';
import {connect} from 'react-redux';

import {
  playMedia,
  stopMedia
} from './audioApiService';


const AudioControls = ({playing, isPlayable}) => {
  const renderButton = () => {
    const addIconClass = `${styles.icon} material-icons`;

    if (!isPlayable) return (
      <span className={`${styles.disabled} ${addIconClass}`}>play_circle_outlined</span>
    );

    if (playing) return (
      <a href="#" onClick={() => stopMedia()} className={addIconClass}>pause_circle_outlined</a>
    );

    return (
      <a href="#" onClick={() => playMedia()} className={addIconClass}>play_circle_outlined</a>
    )
  };

  return (
    <div className={styles.container}>
      {renderButton()}
    </div>
  )
};

AudioControls.PropTypes = {
  playing: React.PropTypes.bool.isRequired,
  play: React.PropTypes.func.isRequired,
  stop: React.PropTypes.func.isRequired,
  isPlayable: React.PropTypes.bool.isRequired,
};

const mapStateToProps = (state) => {
  state = state.audioPlayer;

  return {
    playing: state.playing,
    isPlayable: state.isPlayable,
  }
};

const ConnectedAudioControls = connect(mapStateToProps)(AudioControls);

export default ConnectedAudioControls
