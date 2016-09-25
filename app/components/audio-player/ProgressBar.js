import React from 'react';
import styles from './ProgressBar.scss';

import {connect} from 'react-redux';
import {seekMedia} from './audioApiService';

const ProgressBar = ({total, progress}) => {

  const seeking = (e) => {
    const setNewTime = ((e.pageX - e.currentTarget.getBoundingClientRect().left) / e.currentTarget.offsetWidth * total);
    seekMedia(setNewTime);
  };

  const handleTimeFormat = (value) => {
    if (!value) return;

    var min = Math.floor(value / 59, 10).toPrecision(1);
    var sec = (value % 59).toFixed(0) < 10 ? 0 + (value % 59).toFixed(0) : (value % 59).toFixed(0);

    return min + ':' + sec;
  };

  const renderTotal = () => {
    return (
      <div className={styles.timer}>
        <span>{handleTimeFormat(total)}</span>
      </div>
    )
  };

  const renderProgress = () => {
    return (
      <div className={styles.timer}>
        <span>{handleTimeFormat(progress)}</span>
      </div>
    )
  };

  const renderTrackBar = () => {
    if (!progress) return;

    return (
      <span className={styles.track} style={{width: (progress / total * 100) + '%'}}/>
    )
  };

  const renderProgressBar = () => {
    return (
      <div className={styles.progress} onClick={(e) => seeking(e)}>
        {renderTrackBar()}
      </div>
    )
  };

  return (
    <div className={styles.container}>
      {renderProgress()}
      {renderProgressBar()}
      {renderTotal()}
    </div>
  )
};

ProgressBar.propsTypes = {
  total: React.PropTypes.string,
  progress: React.PropTypes.string,
  setDuration: React.PropTypes.func,
};

const mapStateToProps = (state) => {
  state = state.audioPlayer;

  return {
    total: state.duration,
    progress: state.progress,
  }
};


const ConnectedProgressBar = connect(mapStateToProps)(ProgressBar);

export default ConnectedProgressBar