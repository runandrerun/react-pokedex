import React, { Component } from 'react';
import PokeCard from '../components/PokeCard';
import { fetchPokemon } from '../adapters';
import '../styles/PokeList.css';

export default class PokeListContainer extends Component {

  state = {
    pokemon: null,
    fetched: false,
    loading: false,
  };

  componentWillMount() {
    this.setState({
      loading: true
    });
    return fetchPokemon()
    .then(res => {
      this.setState({
        pokemon: res.results,
        fetched: true,
        loading: true,
      });
    });
  }

  render() {
    const { fetched, loading } = this.state;

    if (fetched) {
      return  <div className="container">
                <div className="row">
                  {this.state.pokemon.map((pokemon,index)=><PokeCard key={pokemon.name} id={index+1} pokemon={pokemon}/>)}
                </div>
              </div>
    } else if (loading && !fetched) {
      return  <div className="container loader">
                <div className="spinner-border text-primary" role="status">
                  <span className="sr-only">Loading...</span>
                </div>
              </div>
    } else {
      return <div/>
    }
  }
}
