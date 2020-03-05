import React from 'react';

const tvShow = (props) => {
  const handleClick = () => props.selectShow(props.show);

  return (
    <div>
      <br/>
      <img src={props.show.image.medium} onClick={handleClick} alt=""/>
    </div>
  );
}

export default tvShow;
