import React, { useEffect } from 'react';
import { Grid } from 'semantic-ui-react';
import TVShow from './TVShow'

const TVShowList = (props) => {
  //console.log(props)
  const mapAllShows = () => {
    if (!!props.searchTerm) {
      return props.shows.map((s) => {
        if (s.name.toLowerCase().includes(props.searchTerm)) {
          //console.log(`${s.name} is matched`)
          return <TVShow show={s} key={s.id} selectShow={props.selectShow} />;
        } /*else {
          return console.log('nothing matched');
        }*/
      })
    } else {
      return props.shows.map((s) => <TVShow show={s} key={s.id} selectShow={props.selectShow} />)
    }
  }

  return (
    <div className="TVShowList">
      <Grid>
        {mapAllShows()}
      </Grid>
    </div>
  )


}

export default TVShowList;