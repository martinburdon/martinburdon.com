import { Grid } from '@chakra-ui/core';
import NowPlaying from '@/components/NowPlaying';
import Unsplash from '@/components/Unsplash';

export default function Home() {
  return (
    <Grid
      className="wrapper"
      templateColumns="minmax(20px, 1fr) minmax(auto, 600px) minmax(20px, 1fr)"
    >
      <Unsplash />
      <NowPlaying />
    </Grid>
  );
}
