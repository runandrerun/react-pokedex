import React, { Component } from 'react';
import { fetchEvolutionChain } from '../../adapters';

export default class EvolutionChart extends Component {

  state = {
    evolutionChain: null,
    fetched: false,
    loading: false,
  };

  componentDidMount() {
    this.setState({
      loading: true,
      fetched: true,
    });
    // const { id } = this.props;
    // return fetchEvolutionChain(this.props.id)
    // .then(res => {
    //   return this.setState({
    //     evolutionChain: res.chain,
    //     fetched: true,
    //     loading: true,
    //   })
    // });
  };

  renderEvolutionChain = () => {
    const { state: { evolutionChain }, props: { id } } = this;
    if (evolutionChain) {
      let firstPokemon = evolutionChain.species.name;
      let secondEvolve = evolutionChain.evolves_to.length >= 1 ? evolutionChain.evolves_to[0].species.name : null;
      let thirdEvolve = evolutionChain.evolves_to.length >= 1 && evolutionChain.evolves_to[0].evolves_to.length >= 1 ? evolutionChain.evolves_to[0].evolves_to[0].species.name : null;
      return (
        <>
          <div>{evolutionChain.species.name}</div>
          <div>{evolutionChain.evolves_to.length >= 1 ? evolutionChain.evolves_to[0].species.name : null}</div>
          <div>{evolutionChain.evolves_to.length >= 1 && evolutionChain.evolves_to[0].evolves_to.length >= 1 ? evolutionChain.evolves_to[0].evolves_to[0].species.name : null}</div>
        </>
      )
    }
  }
  render() {
    const { renderEvolutionChain, state: { fetched, loading } } = this;
    if (fetched) {
      return (
          <div>
            <ul className="moves">
              Feature coming soon!
            </ul>
            <hr/>
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
    }
  };
};
