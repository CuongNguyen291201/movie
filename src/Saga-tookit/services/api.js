import axios from 'axios';

const getUsers = async () => {
  const url = 'https://5f02ddcf9e41230016d43191.mockapi.io/api/v1/users';

  const res = await axios.get(url);
  const result = res.status === 200 ? res.data : {};
  return result;
}

export const api = {
  getUsers
}