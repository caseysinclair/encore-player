import React from 'react';
import styles from './PlayControls.scss';

export const PlayControls = ({playing, isPlayable, onStop, onPlay}) => {
  const renderButton = () => {
    const addIconClass = `${styles.icon} material-icons`;

    if (!isPlayable) return null;

    if (playing) return (
      <i onClick={() => onStop()} className={addIconClass}>pause_circle_outlined</i>
    );

    return (
      <i onClick={() => onPlay()} className={addIconClass}>play_circle_outlined</i>
    )
  };

  return (
    <div className={styles.container}>
      {renderButton()}
    </div>
  )
};

PlayControls.PropTypes = {
  playing: React.PropTypes.bool.isRequired,
  isPlayable: React.PropTypes.bool.isRequired,
  onPlay: React.PropTypes.func.isRequired,
  onStop: React.PropTypes.func.isRequired,
};
