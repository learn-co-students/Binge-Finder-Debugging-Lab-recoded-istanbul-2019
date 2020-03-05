
import React, { Component } from 'react'

export default class Adapter extends Component {
  static getShows (){
    return fetch("http://api.tvmaze.com/shows?page=1")
    .then(res => res.json())
    
    
  }

  static getShowEpisodes (showID){
    return fetch(`http://api.tvmaze.com/shows/${showID}/episodes`)
    .then(res => res.json())
  }

  static getShowsSearch(query) {
    return fetch(`http://api.tvmaze.com/search/shows?q=${query}`)
      .then(res => res.json())
      .then(data => {

        // console.log(res);
        return data.map(show => {
          return show.show;
        });
      })
    }

  render() {
    return (
      <div>
        
      </div>
    )
  }
}



