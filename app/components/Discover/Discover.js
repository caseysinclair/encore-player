import React from 'react';
import style from './Discover.scss';
import Album from '../Album/Album';

export default class Discover extends React.Component {
  renderAlbums() {
    const {albums} = this.props;

    albums.map(album => {
      return (
        <Album
          cover={album.cover}
          title={album.title}
          artist={album.artist}
          genre={album.genre}
        />
      )
    });
  }

  renderDiscoverGrid() {
    return (
      <div className={style.grid}>
        {this.renderAlbums()}
      </div>
    )
  }

  render() {
    return (
      this.renderDiscoverGrid()
    )
  }
}

Discover.propTypes = {
  albums: React.PropTypes.array,
};