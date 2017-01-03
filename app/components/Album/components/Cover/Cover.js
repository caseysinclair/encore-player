import React from 'react';
import styles from './Cover.scss';

const Cover = ({image}) => {
  return (
    <div className={styles.container}>
      <img src={image} />
    </div>
  )
};

Cover.PropTypes = {
  image: React.PropTypes.string.isRequired,
};

export default Cover;