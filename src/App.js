import React from 'react';
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom'
import About from './routes/About'
import Home from './routes/Home'
import Navigation from './component/Navigation';
import Detail from './routes/Detail';

function App() {
  return (
    <BrowserRouter>
      <Navigation />
      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/movie-detail" component={Detail} />
    </BrowserRouter>
  )
}

export default App;
