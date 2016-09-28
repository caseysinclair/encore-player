import React from 'react';
import styles from './MediaItem.scss';
import Playlist from './Playlist';
import uuid from 'uuid';

const MediaItem = ({cover, title, tracks}) => {
  const renderCover = () => {
    const mediaId = uuid.v4();

    return (
      <div className={styles.block} data-media-id={mediaId}>
        <img src={cover} className={styles.item}/>
        <h3 className={styles.title}>{title}</h3>
        <Playlist tracks={tracks} mediaOwner={mediaId} mediaCover={cover}/>
      </div>
    )
  };

  return (
    <div className={styles.showcase}>
      {renderCover()}
    </div>
  )
};

MediaItem.PropTypes = {
  cover: React.PropTypes.string.isRequired,
  title: React.PropTypes.string.isRequired,
  mediaId: React.PropTypes.string.isRequired,
};

export default MediaItem;

