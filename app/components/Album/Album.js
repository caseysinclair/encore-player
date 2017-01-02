import React from 'react';
import styles from './Album.scss';
import Playlist from './components/Playlist';
import uuid from 'uuid';

const MediaItem = ({cover, title, tracks}) => {
  const mediaId = uuid.v4();

  const renderCover = () => {
    return (
      <div className={styles.block} data-media-id={mediaId}>
        <img src={cover} className={styles.item}/>
      </div>
    )
  };

  const renderPlaylist = () => {
    return (
      <div className={styles.block}>
        <div className={styles.iteminfo}>
          <h3 className={styles.title}>{title}</h3>
          <Playlist tracks={tracks} mediaOwner={mediaId} mediaCover={cover}/>
        </div>
      </div>
    )
  }

  return (
    <div className={styles.container}>
      {renderCover()}
      {renderPlaylist()}
    </div>
  )
};

MediaItem.PropTypes = {
  cover: React.PropTypes.string.isRequired,
  title: React.PropTypes.string.isRequired,
  mediaId: React.PropTypes.string.isRequired,
};

export default MediaItem;
