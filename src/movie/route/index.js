import React, {Suspense, lazy} from 'react';
import { Skeleton } from 'antd';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import { helpers } from '../helpers/common';

const SearchMovie = lazy(() => import('../page/search/index'));
const PopularMovie = lazy(() => import('../page/popular/index'));
const LoginMovie = lazy(() => import('../page/login/index'));
const UpcomingPage = lazy(() => import('../page/upcoming/index'));
const DetailPage = lazy(() => import('../page/detail/index'));

const PrivateRouter = ({children, ...rest}) => {
  const auth = helpers.isAuthenticated();

  return (
    <Route
      {...rest}
      render={({ location }) => auth 
        ? (children)
        : (
          <Redirect 
            to={{
              pathname: "/login",
              state: { from: location }
            }}
          />
        )
      }
    />
  )
}

const LoginedRouter = ({children, ...rest}) => {
  const auth = helpers.isAuthenticated();

  return (
    <Route
      {...rest}
      render={({ location }) => auth  
        ? (
          <Redirect 
            to={{
              pathname: "/",
              state: { from: location }
            }}
          />
        )
        : (children)
      }
    />
  )
}

const RouterMovie = () => {
  return (
    <Router>
      <Suspense fallback={<Skeleton active />}>
        <Switch>
          <PrivateRouter path="/" exact> 
            <SearchMovie />
          </PrivateRouter>

          <PrivateRouter path="/search"> 
            <SearchMovie />
          </PrivateRouter>

          <PrivateRouter path="/popular-movie"> 
            <PopularMovie />
          </PrivateRouter>

          <PrivateRouter path="/up-coming">
            <UpcomingPage />
          </PrivateRouter>

          <PrivateRouter path="/movie-detail/:slug~:id">
            <DetailPage />
          </PrivateRouter>
          
          <LoginedRouter path="/login"> 
            <LoginMovie />
          </LoginedRouter>
        </Switch>
      </Suspense>
    </Router>
  )
}

export default React.memo(RouterMovie)
