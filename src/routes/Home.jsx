import React, { useEffect, useState } from 'react';
import './Home.css'
import axios from 'axios';
import Loader from '../component/Loader';
import Movie from '../component/Movie';

function Home() {
  if (JSON.parse(sessionStorage.getItem('page') === null)) {
    sessionStorage.setItem('page', 1);
  };
  const sessionPage = JSON.parse(sessionStorage.getItem('page'));
  const [page, setPage] = useState(sessionPage);
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
    sessionStorage.setItem('page', page);
  }

  useEffect(() => {
    getMovies();
  }, [page]);

  const nextPage = () => {
    setPage(page + 1);
  }
  const prePage = () => {
    if (page > 1) {
      setPage(page - 1);
    }
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
          <button id="preBtn" onClick={prePage}>Pre Page</button>
          <button id="nextBtn" onClick={nextPage}>Next Page</button>
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