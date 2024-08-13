import React, { useState, useEffect } from 'react';
import List from '../components/List/List';
import Loader from '../components/Loader/Loader';
import { fetchDigimons } from '../api/digiApi';
import { DigiItem } from '../types/DigiTypes';
import './Home.css';
import Nav from '../components/Nav/Nav';

const Home: React.FC = () => {
  const [digimons, setDigimons] = useState<DigiItem[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [page, setPage] = useState<number>(1);
  const [hasMore, setHasMore] = useState<boolean>(true);

  useEffect(() => {
    const fetchMoreDigimons = async () => {
      setLoading(true);
      try {
        const newDigimons: DigiItem[] = await fetchDigimons(page, 20);
        setDigimons(prev => {
          const existingIds = new Set(prev.map(digimon => digimon.id));
          const uniqueNewDigimons = newDigimons.filter(digimon => !existingIds.has(digimon.id));
          return [...prev, ...uniqueNewDigimons];
        });
        setHasMore(newDigimons.length === 20);
      } catch (error) {
        console.error("Erro ao buscar digimons:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchMoreDigimons();
  }, [page]);

  const handleScroll = () => {
    if (
      window.innerHeight + document.documentElement.scrollTop !== document.documentElement.offsetHeight ||
      loading
    ) return;
    
    setPage(prevPage => prevPage + 1);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
    //disable useEffect lint bug, tracking the var state and saying that it is not used
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loading]);

  return (
    <div>
      <Nav />
      <div style={{ marginTop: '60px' }}>
      <List digimons={digimons} />
      {loading && <Loader />}
      {!hasMore && <p>Não há mais Digimons para carregar.</p>}
      </div>
    </div>
  );
};

export default Home;