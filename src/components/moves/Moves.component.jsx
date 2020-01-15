import React, { Component } from 'react';
import { fetchUniqPokemon } from '../../adapters';
import './Moves.styles.css';

export default class Moves extends Component {
  state = {
    moves: [],
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
        moves: res.moves,
        fetched: true,
        loading: true,
      })
    });
  };

  buildMoves = () => {
    const { moves } = this.state;

    if (moves.length >= 1) {
      return moves.map((moveObj, k) => {
        return <li key={k}>{moveObj.move.name}</li>;
      });
    };
  };

  render() {
    const { buildMoves, state: { fetched, loading, moves } } = this;

    if (fetched) {
      return (
          <div>
            <ul className="moves">
              {buildMoves()}
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
    };
  };
};
