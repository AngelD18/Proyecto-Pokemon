import React from 'react';
import { Link } from 'react-router-dom';
import '../../App.css';

const Home = () => {

    return (
        <div className="App">
            <header className="App-header">
                <img src={process.env.PUBLIC_URL + '/images/poke.png'} width='300' alt='poke' />
                <h1>Poke App</h1>
                <Link className="App-link" to='/pokemons'>Ver pokemons</Link>
            </header>
        </div>
    );


}

export default Home;