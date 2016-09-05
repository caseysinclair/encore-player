import React from 'react';
import styles from './ProgressBar.scss';

const ProgressBar = ({total, progress}) => {

  const seeking = (e, total) => {
    return ((e.pageX - e.currentTarget.getBoundingClientRect().left) / e.currentTarget.offsetWidth * total);
  };

  const handleTimeFormat = (value) => {
    var min = Math.floor(value / 59, 10).toPrecision(1);
    var sec = (value % 59).toFixed(0) < 10 ? 0 + (value % 59).toFixed(0) : (value % 59).toFixed(0);

    return min + ':' + sec;
  };

  const renderTotal = () => {
    return (
      <div className={styles.timer}>
        <span>{total}</span>
      </div>
    )
  };

  const renderProgress = () => {
    return (
      <div className={styles.timer} >
        <span>{handleTimeFormat(progress)}</span>
      </div>
    )
  };

  const renderProgressBar = () => {
    return (
      <div className={styles.progress} onClick={seeking}>
        <span className={styles.track} style={{width: progress + '%'}}/>
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
  total: React.PropTypes.string.isRequired,
  progress: React.PropTypes.string.isRequired
};

export default ProgressBar;

