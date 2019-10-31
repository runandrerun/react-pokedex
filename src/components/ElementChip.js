import React from 'react';

const elementColors = {
  grass: '#2DCD45',
  poison: '#893587',
  fire: '#F18130',
  flying: '#A890EF',
  water: '#149EFF',
  dragon: '#7009ED',
  bug: '#A8B920',
  normal: '#A8A877',
  electric: '#F8D12F',
  ground: '#E0C068',
  fairy: '#A1A9B1',
  fighting: '#93362D',
  psychic: '#FF6996',
  rock: '#B8A038',
  steel: '#B8B8CF',
  ice: '#97D8D8',
  ghost: '#614B82',
  dark: '#5B483B',
  bird: '#F8F9FA',
}

const ElementChip = ({element}) => {
  return (
    <span className="badge badge-pill" style={{backgroundColor:`${elementColors[element]}`,color:'#fff'}}>
      {element}
    </span>
  );
};

export default ElementChip;
