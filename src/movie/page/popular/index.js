import React from 'react'
import MasterLayoutMovie from '../../components/MasterLayoutMovie';

const PopularMoviePage = () => {
  return (
    <MasterLayoutMovie>
      <h1>this is popular pages</h1>    
    </MasterLayoutMovie>
  )
}

export default React.memo(PopularMoviePage)
