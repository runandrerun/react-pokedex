import React, { Component } from 'react';
import StatChart from './StatChart';
import { fetchUniqPokemon } from '../adapters';
import '../styles/Stats.css';

export default class Stats extends Component {
  state = {
    stats: null,
    height: null,
    weight: null,
    types: null,
    fetched: false,
    loading: false,
  }

  componentWillMount() {
    this.setState({
      loading: true
    });
    return fetchUniqPokemon(this.props.endPoint)
    .then(res => {
      console.log("inside setup", res)
      return this.setState({
        stats: res.stats,
        height: res.height,
        weight: res.weight,
        types: res.types,
        fetched: true,
        loading: true,
      })
    });
  };

  buildStats = () => {
    console.log("Inside buildStats", this.state.stats)
    let baseStats = [];
    let statNames = [];

    if (this.state.stats) {
      this.state.stats.map(pokeStat => {
        baseStats.push(pokeStat.base_stat);
        statNames.push(pokeStat.stat.name);
      });

      return <StatChart baseStats={baseStats} statNames={statNames} />;
    };
  };

  buildTypes = () => {
    if (this.state.types) {
      return this.state.types.map(pokeType => {
        return <li className="list-group-item">{pokeType.type.name}</li>
      })
    }
  }

  render() {
    const { fetched, loading } = this.state;

    if (fetched) {
      return (
          <div>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">Height: {this.state.height}</li>
              <li className="list-group-item">Weight: {this.state.weight}lbs</li>
              <li className="list-group-item">{this.state.types.length > 1 ? `<b>Pokemon Types:</b>` : `<b>Pokemon Type:</b>`} <ul>{this.state.types ? this.buildTypes() : null}</ul></li>
            </ul>
            {this.state.stats ? this.buildStats() : "Loading"}
          </div>
      )
    } else if (loading && !fetched) {
      return  <div className="loader">
                <div className="spinner-border text-primary" role="status">
                  <span className="sr-only">Loading...</span>
                </div>
              </div>
    } else {
      return (
        <div>
          Please refresh.
        </div>
      )
    };
  };
};
