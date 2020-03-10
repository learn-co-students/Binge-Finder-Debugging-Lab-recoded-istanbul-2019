import React from 'react';

const tvShow = () => {
  return (
    <div>
      <br/>
      <img src={this.props.image.medium} onClick={this.props.selectShow} alt=""/>
    </div>
  );
}

export default tvShow;
