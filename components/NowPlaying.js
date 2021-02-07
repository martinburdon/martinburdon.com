import fetcher from '@/utils/fetcher';
import styled from '@emotion/styled';
import Link from 'next/link';
import useSWR from 'swr';
import ImageGlitch from './ImageGlitch';

const NowPlayingStyled = styled.div`
  background: var(--gray-900);
  border-radius: 8px;
  display: flex;
  margin: 15px;
  padding: 15px;
  width: 300px;
`;

const ImageGlitchStyled = styled(ImageGlitch)`
  height: 50px;
  margin-right: 15px;
  width: 50px;
`;

const MetaContainer = styled.div`
  align-self: center;
  display: flex;
  flex-direction: column;
  height: 100%;
`;

const SongLink = styled.a`
  color: var(--gray-100);
  margin: 0;
  max-width: 170px;
  overflow: hidden;
  text-decoration: none;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

const ArtistText = styled.p`
  color: var(--gray-500);
  font-size: 14px;
  margin: 0;
  max-width: 170px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

const NowPlaying = () => {
  const { data } = useSWR('/api/now-playing', fetcher);

  if (!data) return 'Loading';

  return (
    <NowPlayingStyled>
      <ImageGlitchStyled
        alt="Spotify album cover"
        src={data?.image || '/static/images/placeholder.jpg'}
      />
      <MetaContainer>
        <Link href={data?.songUrl} passHref>
          <SongLink target="_blank">
            {data && (data?.title || 'Not playing')}
          </SongLink>
        </Link>
        <ArtistText>{data && (data?.artist || 'Spotify')}</ArtistText>
      </MetaContainer>
      {/* <Icon name="spotify" ml="auto" mt={1} /> */}
    </NowPlayingStyled>
  );
};

export default NowPlaying;
