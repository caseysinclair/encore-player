import React from 'react';
import styles from './Cover.scss';

const Cover = ({image}) => {
  return (
    <img className={styles.cover} src={image}/>
  )
};

Cover.PropTypes = {
  image: React.PropTypes.string.isRequired,
};

export default Cover;