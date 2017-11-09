import React from 'react';

const Song = props => {
  return (
    <li>
      <h2>{props.name}</h2>
      <h5>{props.artist}</h5>
    </li>
  )
}

export default Song;
