import React from 'react';
import './search.css';


interface Props {
  updateSearchQuery: (query: string) => void;
}

export const SearchBar = (props: Props) => {

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    props.updateSearchQuery(e.target.value)
  }

  return (
    <div>
      <input data-testId="search-box" className='search-container' onChange={onChange} />
    </div>
  )
}