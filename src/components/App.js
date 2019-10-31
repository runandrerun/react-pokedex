import React from 'react';
import PokeListContainer from '../containers/PokeListContainer';
import '../styles/App.css';

const App = () => {
    return (
      <div className="pokedex-container">
       <PokeListContainer />
      </div>
    )
};

export default App;
