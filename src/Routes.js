import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from './components/Home/Home';
import ListContainer from './components/Container/ListContainer';


const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/pokemons' component={ListContainer} />
      </Switch>
    </BrowserRouter>

  );
}

export default Routes;