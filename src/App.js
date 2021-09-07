import React from 'react';
import './App.css';
import { HashRouter, Route } from 'react-router-dom'
import About from './routes/About'
import Navigation from './component/Navigation';
import Detail from './routes/Detail';
import Home from './routes/Home';

function App() {
  return (

    <HashRouter basename={"./static"}>
      <Navigation />
      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/movie-detail" component={Detail} />
    </HashRouter>
  )
}

export default App;
