import React from 'react';
import styles from './ProgressBar.scss';
import Moment from 'moment';

const PLAYER_TIMER_FORMAT_M_SS = 'm:ss';
const PLAYER_TIMER_FORMAT_BASE = '2000-01-01 00:00:00';

const ProgressBar = ({total, progress}) => {

  const seeking = (e, total) => {
    return ((e.pageX - e.currentTarget.getBoundingClientRect().left) / e.currentTarget.offsetWidth * total);
  };

  const formatAudioTime = (milliseconds) => {
    return Moment(PLAYER_TIMER_FORMAT_BASE).add(Moment.duration(milliseconds)).format(PLAYER_TIMER_FORMAT_M_SS);
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
        <span>{progress}</span>
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

