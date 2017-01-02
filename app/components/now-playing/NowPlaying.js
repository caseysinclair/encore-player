import React from 'react';
import styles from './NowPlaying.scss';
import {connect} from 'react-redux';

const NowPlaying = ({cover, title}) => {

  const renderCover = () => {
    return (
      <div className={styles.coverContainer}>
        <img src={cover} className={styles.cover}/>
      </div>
    )
  };

  const renderInfo = () => {
    return (
      <div className={styles.iteminfo}>
        <sup>{'Now playing:'}</sup>
        <h3 className={styles.title}>{title}</h3>
      </div>
    )
  };

  const renderArtistName = () => {
    return (
      <div>
        <span>{this.artist.name}</span>
      </div>
    )
  };

  if (!cover || !title) return;

  return (
    <div className={styles.container}>
      {renderCover()}
      {renderInfo()}
    </div>
  )
};

NowPlaying.propsTypes = {
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


const ConnectedNowPlaying = connect(mapStateToProps)(NowPlaying);

export default ConnectedNowPlaying;
