import fetcher from '@/utils/fetcher';
import { Box, Icon, Link, Skeleton, Stack, Text } from '@chakra-ui/core';
import useSWR from 'swr';
import ImageGlitch from './ImageGlitch';

const NowPlaying = () => {
  const { data } = useSWR('/api/now-playing', fetcher);

  return (
    <Box
      m={4}
      justifySelf="center"
      display="flex"
      flexDirection="row"
      alignItems="flex-start"
      borderRadius={8}
      p={4}
      w="300px"
      backgroundColor="var(--gray-900)"
    >
      <Skeleton isLoaded={data}>
        <ImageGlitch
          alt="Spotify album cover"
          borderRadius={4}
          height="50px"
          mr={4}
          src={data?.image || '/static/images/placeholder.jpg'}
          width="50px"
        />
      </Skeleton>
      <Stack spacing={0} height="100%" alignSelf="Center">
        <Link
          color="var(--gray-100)"
          maxWidth="170px"
          whiteSpace="nowrap"
          overflow="hidden"
          textOverflow="ellipsis"
          href={data?.songUrl}
          isExternal
        >
          {data && (data?.title || 'Not playing')}
        </Link>
        <Text
          color="var(--gray-500)"
          fontSize="sm"
          maxWidth="170px"
          overflow="hidden"
          textOverflow="ellipsis"
          whiteSpace="nowrap"
        >
          {data && (data?.artist || 'Spotify')}
        </Text>
      </Stack>
      <Icon name="spotify" ml="auto" mt={1} />
    </Box>
  );
};

export default NowPlaying;
