import React, {useState} from 'react'
import { Row, Col, DatePicker } from 'antd';
import MasterLayoutMovie from '../../components/MasterLayoutMovie';
import { api } from '../../services/api';
import ListMovie from '../../components/ListMovie';
import { helpers } from '../../helpers/common';
import PaginationMovie from '../../components/PaginationMovie';

const { RangePicker } = DatePicker;

const UpcomingMoviePage = () => {
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [toDate, setToDate] = useState('');
  const [fromDate, setFromDate] = useState('');
  const [comingMovies, setComingMovies] = useState({});
  const [totalItem, setTotalItem] = useState(0);

  const getChooseDate = async (t1, t2, p = 1) => {
    setLoading(true);
    setPage(p);
    let fromdate = t2[0];
    let todate = t2[1];
    let movies = await api.getDataUpcomingMovie(fromdate, todate, page);

    if (movies.hasOwnProperty('results')) {
      setComingMovies(movies.results);
      setTotalItem(movies.total_results);
      setFromDate(fromdate);
      setToDate(todate);
    }
    setLoading(false);
  }

  return (
    <MasterLayoutMovie> 
      <Row>
        <Col span={24}>
          <RangePicker onChange={(d1, d2) => getChooseDate(d1, d2)} />
        </Col>
      </Row>
      {
        !helpers.isEmptyObject(comingMovies) 
        && 
        <ListMovie 
          loading={loading}
          movies={comingMovies}
        />
      }

      {
        !helpers.isEmptyObject(comingMovies) 
        && 
        !loading
        &&
        <PaginationMovie
          current={page}
          total={totalItem}
          toDate={toDate}
          fromDate={fromDate}
          change={getChooseDate}
        />
      }
    </MasterLayoutMovie>
  )
}

export default React.memo(UpcomingMoviePage)
