import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Movie from '../component/Movie';
import './Home.css';
import Loader from '../component/Loader';

function Home() {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);

  const getMovies = async () => {
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
  }, []);

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

export default Home;
