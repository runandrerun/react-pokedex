import React, { Component } from 'react';
import StatChart from './StatChart';
import { fetchUniqPokemon } from '../adapters';

export default class Stats extends Component {
  state = {
    stats: null,
    fetched: false,
    loading: false,
  }

  componentWillMount() {
    this.setState({
      loading: true
    });
    return fetchUniqPokemon(this.props.endPoint)
    .then(res => {
      console.log("inside setup", res.stats)
      this.setState({
        stats: res.stats,
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
      // return this.state.stats.map((id, pokeStat) => {
      //   return <StatChart key={id} pokeStat={pokeStat} />
      // });
      // return this.state.stats.map(pokeStat => {
      //   console.log("Inside build", pokeStat.stat)
      //   return <div>{`${pokeStat.stat.name} ${pokeStat.base_stat}`}</div>
      // });
    };
  };

  render() {
    const { fetched, loading } = this.state;

    if (fetched) {
      return <div>{this.state.stats ? this.buildStats() : "Loading"}</div>
    } else if (loading && !fetched) {
      return  <div className="spinner-border text-primary" role="status">
                <span className="sr-only">Loading...</span>
              </div>
    } else {
      return (
        <div>
        hi
        </div>
      )
    };
  };
};
