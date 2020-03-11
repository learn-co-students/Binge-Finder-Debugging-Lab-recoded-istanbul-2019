import React from 'react';
import {Grid} from 'semantic-ui-react';
import TVShow from './TVShow'

  const TVShowList = (props) => {
    if (!!props.searchTerm){
     return props.shows.map((s) => {
        if (s.name.toLowerCase().includes(props.searchTerm)){
         return  (<TVShow show={s} key={s.id} selectShow={props.selectShow}/> )
        }
      })
    }
    return(
      <div className='TVShowList'>
      {props.shows.map( (s)=>{
      <Grid><TVShow show={s} key={s.id} selectShow={props.selectShow}/></Grid> 
      })}
      </div>

    )
    }


export default TVShowList
