import React from 'react';
import NavBar from './NavBar';
import PokeListContainer from '../containers/PokeListContainer';
import Progress from './Progress';
import '../styles/App.css';

const App = () => {
    return (
      <div>
        <NavBar />
        <PokeListContainer />
        <Progress />
      </div>
    );
};

export default App;
