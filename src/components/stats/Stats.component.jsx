import React, { Component } from 'react';
import StatChart from '../stat-chart/StatChart.component';
import StrengthContainer from '../containers/strength-container/StrengthContainer.component';
import WeaknessContainer from '../containers/weakness-container/WeaknessContainer.component';
import ElementChip from '../element-chip/ElementChip.component';
import { fetchUniqPokemon } from '../../adapters';
import './Stats.styles.css';

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

  componentDidMount() {
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
    const { stats } = this.state;
    let baseStats = [];
    let statNames = [];

    if (stats) {
      stats.map(pokeStat => {
        baseStats.push(pokeStat.base_stat);
        statNames.push(pokeStat.stat.name);
      });

      return <StatChart baseStats={baseStats} statNames={statNames} />;
    };
  };

  buildTypes = () => {
    const { types } = this.state;
    if (types) {
      return types.map(pokeType => {
        return <ElementChip key={pokeType.type.name} element={pokeType.type.name}/>;
      })
    };
  };

  buildStrengthContainer = () => {
    const { types } = this.state;
    if (types) {
      return <StrengthContainer types={types} />;
    };
  };

  buildWeaknessContainer = () => {
    if (this.state.types) {
      return <WeaknessContainer types={this.state.types} />;
    };
  };

  buildSprites = () => {
    const { sprites } = this.state;
    if (sprites) {
      return (
        <div className="center-sprites">
          <img src={sprites.front_default} alt="Front View"/>
          {sprites.back_default ? <img src={sprites.back_default} alt="Back View"/> : null}
        </div>
      )
    };
  };

  render() {
    const { buildSprites, buildWeaknessContainer, buildStrengthContainer, state: { fetched, loading, types, height, weight, sprites, stats } } = this;

    if (fetched) {
      return (
          <div>
            {sprites ? buildSprites() : null}
            <ul className="list-group list-group-flush">
              <li className="list-group-item"><b>Height:</b> {height}</li>
              <li className="list-group-item"><b>Weight:</b> {weight} lbs</li>
              <li className="list-group-item">{types.length > 1 ? <b>Pokemon Types</b> : <b>Pokemon Type</b>}: <ul className="list-group"><div>{types ? this.buildTypes() : null}</div></ul></li>
              <li className="list-group-item"><b>Strengths:</b> {this.state ? buildStrengthContainer() : null}</li>
              <li className="list-group-item"><b>Weaknesses:</b> {this.state ? buildWeaknessContainer() : null}</li>
            </ul>
            <hr/>
            {stats ? this.buildStats() : "Loading"}
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
