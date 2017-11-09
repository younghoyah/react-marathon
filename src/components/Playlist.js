import React from 'react';

const Playlist = props => {

  let handleClick = () => {
    props.handlePlayListSelect()
  }

  return (
    <li onClick={handleClick} className={props.className}>
      <h2>{props.name}</h2>
      <h5>{props.description}</h5>
    </li>
  )
}

export default Playlist;
