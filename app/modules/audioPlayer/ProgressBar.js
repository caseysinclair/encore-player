import React from 'react';
import styles from './ProgressBar.scss';
import { formatAudioTime } from '../utils/audioUtils';
import bindAll from 'lodash/bindAll';


export default class ProgressBar extends React.Component {
  constructor(props) {
    super(props);
    bindAll(this);

    this.state = {
      total: null,
    }

    this.handleSeekEvent = this.handleSeekEvent.bind(this);
  }

  getFormatedTime(milliseconds) {
    return formatAudioTime(milliseconds);
  }

  handleSeekEvent(e) {
    const duration = this.props.duration;
    let seek = (e.pageX - e.currentTarget.getBoundingClientRect().left)
                  / e.currentTarget.offsetWidth * duration;

    this.state.progress = seek.toFixed(0);
  }

  handleCurrentProgress() {
    const {duration, progress} = this.props;
    return (progress / duration * 100).toFixed(3);
  }

  getTotal() {
    this.setState({duration: this.getFormatedTime(this.props.duration)});
  }

  renderDurationElapsed() {
    return (
      <div className={styles.timer}>
        <span>{this.handleCurrentProgress()}</span>
      </div>
    )
  }

  renderDurationTotal() {
    return (
      <div className={styles.timer}>
        <span>{this.props.duration}</span>
      </div>
    )
  }

  renderProgressBar() {
    return (
      <div className={styles.progress} onClick={this.handleSeekEvent}>
        <span
          className={styles.track}
          style={{width: this.handleCurrentProgress() + '%'}}
        >
        </span>
      </div>
    )
  }

  render() {
    return (
      <div className={styles.container}>
        {this.renderDurationElapsed()}
        {this.renderProgressBar()}
        {this.renderDurationTotal()}
      </div>
    )
  }
}
