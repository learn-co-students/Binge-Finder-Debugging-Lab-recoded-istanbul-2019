import React from 'react';

const tvShow = (props) => {

  const handelSelect = () => props.selectShow(props.show)
  
  return (
    <div>
      <br/>
      <img src={props.show.image.medium} onClick={handelSelect} alt=""/>
    </div>
  );
}

export default tvShow;
