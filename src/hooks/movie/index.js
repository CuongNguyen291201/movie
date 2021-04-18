import { useState } from 'react'

import InputMovie from "./components/input";
import ListMovie from "./components/list";
import { Pagination, Row, Col } from 'antd';
import { searchMovie } from './services/api';

function App() {
  const [loading, setLoading] = useState(false)
  const [movies, setMovies] = useState([])
  const [keyword, setKeyword] = useState('')
  const [totalItems, setTotalItems] = useState(0)
  const [page, setPage] = useState(1)

  const searchMovieByKey = async (nameMovie, p = 1) => {
    if (nameMovie !== '') {
      await setKeyword(nameMovie)
      await setPage(p)
      // call api tim kiem phim
      await setLoading(true)
      const dataMovie = await searchMovie(nameMovie, p)
      if (dataMovie) {
        await setMovies(dataMovie.results)
        await setTotalItems(dataMovie.total_results)
      }
      await setLoading(false)
    }
  }



  console.log(movies)
  
  return(
    <>
      <InputMovie 
        search={searchMovieByKey}
        loading={loading}
      />
      <ListMovie 
        listMovies={movies}
        loading={loading}
      />
      {movies.length !== 0 && 
        <div style={{ textAlign: 'center', margin: '30px'}}>
          <Pagination 
            defaultCurrent={1} 
            total={totalItems} 
            current={page}
            pageSize={20} 
            showSizeChanger={false} 
            onChange={pages => searchMovieByKey(keyword, pages)} />
        </div>
      }
    </>
  )
}
    
export default App