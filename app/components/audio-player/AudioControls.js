import React from 'react';
import styles from './AudioControls.scss';

import {connect} from 'react-redux';
import {playAudio, stopAudio} from './actions/audioPlayerActions';

const AudioControls = ({playing, play, stop, audioElement}) => {

  const renderButton = () => {
    const addIconClass = `${styles.icon} material-icons`;

    if (playing) return (
      <i onClick={() => stop(audioElement)} className={addIconClass}>pause_circle_outlined</i>
    );

    return (
      <i onClick={() => play(audioElement)} className={addIconClass}>play_circle_outlined</i>
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
  audioElement: React.PropTypes.node,
};

const mapStateToProps = (state) => {
  return {
    playing: state.playing,
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    play: (el) => dispatch(playAudio(el)),
    stop: (el) => dispatch(stopAudio(el)),
  }
};

const ConnectedAudioControls = connect(mapStateToProps, mapDispatchToProps)(AudioControls);

export default ConnectedAudioControls
