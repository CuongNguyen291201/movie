import axios from 'axios';

const url = `https://api.covid19api.com/summary`;

const getDataCovid = async () => {
  const res = await axios.get(url);
  const result = res.status === 200 ? res.data : {};

  return result;
}

export const api = {
  getDataCovid
}