import React from 'react';
import styles from './Discover.scss';
import Album from '../Album/Album';

export default class Discover extends React.Component {
  renderAlbums() {
    const {albums} = this.props;

    return albums.map((album, index) => {
      return (
        <div className={styles.item}>
          <Album
            key={index}
            cover={album.cover}
            title={album.title}
            artist={album.artist}
            genre={album.genre}
          />
        </div>
      )
    });
  }

  render() {
    return (
      <div className={styles.grid}>
        {this.renderAlbums()}
      </div>
    )
  }
}

Discover.propTypes = {
  albums: React.PropTypes.array,
};
