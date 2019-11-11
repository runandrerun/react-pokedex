import React, { Component } from 'react';
import PokeCard from '../components/PokeCard';
import Search from '../components/Search';
import { fetchPokemon } from '../adapters';
import '../styles/PokeList.css';

export default class PokeListContainer extends Component {

  state = {
    pokemon: null,
    pokemonCopy: null,
    foundPokemon: null,
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
      return this.setState({
        pokemon: res.results,
        pokemonCopy: res.results,
        fetched: true,
        loading: true,
      });
    });
  }

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
    return this.state.pokemon.filter(pokemon => {
      let length = pokemonReq.length;
      let currPokeSlice = pokemon.name.slice(0, length);
      return pokemonReq.toLowerCase() === currPokeSlice.toLowerCase();
    });
  };

  secondaryFinder = (pokemonReq) => {
    return this.state.pokemonCopy.filter(pokemon => {
      let length = pokemonReq.length;
      let currPokeSlice = pokemon.name.slice(0, length);
      return pokemonReq.toLowerCase() === currPokeSlice.toLowerCase();
    });
  };

  resetList = (e) => {
    e.preventDefault();
    this.setState({
      pokemon: this.state.pokemonCopy,
      isFound: true
    });
  };

  render() {
    const { fetched, loading } = this.state;
    if (fetched) {
      return  <div className="container">
                <div className="row">
                    <Search findPokemon={this.findPokemon} />
                  {this.state.isFound ? null : <div className="col-md-12 search-failure">Unable to find this Pokemon! Please try again, or <span className="reset-toggle" onClick={(e) => this.resetList(e)}>click here</span> to reset.</div>}
                </div>
                <hr/>
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
  };
};
