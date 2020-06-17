import React from 'react';
import { Input } from 'semantic-ui-react';

const Search = (props) => {
  //console.log(props)
  return (
    <div>
      <Input type="text" placeholder="Search" onChange={(e) => props.handlesearch(e)} value={props.search} />
    </div>
  )
}

export default Search;