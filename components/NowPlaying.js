import fetcher from '@/utils/fetcher';
import Link from 'next/link';
import useSWR from 'swr';
import ImageGlitch from './ImageGlitch';

const NowPlaying = () => {
  const { data } = useSWR('/api/now-playing', fetcher);

  if (!data) return 'Loading';

  return (
    <div>
      <ImageGlitch
        alt="Spotify album cover"
        src={data?.image || '/static/images/placeholder.jpg'}
      />
      <div>
        <Link href={data?.songUrl}>
          <a target="_blank">{data && (data?.title || 'Not playing')}</a>
        </Link>
        <p>{data && (data?.artist || 'Spotify')}</p>
      </div>
      {/* <Icon name="spotify" ml="auto" mt={1} /> */}
    </div>
  );
};

export default NowPlaying;
