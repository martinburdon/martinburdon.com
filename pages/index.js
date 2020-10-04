import useSWR from 'swr';
import fetcher from '@/utils/fetcher';
import { formatNumber } from '@/utils/formatting';

export default function Home() {
  const { data } = useSWR('/api/unsplash', fetcher);
  console.log(data);

  if (!data) return 'Loading';

  const { downloads, views } = data;
  return (
    <div>
      <h2>Downloads: {formatNumber(downloads)}</h2>
      <h2>Views: {formatNumber(views)}</h2>
    </div>
  );
}
