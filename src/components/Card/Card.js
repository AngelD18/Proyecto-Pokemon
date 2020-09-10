import React, { Component, Fragment } from 'react'
import './style.css';
import typeColors from '../../helpers/pokemonTypes';

class Card extends Component {

  render() {
    const pokemon = this.props.pokemon;
    const stateLanguage = this.props.stateLanguage;
    return (

      <div className="card " >
        <div className="card-img">
          <img src={pokemon.pokemonInfo.sprites.front_default} alt="" />
        </div>

        <div className="card-image">{pokemon.pokemonInfo.name}</div>
        <div className="card-types">
          {pokemon.pokemonInfo.types.map((type, index) => {
            return (
              <div className="card-type" key={index} style={{ background: typeColors[type.type.name] }}>
                {type.type.name}
              </div>
            )
          })}
        </div>
        <div className="card-info ">
          <div className="card-data card-data--weight">
            <p className="title">Weight</p>
            <p>{pokemon.pokemonInfo.weight}</p>
          </div>
          <div className="card-data card-data--height">
            <p className="title">Height</p>
            <p>{pokemon.pokemonInfo.height}</p>
          </div>
          <div className="card-data card-data--ability">
            <p className="title">Ability</p>
            {pokemon.pokemonInfo.abilities.map((pokeAbility, index) => {
              return (
                
                <p key={index}>{pokeAbility.ability.name}</p>
              )
            })}
          </div>
        </div>
        <p className="title-description">Description</p>
        <div className="description m-3">
          {pokemon.pokemonInfo.pokemonAbilities.effect_entries.map((effectEntry, index) => {
            return (
              <Fragment key={index}>
                {effectEntry.language.name === stateLanguage.value ? <p>{effectEntry.effect}</p> : null}
              </Fragment>
            )
          })}
        </div>

      </div>
    )
  }

}
export default Card;