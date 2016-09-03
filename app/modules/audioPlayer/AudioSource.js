import React from 'react';
import Howler from 'howler';


export default class AudioSource extends React.Component {
  constructor() {
    super();

  }

  componentWillMount() {

  }

  handleAudioSourceChange(audio) {
    this.mainAudioTrack = new Howler.Howl({
      src: audio,
    });
  }

  getAudioStream() {
    return (
      <span>
        <a onClick={() => this.mainAudioTrack.play()}>Player</a>
      <br />
        <a onClick={() => this.mainAudioTrack.stop()}>Stop</a>
      </span>
    )
  }

  renderProgressBar() {
    if (!this.mainAudioTrack) return null;

    const time = this.mainAudioTrack.duration();
    return (
      <ProgressBar
        duration={time}
        progress={time}
      />
    )
  }

  render() {
    return (
      <div />
    )
  }
}
