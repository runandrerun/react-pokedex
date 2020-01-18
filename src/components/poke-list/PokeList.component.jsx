import React, { Component } from 'react';
import PokeCard from '../poke-card/PokeCard.component';
import Search from '../search/Search.component';
import { fetchPokemon } from '../../adapters';
import './PokeList.styles.css';

export default class PokeList extends Component {

  state = {
    pokemon: null,
    pokemonCopy: null,
    foundPokemon: null,
    suggestions: null,
    isFound: true,
    fetched: false,
    loading: false,
  };

  componentDidMount() {
    this.setState({
      loading: true
    });
    return fetchPokemon()
    .then(res => {
      this.createSuggestions(res.results);
      return this.setState({
        pokemon: res.results,
        pokemonCopy: res.results,
        fetched: true,
        loading: true,
      });
    });
  };

  findPokemon = (pokemonReq) => {
    if (pokemonReq !== "") {
      if (this.secondaryFinder(pokemonReq) == false) {
        this.setState({
          isFound: false
        });
      } else {
        let foundPokemon = this.secondaryFinder(pokemonReq);
        this.setState({
          pokemon: foundPokemon,
          isFound: true,
        });
      };
    } else {
        this.setState({
          pokemon: this.state.pokemonCopy,
          isFound: true
        });
      }
    };

  finder = (pokemonReq) => {
    if (pokemonReq) {
      return this.state.pokemon.filter(pokemon => {
        let length = pokemonReq.length;
        let currPokeSlice = pokemon.name.slice(0, length);
        return pokemonReq.toLowerCase() === currPokeSlice.toLowerCase();
      });
    };
  };

  secondaryFinder = (pokemonReq) => {
    if (pokemonReq) {
      return this.state.pokemonCopy.filter(pokemon => {
        let length = pokemonReq.length;
        let currPokeSlice = pokemon.name.slice(0, length);
        return pokemonReq.toLowerCase() === currPokeSlice.toLowerCase();
      });
    };
  };

  resetList = (e) => {
    e.preventDefault();
    this.setState({
      pokemon: this.state.pokemonCopy,
      isFound: true
    });
  };

  createSuggestions = (res) => {
    if (res) {
      let suggestionsList = [];
      res.map((pokemon, k) => {
          return suggestionsList.push(pokemon.name);
      });
      return this.setState({
          suggestions: suggestionsList
      });
    };
  };

  render() {
    const { fetched, loading, suggestions} = this.state;
    if (fetched) {
      return  <div className="container">
                <div className="row">
                    <Search findPokemon={this.findPokemon} suggestions={suggestions}/>
                    {this.createSuggestions()}
                  {this.state.isFound ? null : <div className="col-md-12 search-failure">Unable to find this Pokemon! Please try again, or <span className="reset-toggle" onClick={(e) => this.resetList(e)}>click here</span> to reset.</div>}
                </div>
                <hr/>
                <div className="row">
                  {this.state.pokemon.map(( pokemon, k ) =>
                    <PokeCard key={k} id={pokemon.id} pokemon={pokemon}/>
                  )}
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
  };
};
