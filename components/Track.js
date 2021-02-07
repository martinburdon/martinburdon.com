import Link from 'next/link';

const Track = ({ artist, image, ranking, songUrl, title }) => {
  return (
    <div>
      <p>{ranking}</p>
      <img
        alt={`${artist} - ${title}`}
        height="40px"
        src={image}
        width="40px"
      />
      <div>
        <Link href={songUrl}>
          <a target="_blank">{artist}</a>
        </Link>
        <p>{title}</p>
      </div>
    </div>
  );
};

export default Track;
