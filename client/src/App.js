import React, { useState } from 'react';

import SavedList from './Movies/SavedList';

const App = () => {
  const [savedList, setSavedList] = useState( [] );

  const addToSavedList = movie => {
    setSavedList( [...savedList, movie] );
  };

  return (
    <div>
      <SavedList list={savedList} />
      <Switch>
          <Route path="/" exact component={MovieList} />
          <Route path="/movies/:id" component={Movie} />
       
      </Switch>
    </div>
  );
};

export default App;
