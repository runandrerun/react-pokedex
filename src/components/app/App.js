import React from 'react';
import NavBar from '../navbar/NavBar.component';
import PokeListContainer from '../poke-list/PokeList.component';
import Progress from '../progress/Progress.component';
import './App.styles.css';

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
