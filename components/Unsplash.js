import fetcher from '@/utils/fetcher';
import { formatNumber } from '@/utils/formatting';
import useSWR from 'swr';
import StatCard from '@/components/StatCard';

const Unsplash = () => {
  const { data } = useSWR('/api/unsplash', fetcher);
  const downloads = formatNumber(data?.downloads);
  const views = formatNumber(data?.views);

  return (
    <div>
      <StatCard label="Unsplash Downloads" value={downloads}></StatCard>
      <StatCard label="Unsplash Views" value={views}></StatCard>
    </div>
  );
};

export default Unsplash;
