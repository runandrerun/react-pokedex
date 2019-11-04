import React from 'react';
import NavBar from './NavBar';
import PokeListContainer from '../containers/PokeListContainer';
import '../styles/App.css';

const App = () => {
    return (
      <div>
        <NavBar />
        <PokeListContainer />
      </div>
    )
};

export default App;
