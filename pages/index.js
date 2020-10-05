import useSWR from 'swr';
import fetcher from '@/utils/fetcher';
import { formatNumber } from '@/utils/formatting';
import { SimpleGrid } from '@chakra-ui/core';
import StatCard from '@/components/StatCard';

export default function Home() {
  const { data } = useSWR(['/api/unsplash'], fetcher);

  if (!data) return 'Loading';

  const { downloads, views } = data;
  return (
    <SimpleGrid columns={2} spacing={4}>
      <StatCard
        label="Unsplash Downloads"
        value={formatNumber(downloads)}
      ></StatCard>
      <StatCard label="Unsplash Views" value={formatNumber(views)}></StatCard>
    </SimpleGrid>
  );
}
