import React, { Component } from 'react';
import StatChart from './StatChart';
import ElementChip from './ElementChip';
import { fetchUniqPokemon } from '../adapters';
import '../styles/Stats.css';

export default class Stats extends Component {
  state = {
    stats: null,
    height: null,
    weight: null,
    types: null,
    sprites: null,
    fetched: false,
    loading: false,
  };

  componentWillMount() {
    this.setState({
      loading: true
    });
    return fetchUniqPokemon(this.props.endPoint)
    .then(res => {
      return this.setState({
        stats: res.stats,
        height: res.height,
        weight: res.weight,
        types: res.types,
        sprites: res.sprites,
        fetched: true,
        loading: true,
      })
    });
  };

  buildStats = () => {
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
        return <ElementChip key={pokeType.type.name} element={pokeType.type.name}/>;
      })
    };
  };

  buildSprites = () => {
    if (this.state.sprites) {
      return (
        <div className="center-sprites">
          <img src={this.state.sprites.front_default} alt="Front View"/>
          <img src={this.state.sprites.back_default} alt="Back View"/>
        </div>
      )
    };
  };

  render() {
    const { fetched, loading } = this.state;

    if (fetched) {
      return (
          <div>
            {this.state.sprites ? this.buildSprites() : null}
            <ul className="list-group list-group-flush">
              <li className="list-group-item"><b>Height:</b> {this.state.height}</li>
              <li className="list-group-item"><b>Weight:</b> {this.state.weight} lbs</li>
              <li className="list-group-item">{this.state.types.length > 1 ? <b>Pokemon Types</b> : <b>Pokemon Type</b>}: <ul className="list-group"><div>{this.state.types ? this.buildTypes() : null}</div></ul></li>
            </ul>
            <hr/>
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
