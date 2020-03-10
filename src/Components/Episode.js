import React from 'react';

const Episode = (props) => {
  let eachEpisode  = props.episode

  return (
    <div>
      Episode {eachEpisode.number} - {eachEpisode.name}
    </div>
  )
}

export default Episode;
