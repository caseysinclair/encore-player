import React from 'react';
import styles from './AudioControls.scss';

import {connect} from 'react-redux';
import {playMedia, stopMedia} from './audioApiService';


const AudioControls = ({playing}) => {

  const renderButton = () => {
    const addIconClass = `${styles.icon} material-icons`;

    if (playing) return (
      <i onClick={() => stopMedia()} className={addIconClass}>pause_circle_outlined</i>
    );

    return (
      <i onClick={() => playMedia()} className={addIconClass}>play_circle_outlined</i>
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

const ConnectedAudioControls = connect(mapStateToProps)(AudioControls);

export default ConnectedAudioControls
