import React from 'react';
import styles from './LayoutFull.scss';
import MediaItem from '../Album';
import {connect} from 'react-redux';
import {
  addMedia,
} from '../../../actions/playlistActions';

export class LayoutFull extends React.Component {
  componentWillMount() {
    const {items} = this.props;

    items.forEach(media => {
      return this.props.addItems(media)
    });
  }

  renderMediaItems() {
    return this.props.mediaItems.map((track, index) => {
      return (
        <MediaItem
          key={index}
          title={track.title}
          cover={track.cover}
          tracks={track.tracks}
        />
      )
    })
  }

  render() {
    return (
      <div className={styles.container}>
        <div className={styles.screen}>
          {this.renderMediaItems()}
        </div>
      </div>
    )
  }
}

LayoutFull.propsTypes = {
  items: React.PropTypes.object,
};

const mapStateToProps = (state) => {
  state = state.playlist;
  return {
    mediaItems: state.playlist,
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    addItems: (payload) => dispatch(addMedia(payload))
  }
};

const ConnectedLayoutFull = connect(mapStateToProps, mapDispatchToProps)(LayoutFull);

export default ConnectedLayoutFull;
