import React, { Component } from 'react';
import Stats from './Stats';
import '../styles/PokeCard.css';

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

  componentWillReceiveProps(newProps) {
    if (newProps.pokemon !== this.props.pokemon) {
      return this.setState({
        pokemon: newProps.pokemon
      })
    }
  };

  handleClick = (e) => {
    e.preventDefault();
    this.setState({
      isOpen: !this.state.isOpen
    })
  };

  buildStatsView = () => {
    return <Stats endPoint={this.props.pokemon.url}/>
  };

  upperName = () => {
    let pokeName = this.props.pokemon.name;
    return pokeName.charAt(0).toUpperCase() + pokeName.slice(1);
  }

  render() {
    const { pokemon } = this.props;
    const id = parseInt(pokemon.url.split('/')[6]);
    const pokeName = this.upperName();
    return (
              <div className="col-md-3 poke-card">
                <div className="card">
                  {id ? <img src={require(`../_assets/sprites/${id}.png`)} className="card-img-top" alt={pokemon.name} /> : null}
                  <div className="card-body">
                    <h5 className="card-title">{pokeName}</h5>
                  </div>
                    <ul className="list-group list-group-flush">
                      <li className="list-group-item">
                        <button type="button" className="btn btn-primary" data-toggle="modal" data-target={`#${pokemon.name}`} onClick={(e) => this.handleClick(e)}>View Stats</button>

                        <div id={pokemon.name} className="modal fade bd-example-modal-lg" tabIndex="-1" role="dialog" aria-labelledby={pokemon.name} aria-hidden="true">
                          <div className="modal-dialog modal-lg">
                            <div className="modal-content">
                              <div className="modal-header">
                                <h5 className="modal-title">{`${pokeName}'s Stats`}</h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close" onClick={(e) => this.handleClick(e)}>
                                  <span aria-hidden="true">&times;</span>
                                </button>
                              </div>
                              <div id={`${pokemon.name}-stat-view`} className="modal-body">
                                {this.state.isOpen ? this.buildStatsView() : null}
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
