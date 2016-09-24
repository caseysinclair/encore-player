import React from 'react';
import styles from './MediaItem.scss';
import Playlist from './Playlist';

// import {connect} from 'react-redux';
// import {playMedia, stopMedia} from './audioApiService';


const MediaItem = ({cover, title}) => {
  const renderCover = () => {
    return (
      <div className={styles.block}>
        <img src={cover} className={styles.item}/>
        <h3>{title}</h3>
        <Playlist tracks={mockTracks}/>
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
};

export default MediaItem;

const mockTracks = [
  {
    title: 'Song one',
    url: '//link'
  },
  {
    title: 'Song two',
    url: '//link'
  },
  {
    title: 'Song three',
    url: '//link'
  }
];