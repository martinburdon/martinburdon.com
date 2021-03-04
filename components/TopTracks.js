import fetcher from '@/utils/fetcher';
import useSWR from 'swr';
import Track from '@/components/Track';
import styled from '@emotion/styled';

const TopTracksContainer = styled.div`
  margin-top: 40px;
`;

const TopTracks = () => {
  const { data } = useSWR('/api/top-tracks', fetcher);

  if (!data) return null;

  const tracks = data.tracks.map((track, index) => (
    <Track key={index} ranking={index + 1} {...track} />
  ));

  return <TopTracksContainer>{tracks}</TopTracksContainer>;
};

export default TopTracks;
