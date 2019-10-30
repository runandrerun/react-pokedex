import React from 'react';
import Stats from './Stats';
import '../styles/PokeCard.css';

const PokeCard = ({ id, pokemon }) => {

  console.log(pokemon)
  console.log(id)
  return <div className="col-md-3 poke-card">
          <div className="card">
            <img src={require(`../_assets/sprites/${id}.png`)} className="card-img-top" alt={pokemon.name} />
            <div className="card-body">
              <h5 className="card-title">{pokemon.name}</h5>
            </div>
              <ul className="list-group list-group-flush">
                <li className="list-group-item">
                  <button type="button" className="btn btn-primary" data-toggle="modal" data-target={`#${pokemon.name}`}>View Stats</button>

                  <div id={pokemon.name} className="modal fade bd-example-modal-lg" tabIndex="-1" role="dialog" aria-labelledby={pokemon.name} aria-hidden="true">
                    <div className="modal-dialog modal-lg">
                      <div className="modal-content">
                        <div className="modal-header">
                          <h5 className="modal-title">{`${pokemon.name}'s stats`}</h5>
                          <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                          </button>
                        </div>
                        <div className="modal-body">
                          <Stats endPoint={pokemon.url} />
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
};

export default PokeCard;
