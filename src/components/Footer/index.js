import { Box, useColorModeValue as mode } from '@chakra-ui/react';
import * as React from 'react';

export const Footer = () => (
  <Box bg={mode('blue.700', 'blue.900')}>
    <Box
      as="footer"
      role="contentinfo"
      mx="auto"
      py="6rem"
      maxW="7xl"
      px={{ base: '4', md: '8' }}
    ></Box>
  </Box>
);
