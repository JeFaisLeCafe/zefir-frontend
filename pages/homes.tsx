import type { NextPage } from 'next';
import { useEffect, useState } from 'react';
import { HomeList } from '../components/HomeList';
import { Layout } from '../components/Layout';
import { AnimatedLoader } from '../components/AnimatedLoader';
import { getRandomHomes } from '../business/getRandomHomes';

const Homes: NextPage = () => {
  const [homes, setHomes] = useState<Home[]>([]);
  const [isLoading, setLoading] = useState(true);

  const fetchHomes = async () => {
    setLoading(true)
    console.log('loading')
    const homes = await getRandomHomes();
    console.log('homes', homes)
    setHomes(homes);
    setLoading(false);
  };

  useEffect(() => {
    fetchHomes()
  }, []);

  if (isLoading) return <AnimatedLoader />
  if (!homes) return <p>No home to show, please reload the page!</p>

  return (
    <Layout>
      <HomeList homes={homes} />
    </Layout>
  );
};


export default Homes;
