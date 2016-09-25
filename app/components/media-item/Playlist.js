import React from 'react';
import styles from './Playlist.scss';
import {switchMedia} from '../audio-player/audioApiService';
import {connect} from 'react-redux';

const Playlist = ({tracks, mediaOwner, currentTrack, isMediaOwner}) => {

  const handleOnClick = (e) => {
    const dataset = e.target.dataset;
    switchMedia(dataset.trackUrl, mediaOwner, dataset.trackNumber);
  };

  const getCurrentlyPlaying = (e) => {
    const dataset = e.target.dataset;
    return dataset.trackNumber === currentTrack;
  };

  const renderSingleTrack = () => {

    return tracks.map((track, index) => {
      const isCurrentlyPlaying = currentTrack == index + 1 && isMediaOwner === mediaOwner;
      return (
        <li
          key={index}
          data-track-number={index + 1}
          data-track-url={track.url}
          className={`${styles.single} ${isCurrentlyPlaying ? styles.active : null}`}
          onClick={(e) => handleOnClick(e)}
        >
          {track.title}
        </li>
      )
    })
  };

  return (
    <ul className={styles.all}>
      {renderSingleTrack()}
    </ul>
  )
};

Playlist.PropTypes = {
  tracks: React.PropTypes.object,
  mediaToTracks: React.PropTypes.string,
  isCurrentlyPlaying: React.PropTypes.bool,
};

const mapStateToProps = (state) => {
  state = state.playlist;
  return {
    isMediaOwner: state.mediaItem,
    currentTrack: state.track,
  }
};


const ConnectedPlaylist = connect(mapStateToProps)(Playlist);

export default ConnectedPlaylist