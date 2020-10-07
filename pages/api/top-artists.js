import { getTopTracks } from '../../lib/spotify';

export default async (_, res) => {
  const response = await getTopTracks();
  const { items } = await response.json();

  const artists = items.slice(0, 10).map((artist) => ({
    artist: artist.artists.map((_artist) => _artist.name).join(', '),
    album: artist.album.name,
    image: artist.album.images[1].url
  }));

  return res.status(200).json(artists);
};
