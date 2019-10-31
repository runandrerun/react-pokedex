export const fetchPokemon = async () => {
  const response = await fetch('http://pokeapi.co/api/v2/pokemon?limit=151');
  const body = await response.json();
  
  if (response.status !== 200) {
    throw Error(body.message);
  }
  return body;
};

export const fetchUniqPokemon = async (url) => {
  const response = await fetch(url);
  const body = await response.json();

  if (response.status !== 200) {
    throw Error(body.message);
  }
  return body;
}
