import React, { useState } from 'react';
import { data } from './data';
import { SearchBar } from './components/search';
import './app.css';
import { Folder } from './components/folder/index';

function App() {

  const [query, setQuery] = useState('');
  return (
    <div className='container'>
      <SearchBar updateSearchQuery={setQuery} />
      <Folder query={query} shouldOpen={query.length > 0} data={data} />
    </div>
  );
}

export default App;
