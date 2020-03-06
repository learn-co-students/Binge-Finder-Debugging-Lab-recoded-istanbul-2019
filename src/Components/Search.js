import React from 'react';
import { Input } from 'semantic-ui-react';

const Search = (props) => {
  const handelChange = (e) => {
    props.handleSearch(e)
  }
  return (
    <div>
      <Input type="text" placeholder="Search" onChange={handelChange} value={props.search} />
    </div>
  )
}

export default Search;
