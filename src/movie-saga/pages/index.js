import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { searchMovie } from '../actions/index';
import Search from '../components/Search';
import Movie from '../components/Movie';

const AppMovie = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(searchMovie())
  }, [dispatch])

  return (
    <>
      <Search />
      <Movie /> 
    </>
  )
}

export default React.memo(AppMovie)
