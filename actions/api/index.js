// const TMDP_CONFIG = {
//   base_url: `https://api.themoviedb.org/3`,
//   // api_key: process.env.EXPO_PUBLIC_API_Read_Access_Token,
//   method: 'GET',
//   headers: {
//     accept: 'application/json',
//     Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9eyJhdWQiOiI0NWJjOGZkYzAzODhiNzIyMjg2NDBjYmM2OGFlYWNiNCIsIm5iZiI6MTc0OTMyMDEwMi4zMzYsInN1YiI6IjY4NDQ4MWE2ODcyMWFhNDA0NmZkNTZhNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.U6RoKBYLR7J3TX1Z7Pj1RNn3e6fDIA2RA25A2JofaT4`, //! change with EXPO_PUBLIC_API_Read_Access_Token
//   },
// };

// export const fetchMovies = async query => {
//   try {
//     const endpoint = query
//       ? `${TMDP_CONFIG.base_url}/search/movie?query=${query}`
//       : `${TMDP_CONFIG.base_url}/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc`;

//     //
//     const data = await fetch(
//       'https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc',
//       {
//         TMDP_CONFIG,
//       }
//     ); //! if any problem happend use {} config instead.
//     const result = await data.json();

//     console.log(result);
//     //return result;
//   } catch (error) {
//     // @ts-expect-error
//     console.log(error);
//     // throw new Error(error.message);
//   }
// };

// fetchMovies('');
const url =
  'https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc';
const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization:
      'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0NWJjOGZkYzAzODhiNzIyMjg2NDBjYmM2OGFlYWNiNCIsIm5iZiI6MTc0OTMyMDEwMi4zMzYsInN1YiI6IjY4NDQ4MWE2ODcyMWFhNDA0NmZkNTZhNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.U6RoKBYLR7J3TX1Z7Pj1RNn3e6fDIA2RA25A2JofaT4',
  },
};

fetch(url, options)
  .then(res => res.json())
  .then(json => console.log(json))
  .catch(err => console.error(err));
