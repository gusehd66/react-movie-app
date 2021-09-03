import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Movie from '../component/Movie';
import './Home.css';
import Loader from '../component/Loader';

function Home() {
  const [state, setState] = useState({
    isLoading: true,
    movies: []
  })

  const getMovies = async () => {
    const {
      data: {
        data: { movies },
      }
    } = await axios.get('https://yts.mx/api/v2/list_movies.json?sort_by=rating');
    setState({ movies, isLoading: false });
  }
  useEffect(() => {
    getMovies();
  }, []);

  const { isLoading, movies } = state;
  console.log(state);
  return (
    <section className="container">
      {isLoading ? (
        <div className="loader">
          <Loader />
        </div>
      ) : (
        <div className="movies">
          {
            movies.map((movie) => {
              return <Movie
                key={movie.id}
                id={movie.id}
                year={movie.year}
                title={movie.title}
                summary={movie.summary}
                poster={movie.medium_cover_image}
                genres={movie.genres}
                lgPoster={movie.large_cover_image}
                rating={movie.rating}
                runTime={movie.runtime}
              />;
            })
          }
        </div>
      )}
    </section>
  )
}

export default Home;
