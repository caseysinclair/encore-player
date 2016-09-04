import React from 'react';


const AudioControls = ({}) => {

  // return redux action `play`
  const play = () => {
    return (null)
  };

  const renderPlayButton = () => {
    return (
      <a href="#" onClick={play}>{'play'}</a>
    )
  };

  return (
    <div className={styles}>
      {renderPlayButton}
    </div>
  )
};

AudioControls.PropTypes = {

};

export default AudioControls