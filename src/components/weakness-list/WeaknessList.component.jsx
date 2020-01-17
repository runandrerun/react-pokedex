import React, { Component } from 'react';
import ElementChip from '../element-chip/ElementChip.component';

export default class WeaknessList extends Component {

  weaknessFinder = (type) => {
    switch (type) {

      case 'normal':
      return ['rock', 'ghost', 'steel'];

      case 'fighting':
      return ['flying', 'poison', 'psychic', 'bug', 'ghost', 'fairy'];

      case 'flying':
      return ['rock', 'steel', 'electric'];

      case 'poison':
      return ['poison', 'ground', 'rock', 'ghost', 'steel'];

      case 'ground':
      return ['flying', 'bug', 'grass'];

      case 'rock':
      return ['fighting', 'ground', 'steel'];

      case 'bug':
      return ['fighting', 'flying', 'poison', 'ghost', 'steel', 'fire', 'fairy'];

      case 'ghost':
      return ['normal', 'dark'];

      case 'steel':
      return ['steel', 'fire', 'water', 'electric'];

      case 'fire':
      return ['rock', 'fire', 'water', 'dragon'];

      case 'water':
      return ['water', 'grass', 'dragon'];

      case 'grass':
      return ['flying', 'poison', 'bug', 'steel', 'fire', 'grass', 'dragon'];

      case 'electric':
      return ['ground', 'grass', 'electric', 'dragon'];

      case 'psychic':
      return ['steel', 'psychic', 'dark'];

      case 'ice':
      return ['steel', 'fire', 'water', 'ice'];

      case 'dragon':
      return ['steel', 'fairy'];

      case 'fairy':
      return ['poison', 'steel', 'fire'];

      case 'dark':
      return ['fighting', 'dark', 'fairy'];

      default:
      return ['none'];

    }
  };

  buildWeaknesses = () => {
    let weaknessArr = [];
    this.props.types.map(type => {
      weaknessArr.push(this.weaknessFinder(type.type.name));
    });


    if (weaknessArr.length > 1) {
      for (let i = 0; i <= weaknessArr.length; i++) {
        return weaknessArr[i].map((weakness, index) => {
          return <ElementChip key={index} element={weakness} />;
        });
      };
    } else {
      for (let i = 0; i <= weaknessArr.length; i++) {
        return weaknessArr[i].map((weakness, index) => {
          return <ElementChip key={index} element={weakness} />;
        });
      };
    };
  };

  render() {
    const { types } = this.props;
    return (
      <div>{this.buildWeaknesses()}</div>
    )
  }
}
