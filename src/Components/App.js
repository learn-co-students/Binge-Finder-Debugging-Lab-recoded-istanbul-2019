import React, { Component } from "react";
import Adapter from "../Adapter";
import TVShowList from "./TVShowList";
import Nav from "./Nav";
import SelectedShowContainer from "./SelectedShowContainer";
import { Grid } from "semantic-ui-react";

class App extends Component {
  //not completed!!
  state = {
    shows: [],
    searchTerm: "",
    selectedShow: "",
    episodes: [],
    filterByRating: ""
  };

  componentDidMount = () => {
    Adapter.getShows().then(show => this.setState({shows: show.slice(0,20) })); //for fast loading first 20 shows
  };

  componentDidUpdate = () => {
    window.scrollTo(0, 0);
  };

  handleSearch(e) {
    const text= e.target.value.toLowerCase()
    Adapter.getShowsSearch(text)
    .then(result => this.setState({shows : result, searchTerm : text}))
  }

  handleFilter = e => {
    e.target.value === "No Filter"
      ? this.setState({ filterRating: "" })
      : this.setState({ filterRating: e.target.value });
  };

  selectShow = show => {
    Adapter.getShowEpisodes(show.id).then(episodes =>
      this.setState({
        selectedShow: show,
        episodes: episodes
      })
    );
  };

  displayShows = () => {
    if (this.state.filterByRating) {
      return this.state.shows.filter(s => {
        return s.rating.average >= this.state.filterByRating;
      });
    } 
      return this.state.shows;
    
  };

  render() {
    return (
      <div>
        <Nav
          handleFilter={this.handleFilter}
          handleSearch={this.handleSearch}
          searchTerm={this.state.searchTerm}
        />
        <Grid>
          <Grid.Column width={5}>
            {!!this.state.selectedShow ? (
              <SelectedShowContainer
                selectedShow={this.state.selectedShow}
                allEpisodes={this.state.episodes}
              />
            ) : (
              <div />
            )}  

          </Grid.Column>
          <Grid.Column width={11}>
            <TVShowList
              shows={this.displayShows()}
              selectShow={this.selectShow}
              searchTerm={this.state.searchTerm}
            />
          </Grid.Column>
        </Grid>
      </div>
    );
  }
}

export default App;
