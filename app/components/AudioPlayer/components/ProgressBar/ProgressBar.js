import React from 'react';
import styles from './ProgressBar.scss';
import {connect} from 'react-redux';

const ProgressBar = ({total, progress}) => {

  const seeking = (e) => {
    const setNewTime = ((e.pageX - e.currentTarget.getBoundingClientRect().left) / e.currentTarget.offsetWidth * total);
    seekMedia(setNewTime);
  };

  const setNewTime = (time) => {
    seekMedia(time);
  };

  const handleTimeFormat = (value) => {
    if (!value) return '0:00';

    const min = Math.floor(value / 59, 10).toPrecision(1);
    const sec = (value % 59).toFixed(0) < 10 ? 0 + (value % 59).toFixed(0) : (value % 59).toFixed(0);

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
    const sliderStyle = {
      width: `${(progress / total * 100)}%`,
    };

    if (!progress) return;

    return (
      <span className={styles.track} min={0} style={sliderStyle} value={progress} />
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
  progress: React.PropTypes.string,
  total: React.PropTypes.string,
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
