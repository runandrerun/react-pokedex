import React, { Component } from 'react';
import Stats from '../stats/Stats.component';
import Moves from '../moves/Moves.component';
import EvolutionChart from '../evolution-chart/EvolutionChart.component';
import './PokeCard.styles.css';

export default class PokeCard extends Component {

  state = {
    isOpen: false,
    pokemon: null,
  };

  componentDidMount() {
    return this.setState({
      pokemon: this.props.pokemon
    })
  };

  handleClick = (e) => {
    e.preventDefault();
    this.setState({
      isOpen: !this.state.isOpen
    })
  };

  buildStatsView = () => {
    return <Stats endPoint={this.props.pokemon.url}/>;
  };

  buildMovesView = () => {
    return <Moves endPoint={this.props.pokemon.url}/>;
  };

  buildEvolutionChain = (reqPoke) => {
    return <EvolutionChart id={reqPoke}/>;
  }

  upperName = () => {
    let pokeName = this.props.pokemon.name;
    return pokeName.charAt(0).toUpperCase() + pokeName.slice(1);
  }

  render() {
    const { buildStatsView, buildMovesView, buildEvolutionChain, handleClick, props: { pokemon }, state: { isOpen } } = this;
    const id = parseInt(pokemon.url.split('/')[6]);
    const pokeName = this.upperName();
    return (
              <div className="col-md-4">
                <div className="card poke-card">
                  <div className="img-container">
                    {/*id ? <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/${id}.png`} className="card-img-top" alt={pokemon.name} /> : null}*/}
                    {id ? <img src={require(`../../_assets/pokemon/data/${id}.png`)} className="card-img-top" alt={pokemon.name} /> : null}
                  </div>
                  <div className="card-body">
                    <h5 className="card-title">{pokeName}</h5>
                  </div>
                    <ul className="list-group list-group-flush">
                      <li className="list-group-item btn-align">
                        <button type="button" className="btn btn-primary" data-toggle="modal" data-target={`#${pokemon.name}-stats`} onClick={(e) => handleClick(e)}>Stats</button>

                        <div id={`${pokemon.name}-stats`} className="modal fade bd-example-modal-lg" tabIndex="-1" role="dialog" aria-labelledby={`${pokemon.name}-stats`} aria-hidden="true">
                          <div className="modal-dialog modal-lg">
                            <div className="modal-content">
                              <div className="modal-header">
                                <h5 className="modal-title">{`${pokeName}'s Stats`}</h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close" onClick={(e) => handleClick(e)}>
                                  <span aria-hidden="true">&times;</span>
                                </button>
                              </div>
                              <div id={`${pokemon.name}-stat-view`} className="modal-body">
                                {isOpen ? buildStatsView() : null}
                              </div>
                            </div>
                          </div>
                        </div>

                        <button type="button" className="btn btn-primary btn-margin" data-toggle="modal" data-target={`#${pokemon.name}-moves`} onClick={(e) => handleClick(e)}>Moves</button>

                        <div id={`${pokemon.name}-moves`} className="modal fade bd-example-modal-lg" tabIndex="-1" role="dialog" aria-labelledby={`${pokemon.name}-moves`} aria-hidden="true">
                          <div className="modal-dialog modal-lg">
                            <div className="modal-content">
                              <div className="modal-header">
                                <h5 className="modal-title">{`${pokeName}'s Moves`}</h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close" onClick={(e) => handleClick(e)}>
                                  <span aria-hidden="true">&times;</span>
                                </button>
                              </div>
                              <div id={`${pokemon.name}-stat-view`} className="modal-body">
                                {id === 555 || id >= 650 ? null : <img src={`https://img.pokemondb.net/sprites/black-white/anim/normal/${pokemon.name}.gif`} alt={`${pokemon.name} battle sprite`}/> }
                                {isOpen ? buildMovesView() : null}
                              </div>
                            </div>
                          </div>
                        </div>

                        <button type="button" className="btn btn-primary btn-margin" data-toggle="modal" data-target={`#${pokemon.name}-evolution-chain`} onClick={(e) => handleClick(e)}>Evoluton</button>

                        <div id={`${pokemon.name}-evolution-chain`} className="modal fade bd-example-modal-lg" tabIndex="-1" role="dialog" aria-labelledby={`${pokemon.name}-evolution-chain`} aria-hidden="true">
                          <div className="modal-dialog modal-lg">
                            <div className="modal-content">
                              <div className="modal-header">
                                <h5 className="modal-title">{`${pokeName}'s Evolution Chain`}</h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close" onClick={(e) => handleClick(e)}>
                                  <span aria-hidden="true">&times;</span>
                                </button>
                              </div>
                              <div id={`${pokemon.name}-evolution-chain-view`} className="modal-body">
                                {buildEvolutionChain(id)}
                              </div>
                            </div>
                          </div>
                        </div>

                      </li>
                    </ul>
                  </div>
                </div>
    )
  }
}
