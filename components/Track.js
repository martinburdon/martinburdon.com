import Link from 'next/link';
import styled from '@emotion/styled';

const TrackItem = styled.div`
  align-items: center;
  border-top: 1px solid var(--gray-700);
  display: flex;
  overflow: hidden;
  padding: 20px 0;
  position: relative;

  &:first-child {
    margin-top: 0;
  }

  img {
    transition: transform ease 0.2s;
  }

  &:hover {
    img {
      transform: scale(1.1) rotate(3deg);
    }
  }
`;

const Thumb = styled.img`
  height: 60px;
  margin-right: 20px;
  width: 60px;
`;

const TrackInfoContainer = styled.div`
  z-index: 1;
`;

const SongLabel = styled.a`
  color: var(--gray-100);
  font-size: 16px;
  font-weight: 700;
  line-height: 1.2;
  text-decoration: none;
`;

const ArtistLabel = styled.p`
  color: var(--gray-500);
  font-size: 14px;
  line-height: 1.2;
  margin: 4px 0 0;
`;

const Ranking = styled.p`
  color: var(--gray-800);
  font-size: 200px;
  font-weight: 700;
  opacity: 0.5;
  position: absolute;
  right: 0;
  transform: rotate(25deg) translateY(10px);
`;

const Track = ({ artist, image, ranking, songUrl, title }) => {
  return (
    <TrackItem>
      <Ranking>{ranking}</Ranking>
      <Thumb
        alt={`${artist} - ${title}`}
        height="60px"
        src={image}
        width="60px"
      />
      <TrackInfoContainer>
        <Link href={songUrl} passHref>
          <SongLabel target="_blank">{title}</SongLabel>
        </Link>
        <ArtistLabel>{artist}</ArtistLabel>
      </TrackInfoContainer>
    </TrackItem>
  );
};

export default Track;
