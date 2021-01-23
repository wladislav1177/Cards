import React from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import HomePage from './pages/HomePage';
import CardPage from './pages/CardPage';

// Роутинг страниц
function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact>
          <HomePage />
        </Route>
        <Route path="/?page=n">
          <HomePage />
        </Route>
        <Route path="/card/:id">
          <CardPage />
        </Route>
        <Redirect to="/" />
      </Switch>
    </BrowserRouter>
  );
}

export default App;