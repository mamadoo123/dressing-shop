import React from 'react';
import {Route} from 'react-router-dom';
import './App.css';
import HomePage from './pages/home-page/home-page-component';

const Hats = ()=>(
  <h1>This is hats Page</h1>
);

function App() {
  return (
    <div>
      <Route exact path="/" component={HomePage}/>
      <Route path="/hats" component={Hats}/>
    </div>
  );
}

export default App;
