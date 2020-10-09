import { Flex, Image, Link, Stack, Text } from '@chakra-ui/core';

const Track = ({ artist, image, ranking, songUrl, title }) => {
  return (
    <Flex mb={6}>
      <Text
        alignSelf="center"
        mr={4}
        color="teal.600"
        fontSize="sm"
        backgroundColor="gray.800"
        borderRadius={20}
        h="20px"
        w="20px"
        fontWeight="bold"
        textAlign="center"
      >
        {ranking}
      </Text>
      <Image
        alt={`${artist} - ${title}`}
        borderRadius={4}
        height="40px"
        mr={4}
        src={image}
        width="40px"
      />
      <Stack spacing={0}>
        <Link color="gray.200" href={songUrl} isExternal>
          {artist}
        </Link>
        <Text color="gray.600" fontSize="sm">
          {title}
        </Text>
      </Stack>
    </Flex>
  );
};

export default Track;
