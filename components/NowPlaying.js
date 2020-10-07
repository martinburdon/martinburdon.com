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
      borderRadius={16}
      p={4}
      w="300px"
      backgroundColor="#CBFFE9"
    >
      <Image
        alt="Spotify album cover"
        borderRadius={8}
        height="60px"
        src={data?.image || '/static/images/placeholder.jpg'}
        width="60px"
      />
      <Stack
        spacing={0}
        justifyContent="center"
        alignItems="flex-start"
        display="flex"
        flexDirection="column"
        ml={3}
      >
        <Link
          color="#069A99"
          fontWeight="medium"
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
          color="#069A99"
          mb={4}
          maxWidth="170px"
          whiteSpace="nowrap"
          overflow="hidden"
          textOverflow="ellipsis"
          opacity="0.6"
        >
          {data && (data?.artist || 'Spotify')}
        </Text>
      </Stack>
      <Icon name="spotify" ml="auto" mt={1} />
    </Box>
  );
};

export default NowPlaying;
