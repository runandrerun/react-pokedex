import React from 'react';

const SuggestionsList = ({ filteredPokemon }) => {
  return (
    <ul className="suggestions">
      {
        filteredPokemon.map((suggestion, k) => {
          let className;
          // if (k === activeSuggestion) {
          //   className = "suggestion-active";
          // }
          if (filteredPokemon.length >= 801) {
            return null;
          } else if (filteredPokemon.length === 0) {
            return <div>{`This Pokemon doesn't exist!`}</div>
          } else {
            return <li
                      key={k}
                      onClick={console.log("Hi")}
                      className={className}
                    >
                      {suggestion.name}
                    </li>

          }
        })
      }
    </ul>
  );
};

export default SuggestionsList;
