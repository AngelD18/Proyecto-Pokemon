import axios from 'axios';

export const getLanguage = async () => {
  let results = await axios.get('https://pokeapi.co/api/v2/pokemon');
  console.log(results);
}
