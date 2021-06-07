import axios from 'axios';

const getDataMovieByKeyword = async (keyword) => {
  const url = `https://api.themoviedb.org/3/search/movie?query=${keyword}&api_key=cfe422613b250f702980a3bbf9e90716&page=1`;
  const res = await axios.get(url);
  const result = res.status === 200 ? res.data : {};

  return result;
}

const getDataDetailMovie = async (id) => {
  const url = `https://api.themoviedb.org/3/movie/${id}?api_key=0aecc06bb4fadb06b5f071fef0c2ce6d&&language=en-US&append_to_response=videos,images&include_image_language=en,nul`;

  const res = await axios.get(url);
  const result = res.status === 200 ? res.data : {};

  return result;
}

export const api = {
  getDataMovieByKeyword,
  getDataDetailMovie
}