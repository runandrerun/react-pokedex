import React, { Component } from 'react';
import '../styles/Search.css';

export default class Search extends Component {

  state = {
    searchValue: ""
  };

  handleChange = (e) => {
    e.preventDefault();
    this.setState({
      searchValue: e.target.value
    }, console.log(this.state));
  };

  render() {
    return (
      <div className="col-md-12 search-buffer search-text">
        Search feature coming very soon!
        <form action="">
          <div className="input-group mb-4 border rounded-pill p-1">
             <div className="input-group-prepend border-0">
               <button id="search-pokemon" type="button" className="btn btn-link text-info"><i className="fa fa-search search-icon"></i></button>
             </div>
             <input onChange={(e) => this.handleChange(e)} type="search" placeholder="Who are you looking for?" aria-describedby="search-pokemon" className="form-control bg-none border-0"/>
           </div>
         </form>
        <hr/>
      </div>
    )
  }
};
