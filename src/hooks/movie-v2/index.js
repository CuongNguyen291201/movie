import { useState, useEffect } from 'react'
import { Row, Col } from 'antd'

import { popularityMovies } from './services/api'
import ListMovie from './components/list';
import PaginationMovie from './components/pagination';
import SwitchLanguages from './components/switchLanguages';
import UserProvider from './context/UserProvider';
import HeaderMovie from './components/header';

function App() {
  const [loading, setLoading] = useState(false)
  const [movies, setMovies] = useState([])
  const [language, setLanguage] = useState('en-US')
  const [page, setPage] = useState(1)
  const [totalItems, setTotalItems] = useState(0)
  
  // tuong duong componentDidMount - componentDidUpdate
  useEffect(() => {
    const getDataFromApi = async (page) => {
      setLoading(true)
      const dataMovie = await popularityMovies(language, page)
      if (dataMovie) {
        setMovies(dataMovie.results)
        setTotalItems(dataMovie.total_results)
      }
      setLoading(false)
    }
    getDataFromApi(page)
  }, [language, page])
  
  const changeLanguage = (lang = 'en-US') => {
    setLanguage(lang)
  }

  const changePage = (p = 1) => {
    setPage(p)
  }

  return (
    <>
      <Row>
        <Col span={20} offset={2}>

          <UserProvider>
            <HeaderMovie />
          </UserProvider>

          <SwitchLanguages 
            change={changeLanguage}
          />
          <ListMovie 
            movies={movies}
            loading={loading}
          />
          {movies.length !== 0 && !loading && 
            <PaginationMovie 
              totalItems={totalItems}
              currentPage={page}
              change={changePage}
            />
          }
        </Col>
      </Row>
    </>
  )
}

export default App;