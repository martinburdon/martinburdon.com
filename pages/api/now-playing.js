import { getNowPlaying } from '../../lib/spotify';

export default async (_, res) => {
  const response = await getNowPlaying();

  if (response.status === 204 || response.status > 400) {
    return res.status(200).json({ isPlaying: false });
  }

  const song = await response.json();
  // NOTE: currently_playing_type returns `track` for music and `episode` for podcasts
  // TODO: Support for podcasts
  const type = song.currently_playing_type === 'track' ? 'music' : 'podcast';
  const isPlaying = song.is_playing;
  const title = song.item?.name;
  const artist = song.item?.artists.map((_artist) => _artist.name).join(', ');
  const album = song.item?.album.name;
  const image = song.item?.album.images[1].url;
  const songUrl = song.item?.external_urls.spotify;

  return res.status(200).json({
    album,
    image,
    artist,
    isPlaying,
    songUrl,
    title
  });
};
