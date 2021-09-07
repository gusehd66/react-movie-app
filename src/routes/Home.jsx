import React, { useState } from 'react';
import PageContext from '../context/PageContext';
import MainPage from '../component/MainPage'
import './Home.css'

function Home() {
  const [page, setPage] = useState(1);
  const nextPage = () => {
    setPage(page + 1);
  }
  const prePage = () => {
    if (page > 1) {
      setPage(page - 1);
    }

  }

  return (
    <PageContext.Provider value={{ page }}>
      <button id="preBtn" onClick={prePage}>Pre Page</button>
      <button id="nextBtn" onClick={nextPage}>Next Page</button>
      <MainPage />
    </PageContext.Provider>
  )
}

export default Home;