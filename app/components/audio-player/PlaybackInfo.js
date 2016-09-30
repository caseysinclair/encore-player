import React from 'react';
import styles from './PlaybackInfo.scss';
import {connect} from 'react-redux';

const PlaybackInfo = ({cover, title}) => {
  return (
    <div className={styles.container}>
      <img src={cover} className={styles.cover}/>
    </div>
  )
};

PlaybackInfo.propsTypes = {
  cover: React.PropTypes.string,
  title: React.PropTypes.string,
};

const mapStateToProps = (state) => {
  state = state.playlist;

  return {
    cover: state.mediaCover,
    title: state.trackTitle,
  }
};


const ConnectedPlaybackInfo = connect(mapStateToProps)(PlaybackInfo);

export default ConnectedPlaybackInfo;
