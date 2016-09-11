import React from 'react';
import styles from './AudioControls.scss';
import {connect} from 'react-redux';


class AudioControls extends React.Component {
  renderButton() {
    const addIconClass = `${styles.icon} material-icons`;

    if (this.props.isPlaying) return <i className={addIconClass}>pause_circle_outlined</i>;

    return (
      <i className={addIconClass}>play_circle_outlined</i>
    )
  };

  render() {
    return (
      <div className={styles.container}>
        {this.renderButton()}
      </div>
    )
  }
}

AudioControls.PropTypes = {
  isPlaying: React.PropTypes.bool.isRequired,
};


const mapStateToProps = (state) => {
  return {
    isPlaying: state.playing,
  }
};

const ConnectedAudioPlayer = connect(mapStateToProps)(AudioControls);

export default ConnectedAudioPlayer