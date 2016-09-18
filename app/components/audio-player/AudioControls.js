import React from 'react';
import styles from './AudioControls.scss';

import {connect} from 'react-redux';
import {play, stop} from './actions/audioPlayerActions';

const AudioControls = ({playing, play, stop}) => {

  const renderButton = () => {
    const addIconClass = `${styles.icon} material-icons`;

    if (playing) return (
      <i onClick={() => stop()} className={addIconClass}>pause_circle_outlined</i>
    );

    return (
      <i onClick={() => play()} className={addIconClass}>play_circle_outlined</i>
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
};

const mapStateToProps = (state) => {
  return {
    playing: state.playing,
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    play: () => dispatch(play()),
    stop: () => dispatch(stop()),
  }
};

const ConnectedAudioControls = connect(mapStateToProps, mapDispatchToProps)(AudioControls);

export default ConnectedAudioControls