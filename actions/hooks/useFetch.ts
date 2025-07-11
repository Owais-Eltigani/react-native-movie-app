import { useEffect, useState } from 'react';

export const useFetch = <T>(
  fetchFunction: () => Promise<T>,
  autoFetch = true
) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    try {
      setIsLoading(true);

      setError(null);

      //
      const data = await fetchFunction();
      // @ts-expect-error

      setData(data);
    } catch (error) {
      console.log({ error });
      setError(error);
    } finally {
      setIsLoading(false);
    }
  };
  //? =================
  const reset = () => {
    setData(null);
    setError(null);
    setIsLoading(false);
  };

  useEffect(() => {
    if (autoFetch) {
      fetchData();
    }
  }, []);

  return { movies: data, isLoading, error, fetchData, reset };
};
