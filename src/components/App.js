import React, { Component } from 'react';
import PokeListContainer from '../containers/PokeListContainer';
import './styles/App.css';

export default class App extends Component {
  state = {

  };

  render() {
    return (
      <div>
       <PokeListContainer />
      </div>
    )
  }
};
