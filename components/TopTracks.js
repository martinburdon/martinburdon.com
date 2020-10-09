import fetcher from '@/utils/fetcher';
import useSWR from 'swr';
import Track from '@/components/Track';
import { Stack } from '@chakra-ui/core';

const TopTracks = () => {
  const { data } = useSWR('/api/top-tracks', fetcher);

  if (!data) return null;

  const tracks = data.tracks.map((track, index) => (
    <Track key={index} ranking={index + 1} {...track} />
  ));

  return <Stack mt={8}>{tracks}</Stack>;
};

export default TopTracks;
