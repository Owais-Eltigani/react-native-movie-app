const TMDP_CONFIG = {
  base_url: `https://api.themoviedb.org/3`,
  // api_key: process.env.EXPO_PUBLIC_API_Read_Access_Token,
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: `Bearer ${process.env.EXPO_PUBLIC_API_Read_Access_Token}`, //! change with EXPO_PUBLIC_API_Read_Access_Token
  },
};

// export const fetchMovies = async ({ query }: { query: string }) => {
export const fetchMovies = async (query: string) => {
  console.log('fetch term:', query);
  //
  try {
    const endpoint = query
      ? `${TMDP_CONFIG.base_url}/search/movie?query=${query}`
      : `${TMDP_CONFIG.base_url}/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc`;

    //
    const data = await fetch(
      endpoint,

      {
        method: 'GET',
        headers: TMDP_CONFIG.headers,
      }
    ); //! if any problem happend use {} config instead.
    const result = await data.json();
    return result.results;
  } catch (error) {
    // @ts-expect-error
    console.log(error);
    throw new Error(error.message);
  }
};

export const fetchMovieDetails = async (
  movieId: string
): Promise<MovieDetails> => {
  try {
    const response = await fetch(
      `${TMDP_CONFIG.base_url}/movie/${movieId}?api_key=${process.env.EXPO_PUBLIC_API_Read_Access_Token}`,
      {
        method: 'GET',
        headers: TMDP_CONFIG.headers,
      }
    );

    if (!response.ok) {
      throw new Error(`Failed to fetch movie details: ${response.statusText}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching movie details:', error);
    throw error;
  }
};
