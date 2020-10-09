import fetcher from '@/utils/fetcher';
import { Box, Icon, Image, Link, Skeleton, Stack, Text } from '@chakra-ui/core';
import useSWR from 'swr';

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
      backgroundColor="gray.800"
    >
      <Skeleton isLoaded={data}>
        <Image
          alt="Spotify album cover"
          borderRadius={4}
          height="50px"
          mr={4}
          src={data?.image || '/static/images/placeholder.jpg'}
          width="50px"
        />
      </Skeleton>
      <Stack spacing={0} height="100%">
        <Link
          color="gray.100"
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
          color="gray.500"
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
