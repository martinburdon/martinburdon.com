import { Grid } from '@chakra-ui/core';
import NowPlaying from '@/components/NowPlaying';
import Unsplash from '@/components/Unsplash';
import TopTracks from '@/components/TopTracks';
import ImageGlitch from '@/components/ImageGlitch';

export default function Home() {
  return (
    <Grid
      className="wrapper"
      templateColumns="minmax(20px, 1fr) minmax(auto, 600px) minmax(20px, 1fr)"
    >
      <ImageGlitch src="https://i.scdn.co/image/ab67616d00001e028b52c6b9bc4e43d873869699" />
      <Unsplash />
      <TopTracks />
      <NowPlaying />
    </Grid>
  );
}
