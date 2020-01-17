import React, { Component } from 'react';
import ElementChip from '../element-chip/ElementChip.component';

export default class StrengthList extends Component {

  strengthFinder = (type) => {
    switch (type) {

      case 'normal':
      return ['none'];

      case 'fighting':
      return ['normal', 'rock', 'steel', 'ice', 'dark'];

      case 'flying':
      return ['fighting', 'bug', 'grass'];

      case 'poison':
      return ['grass', 'fairy'];

      case 'ground':
      return ['poison', 'rock', 'steel', 'fire', 'electric'];

      case 'rock':
      return ['flying', 'bug', 'fire', 'ice'];

      case 'bug':
      return ['grass', 'psychic', 'dark'];

      case 'ghost':
      return ['ghost', 'psychic'];

      case 'steel':
      return ['rock', 'ice', 'fairy'];

      case 'fire':
      return ['bug', 'steel', 'grass', 'ice'];

      case 'water':
      return ['ground', 'rock', 'fire'];

      case 'grass':
      return ['ground', 'rock', 'water'];

      case 'electric':
      return ['flying', 'water'];

      case 'psychic':
      return ['fighting', 'poison'];

      case 'ice':
      return ['flying', 'ground', 'grass', 'dragon'];

      case 'dragon':
      return ['dragon'];

      case 'fairy':
      return ['fighting', 'dragon', 'dark'];

      case 'dark':
      return ['ghost', 'psychic'];

      default:
      return ['none'];

    }
  };

  buildStrengths = () => {
    let strengthsArr = [];
    this.props.types.map(type => {
      strengthsArr.push(this.strengthFinder(type.type.name));
    });

    if (strengthsArr.length > 1) {
      for (let i = 0; i <= strengthsArr.length; i++) {
        return strengthsArr[i].map((strength, index) => {
          return <ElementChip key={index} element={strength} />;
        });
      };
    } else {
      for (let i = 0; i <= strengthsArr.length; i++) {
        return strengthsArr[i].map((strength, index) => {
          return <ElementChip key={index} element={strength} />;
        });
      };
    };
  };

  render() {
    const { types } = this.props;
    return (
      <div>{this.buildStrengths()}</div>
    )
  }
}
