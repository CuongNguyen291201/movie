import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Skeleton } from 'antd';

const DetailMovie = lazy(() => import('../pages/detailMovie'));
const SearchMovie = lazy(() => import('../pages/index'));

const RouteApp = () => {
  return (
    <>
      <Router>
        <Suspense fallback={<Skeleton active/>}>
          <Switch>
            <Route path="/" exact>
              <SearchMovie />
            </Route>
            <Route path="/detail-movie/:slug~:id">
              <DetailMovie />
            </Route>
          </Switch>
        </Suspense> 
      </Router> 
    </>
  )
}

export default RouteApp
