import { useState, useEffect } from 'react';
import { fetchDigimons } from '../api/digiApi';
import { DigiItem } from '../types/DigiTypes';

export const useDigiData = (offset: number, limit: number) => {
  const [data, setData] = useState<DigiItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [hasMore, setHasMore] = useState(true);

  useEffect(() => {
    const loadDigimons = async () => {
      const result = await fetchDigimons(offset, limit);
      setData((prevData) => [...prevData, ...result]);
      setLoading(false);
      setHasMore(result.length === limit);
    };

    loadDigimons();
  }, [offset, limit]);

  return { data, loading, hasMore };
};