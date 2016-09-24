import React from 'react';
import styles from './Playlist.scss';

const Playlist = ({tracks}) => {

  const renderSingleTrack = () => {
    return tracks.map(track => {
      return (
        <li data-track-url={track.url} className={styles.single}>{track.title}</li>
      )
    })
  };

  return (
    <ul className={styles.all}>
      {renderSingleTrack()}
    </ul>
  )
};

export default Playlist;