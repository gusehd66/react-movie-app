import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import Movie from './Movie';
import './MainPage.css';
import Loader from './Loader';
import PageContext from '../context/PageContext';

function MainPage() {
  const { page } = useContext(PageContext);
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);

  const getMovies = async () => {
    setLoading(true);
    const {
      data: {
        data: { movies },
      }
    } =
      await axios.get(`https://yts.mx/api/v2/list_movies.json?limit=20&sort_by=download_count&page=${page}`);
    setMovies(movies);
    setLoading(false);
  }

  useEffect(() => {
    getMovies();
  }, [page]);


  return (
    <section className="container">
      {loading ? (
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

export default MainPage;
