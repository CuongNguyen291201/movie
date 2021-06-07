import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { requestServerData } from '../action/index';
import Layout from '../components/Layout';
import Global from '../components/Global';
import Country from '../components/Country';

const AppCorona = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    // dispatch action - middleware saga se nhan duoc
    dispatch(requestServerData());   
  }, [dispatch]);
  
  return (
    <Layout>
      <Global />
      <Country />
    </Layout>
  )
}

export default React.memo(AppCorona)
