import React, { useState, useEffect, Fragment } from 'react';
import '../../App.css';
import { getAllPokemon, getPokemon, getAllAbility } from '../../services/pokemon';
import Card from '../Card/Card';
import Navbar from '../Navbar/Navbar';
import { Footer } from '../Footer/Footer';



function ListContainer() {
  const [pokemonData, setPokemonData] = useState({
    pokemonInformations: []
  });
  const [stateLanguage, setLanguage] = useState({
    value: ""
  });
  const { pokemonInformations } = pokemonData;
  const [nextUrl, setNextUrl] = useState('');
  const [prevUrl, setPrevUrl] = useState('');
  const [loading, setLoading] = useState(true);
  const initialUrl = 'https://pokeapi.co/api/v2/pokemon'
  useEffect(() => {
    setLoading(true);
    fetchData();
    window.setTimeout(() => {
      setLanguage({
        value: 'en'
      })
      setLoading(false);
    }, 500);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  async function fetchData() {
    let response = await getAllPokemon(initialUrl)
    setNextUrl(response.next);
    setPrevUrl(response.previous);
    await loadingPokemon(response.results);
  }

  const next = async () => {
    setLoading(true);
    let data = await getAllPokemon(nextUrl);
    await loadingPokemon(data.results);
    setNextUrl(data.next);
    setPrevUrl(data.previous);
    window.setTimeout(() => {
      setLoading(false);
    }, 500);

  }

  const prev = async () => {
    if (!prevUrl) return;
    setLoading(true);
    let data = await getAllPokemon(prevUrl);
    await loadingPokemon(data.results);
    setNextUrl(data.next);
    setPrevUrl(data.previous);
    window.setTimeout(() => {
      setLoading(false);
    }, 500);
  }

  const loadingPokemon = async (data) => {
    await Promise.all(data.map(async pokemon => {
      let pokemonInfo = await getPokemon(pokemon.url);
      pokemon.pokemonInfo = pokemonInfo;
      pokemon.pokemonInfo.abilities.map(async pokemonAbility => {
        let pokemonAbilities = await getAllAbility(pokemonAbility.ability.url);
        pokemon.pokemonInfo.pokemonAbilities = pokemonAbilities;
      })

    }));
    pokemonInformations.length = 0;
    pokemonInformations.push(data);
    setPokemonData({
      ...pokemonData,
      pokemonInformations
    });
  }


  const handleChangeLanguage = (event) => {
    setLanguage({
      value: event.target.value
    })
  };

  return (
    <Fragment>
      <Navbar />
      {loading ? <h1>Loading...</h1> :
        <Fragment>

          <div className="btn">
            <button onClick={prev}>Prev</button>
            <button onClick={next}>Next</button>
            <select className="custom-select mr-sm-5 w-25 float-right"
              id={stateLanguage.value}
              onChange={handleChangeLanguage}
            >
              <option value={stateLanguage.value} >Idioma</option>
              <option value="en">en</option>
              <option value="de">de</option>
            </select>
          </div>


          <div className="grid-container ">
            {pokemonData.pokemonInformations.map((pokemon, index) => {
              return (
                <Fragment key={index}>
                  {pokemon.map((poke, i) => {
                    return (
                      <Card className="pt-5" stateLanguage={stateLanguage} pokemon={poke} key={i} />

                    )
                  })}
                </Fragment>
              )
            })}
          </div>
          <div className="btn">
            <button onClick={prev}>Prev</button>
            <button onClick={next}>Next</button>
          </div>

        </Fragment>

      }
      <Footer />
    </Fragment>
  );
}

export default ListContainer;