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
    console.log(pokemonReq)
    if (pokemonReq !== "" && this.state.pokemon.length <= 1) {
      if (this.secondaryFinder(pokemonReq) == false) {
        console.log("HIT")
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
    } else if (pokemonReq !== "") {
      if (this.finder(pokemonReq) == false) {
        console.log("HIT")
        this.setState({
          isFound: false
        });
      } else {
        let foundPokemon = this.finder(pokemonReq);
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
      // console.log(pokemonReq.toLowerCase() === pokemon.name.toLowerCase())
      return pokemonReq.toLowerCase() === pokemon.name.toLowerCase();
    });
  };

  secondaryFinder = (pokemonReq) => {
    return this.state.pokemonCopy.filter(pokemon => {
      // console.log(pokemonReq.toLowerCase() === pokemon.name.toLowerCase())
      return pokemonReq.toLowerCase() === pokemon.name.toLowerCase();
    });
  };

  render() {
    const { fetched, loading } = this.state;
    if (fetched) {
      return  <div className="container">
                <div className="row">
                    <Search findPokemon={this.findPokemon} />
                  {this.state.isFound ? null : <div className="col-md-12">Unable to find this Pokemon! Please try again.</div>}
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
