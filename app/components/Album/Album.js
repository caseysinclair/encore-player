import React from 'react';
import styles from './Album.scss';

const Album = ({cover, title, artist, genre}) => {
  const renderCover = () => {
    return (
      <img className={styles.cover} src={cover} />
    )
  };

  const renderAlbumDetails = () => {
    return (
      <div>
        <span className={styles.artist} href="#">{artist}</span>
      </div>
    )
  };

  return (
    <div className={styles.container}>
      {renderCover()}
      {renderAlbumDetails()}
    </div>
  )
};

Album.propTypes = {
  cover: React.PropTypes.string.isRequired,
  title: React.PropTypes.string.isRequired,
  artist: React.PropTypes.string.isRequired,
  genre: React.PropTypes.string,
};

export default Album;
