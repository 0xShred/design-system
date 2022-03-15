import React from 'react';
import {
  Box,
  Container,
  Flex,
  Grid,
  Heading,
  HStack,
  IconButton,
  SimpleGrid,
  Text,
  useBreakpointValue,
  useColorModeValue,
} from '@chakra-ui/react';

import { Story, Meta } from '@storybook/react';

export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: 'Colors',
} as Meta;

const MainColors = [
  { colorName: 'White', colorHex: '#fdfdfd', colorRGB: '253,253,253' },
  { colorName: 'Black', colorHex: '#0D0D0D', colorRGB: '13, 13, 13' },
  { colorName: 'Pink', colorHex: '#ff3864', colorRGB: '255,56,100' },
  { colorName: 'Purple', colorHex: '#b66ad6', colorRGB: '182,106,214' },
  { colorName: 'Yellow', colorHex: '#fcfb75', colorRGB: '252,251,117' },
  { colorName: 'Orange', colorHex: '#fd5807', colorRGB: '253,88,7' },
  { colorName: 'Violet', colorHex: '#bc1da0', colorRGB: '188,29,160' },
  { colorName: 'Blue', colorHex: '#4530C7', colorRGB: '69,47,199' },
  { colorName: 'Green', colorHex: '#38ff70', colorRGB: '56,255,112' },
];

const Gradients = [
  { colorOne: 'Orange', colorTwo: 'Violet' },
  { colorOne: 'Pink', colorTwo: 'Grey.900' },
  { colorOne: 'Pink', colorTwo: 'Violet', colorThree: 'Blue' },
  { colorOne: 'Dark', colorTwo: 'Brown', colorThree: 'Purple' },
];

const Template: Story = () => (
  <>
    <Box bg="white" p="7">
      <Heading as="h1" size="2xl" color="Black" variant="HeadingApp" mb={4}>
        Main Colors
      </Heading>
      <Grid
        mt={7}
        gap={6}
        templateColumns="repeat( auto-fit, minmax(200px, 1fr) )"
      >
        {MainColors.map((item, i) => (
          <Flex align="center" key={i}>
            <Box
              borderRadius="md"
              boxSize="3rem"
              boxShadow="inner"
              mr={3}
              bg={item.colorHex}
            />
            <Box fontSize="sm">
              <Box
                color="Black"
                fontWeight="semibold"
                textTransform="capitalize"
              >
                {item.colorName}
              </Box>
              <Box color="Black" textTransform="uppercase">
                {item.colorHex} - {item.colorRGB}
              </Box>
            </Box>
          </Flex>
        ))}
      </Grid>

      <Heading
        as="h1"
        size="2xl"
        color="Black"
        variant="HeadingApp"
        mb={4}
        mt={12}
      >
        Gradients
      </Heading>
      <Grid
        mt={7}
        gap={6}
        templateColumns="repeat( auto-fit, minmax(200px, 1fr) )"
      >
        <Box>
          <Box
            w="100%"
            h="200px"
            bgGradient="linear-gradient(90.76deg, orange -1.58%, violet 99.34%)"
          />
          <Text
            color="Black"
            fontSize="md"
            my={2}
            textTransform="uppercase"
            fontWeight="semibold"
          >
            Orange - Violet
          </Text>
        </Box>

        <Box>
          <Box
            w="100%"
            h="200px"
            bgGradient="linear-gradient(90.52deg, pink 0.45%, gray.900 99.55%)"
          />

          <Text
            color="Black"
            fontSize="md"
            my={2}
            textTransform="uppercase"
            fontWeight="semibold"
          >
            Pink - Gray.900
          </Text>
        </Box>

        <Box>
          <Box
            w="100%"
            h="200px"
            bgGradient="linear-gradient(95.58deg, pink 0%, violet 53.65%, #4353DF 100%)"
          />

          <Text
            color="Black"
            fontSize="md"
            my={2}
            textTransform="uppercase"
            fontWeight="semibold"
          >
            Pink - Violet - Blue?
          </Text>
        </Box>

        <Box>
          <Box
            w="100%"
            h="200px"
            bgGradient="linear-gradient(157.1deg, #2B0000 0%, #39040D 29.17%, #48093A 61.98%, #1F0442 100%)"
          />

          <Text
            color="Black"
            fontSize="md"
            my={2}
            textTransform="uppercase"
            fontWeight="semibold"
          >
            Dark? - Brown? - Purple
          </Text>
        </Box>

        <Box>
          <Box
            w="100%"
            h="200px"
            bgGradient="linear-gradient(124.09deg, #060606 2.76%, #1F0442 98.74%);"
          />

          <Text
            color="Black"
            fontSize="md"
            my={2}
            textTransform="uppercase"
            fontWeight="semibold"
          >
            Dark Blue
          </Text>
        </Box>
      </Grid>
    </Box>
  </>
);

export const Colors = Template.bind({});
