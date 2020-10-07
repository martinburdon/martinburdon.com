import fetcher from '@/utils/fetcher';
import { formatNumber } from '@/utils/formatting';
import { Grid } from '@chakra-ui/core';
import useSWR from 'swr';
import StatCard from '@/components/StatCard';

const Unsplash = () => {
  const { data } = useSWR('/api/unsplash', fetcher);
  const downloads = formatNumber(data?.downloads);
  const views = formatNumber(data?.views);

  return (
    <Grid templateColumns="repeat(auto-fill,minmax(200px,1fr))" gap={4}>
      <StatCard label="Unsplash Downloads" value={downloads}></StatCard>
      <StatCard label="Unsplash Views" value={views}></StatCard>
    </Grid>
  );
};

export default Unsplash;
