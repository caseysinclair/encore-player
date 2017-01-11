import React from 'react';
import styles from './Album.scss';
import Cover from './components/Cover/Cover';

const Album = ({cover, title, artist, genre}) => {
  const renderCover = () => {
    return (
      <Cover image={cover} />
    )
  };

  const renderAlbumDetails = () => {
    return (
      <div>
        <a href="#">{title}</a>
        <a href="#">{artist}</a>
        <span>{genre}</span>
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