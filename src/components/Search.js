import React, { Component } from 'react';
import '../styles/Search.css';

export default class Search extends Component {

  state = {
    searchValue: "",
    activeSuggestion: 0,
    filteredSuggestions: [],
    showSuggestions: false,
  };

  handleChange = (e) => {
    const { findPokemon } = this.props;
    e.preventDefault();
    this.setState({
      searchValue: e.target.value,
      showSuggestions: true,
    }, findPokemon(e.target.value));
    this.filterSuggestions(e.target.value);
  };

  handleSubmit = (e) => {
    const { findPokemon } = this.props;
    e.preventDefault();
    findPokemon(this.state.searchValue);
  };

  handleOnClick = (e) => {
    const { findPokemon } = this.props;
    e.preventDefault();
    this.setState({
      activeSuggestion: 0,
      filteredSuggestions: [],
      showSuggestions: false,
      searchValue: e.currentTarget.innerText
    }, findPokemon(e.currentTarget.innerText));
  };

  onKeyDown = (e) => {
    const { doesExist ,state: { activeSuggestion, filteredSuggestions, searchValue }, props: { findPokemon } } = this;
    // User pressed the enter key, update the input and close the
    if (e.keyCode === 13 || e.keyCode === 9) {
      if (searchValue !== "" && filteredSuggestions.length >= 1 && doesExist(filteredSuggestions[activeSuggestion])) {
        this.setState({
          activeSuggestion: 0,
          showSuggestions: false,
          searchValue: filteredSuggestions[activeSuggestion],
          filteredSuggestions: [],
        }, findPokemon(filteredSuggestions[activeSuggestion]));
      }
    }
    // User pressed the up arrow, decrement the index
    else if (e.keyCode === 38) {
      if (activeSuggestion === 0) {
        return;
      }

      this.setState({ activeSuggestion: activeSuggestion - 1 });
    }
    // User pressed the down arrow, increment the index
    else if (e.keyCode === 40) {
      if (activeSuggestion - 1 === filteredSuggestions.length) {
        return;
      }

      this.setState({ activeSuggestion: activeSuggestion + 1 });
    }
  };

  doesExist = (reqPokemon) => {
    const { suggestions } = this.props;
    return suggestions.find(suggestion => {
      if (suggestion.toLowerCase() === reqPokemon.toLowerCase()) {
        return true;
      }
    })
  }

  filterSuggestions = (reqPokemon) => {
    let { suggestions } = this.props;
    let filtered = [];
    if (reqPokemon) {
      suggestions.map((suggestion, k) => {
        let length = reqPokemon.length;
        let currSuggSlice = suggestion.slice(0, length);
        if (currSuggSlice.toLowerCase() == reqPokemon.toLowerCase()) {
          filtered.push(suggestion);
        }
      });
      this.setState({
        filteredSuggestions: filtered,
        showSuggestions: true
      });
    };
  };

  generateSuggestions = () => {
    const { handleOnClick, state: { searchValue, filteredSuggestions, activeSuggestion } } = this;
    if (searchValue.length >= 1) {
      return (
      <ul className="suggestions">
        {
          filteredSuggestions.map((suggestion, k) => {
            let className;
            if (k === activeSuggestion) {
              className = "suggestion-active";
            }
            return <li
                    key={k}
                    onClick={handleOnClick}
                    className={className}
                    >
                      {suggestion}
                    </li>
          })
        }
      </ul>
    )};
  };


  render() {
    const { generateSuggestions, onKeyDown, handleChange, props: { suggestions }, state: { searchValue, filteredSuggestions, showSuggestions } } = this;
    return (
      <div className="col-md-12 search-buffer search-text">
        <form action="" onSubmit={(e) => this.handleSubmit(e)}>
          <div className="input-group mb-4 border rounded-pill p-1">
             <div className="input-group-prepend border-0">
               <button id="search-pokemon" type="button" className="btn btn-link text-info"><i className="fa fa-search search-icon"></i></button>
             </div>
             <input value={searchValue} onKeyDown={(e) => onKeyDown(e)} onChange={(e) => handleChange(e)} type="search" placeholder="Who are you looking for?" aria-describedby="search-pokemon" className="form-control bg-none border-0"/>
           </div>
           {showSuggestions ? generateSuggestions() : null}
         </form>
      </div>
    )
  }
};
