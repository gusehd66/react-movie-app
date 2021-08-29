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
      <Route exact path="https://gusehd66.github.io/react-movie-app/" component={Home} />
      <Route path="https://gusehd66.github.io/react-movie-app/about" component={About} />
      <Route path="https://gusehd66.github.io/react-movie-app/movie-detail" component={Detail} />
    </BrowserRouter>
  )
}

export default App;
