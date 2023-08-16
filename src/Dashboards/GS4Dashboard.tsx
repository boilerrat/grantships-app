import React from 'react';
import { Box, Text, Flex } from '@chakra-ui/react';

const ComingSoonPage: React.FC = () => {
  return (
    <Flex
      direction="column"
      align="center"
      justify="center"
      minHeight="100vh"
      padding="4"
      textAlign="center"
    >
      <Box
        fontSize="6xl"
        fontWeight="extrabold"
        lineHeight="1.2"
        marginBottom="2"
      >
        Coming Soon
      </Box>
      <Text fontSize="xl" fontWeight="bold">
        This page is under construction. Stay tuned for updates!
      </Text>
    </Flex>
  );
};

export default ComingSoonPage;
