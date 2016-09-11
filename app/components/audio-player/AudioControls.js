import React from 'react';
import styles from './AudioControls.scss';


const AudioControls = ({isPlaying}) => {

  // return redux action `play`
  const play = () => {
    return (null)
  };

  const renderButton = () => {
    const addIconClass = `${styles.icon} material-icons`;

    if (isPlaying) return <i className={addIconClass}>pause_circle_outlined</i>;

    return (
      <i className={addIconClass}>play_circle_outlined</i>
    )
  };

  return (
    <div className={styles.container}>
      {renderButton()}
    </div>
  )
};

AudioControls.PropTypes = {
  isPlaying: React.PropTypes.bool.isRequired,
};

export default AudioControls