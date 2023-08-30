import { useState } from 'react';

const useFetching = (callback) => {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('');

  const fetching = async (...args) => {
    try {
      await callback(...args);
    } catch (error) {
      setError('Ошибка получения! ' + error.message);
    } finally {
      setIsLoading(false);
    }
  };

  return [fetching, isLoading, error];
};

export default useFetching;
