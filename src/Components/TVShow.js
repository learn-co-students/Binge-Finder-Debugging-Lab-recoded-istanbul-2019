import React from 'react';

const TVShow = (props) => {
  return (
    <div>
      <br/>
      <img src={props.s} onClick={props.selectShow} alt=""/>
      {/* {props.selectShow}
      {props.searchTerm} */}
    </div>
  );
}

export default TVShow;
