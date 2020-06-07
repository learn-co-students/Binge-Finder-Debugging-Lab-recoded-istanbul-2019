class Adapter {
  static getShows (){
    return fetch("http://api.tvmaze.com/shows")
    .then(res => res.json())
    .then(res => console.log(res))
  }

  // static getShowEpisodes (showID){
  //   return fetch(`http://api.tvmaze.com/shows/${showID}/episodes`)
  //   .then(res => res.json)
  // }
}

export default Adapter
