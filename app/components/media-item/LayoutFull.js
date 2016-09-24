import React from 'react';
import styles from './LayoutFull.scss';
import MediaItem from './MediaItem';

export default class LayoutFull extends React.Component {

  render() {
    return (
      <div className={styles.container}>
        <div className={styles.screen}>
          <MediaItem
            title="A Piece of Strange"
            cover="//s3.amazonaws.com/hiphopdx-production/2005/11/cunnylinguists-piece-of-strange.jpg"/>
          <MediaItem
            title="Compton"
            color="mintcream"
            cover="https://i.ytimg.com/vi/SIdaimg3cyM/maxresdefault.jpg"/>
          <MediaItem
            title="Phrazes for the Young"
            color="mintcream"
            cover="//9803records.com/wp2/wp-content/uploads/2013/11/Julian-Casablancas-Phrazes-For-The-Young.jpg"/>
          <MediaItem
            title="A Piece of Strange"
            color="mintcream"
            cover="//s3.amazonaws.com/hiphopdx-production/2005/11/cunnylinguists-piece-of-strange.jpg"/>
          <MediaItem
            title="A Piece of Strange"
            cover="//s3.amazonaws.com/hiphopdx-production/2005/11/cunnylinguists-piece-of-strange.jpg"/>
          <MediaItem
            title="Compton"
            color="mintcream"
            cover="https://i.ytimg.com/vi/SIdaimg3cyM/maxresdefault.jpg"/>
          <MediaItem
            title="Phrazes for the Young"
            color="mintcream"
            cover="//9803records.com/wp2/wp-content/uploads/2013/11/Julian-Casablancas-Phrazes-For-The-Young.jpg"/>
          <MediaItem
            title="A Piece of Strange"
            color="mintcream"
            cover="//s3.amazonaws.com/hiphopdx-production/2005/11/cunnylinguists-piece-of-strange.jpg"/>
        </div>
      </div>
    )
  }

};