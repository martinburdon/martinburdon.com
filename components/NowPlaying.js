import fetcher from '@/utils/fetcher';
import styled from '@emotion/styled';
import Link from 'next/link';
import useSWR from 'swr';
import ImageGlitch from './ImageGlitch';

const NowPlayingStyled = styled.div`
  background: var(--gray-900);
  border-radius: 8px;
  display: flex;
  margin: 40px 0 0;
  padding: 15px;
  width: 300px;
`;

const Thumb = styled.img`
  height: 50px;
  margin-right: 15px;
  width: 50px;
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

const SongLabel = styled.p`
  color: var(--gray-100);
  font-size: 14px;
  line-height: 1.2;
  max-width: 170px;
  overflow: hidden;
  text-decoration: none;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

const ArtistLabel = styled.p`
  color: var(--gray-500);
  font-size: 14px;
  line-height: 1.2;
  margin: 4px 0 0;
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
      {data.isPlaying ? (
        <ImageGlitchStyled
          alt="Spotify album cover"
          src={
            (data.isPlaying && data.image) || '/static/images/placeholder.jpg'
          }
        />
      ) : (
        <Thumb src="/static/images/placeholder.jpg" />
      )}
      <MetaContainer>
        {data.isPlaying ? (
          <Link href={data.songUrl} passHref>
            <SongLabel as="a" target="_blank">
              {data.title}
            </SongLabel>
          </Link>
        ) : (
          <SongLabel>Not playing</SongLabel>
        )}
        <ArtistLabel>
          {(data.isPlaying && data.artist) || 'Spotify'}
        </ArtistLabel>
      </MetaContainer>
      {/* <Icon name="spotify" ml="auto" mt={1} /> */}
    </NowPlayingStyled>
  );
};

export default NowPlaying;
