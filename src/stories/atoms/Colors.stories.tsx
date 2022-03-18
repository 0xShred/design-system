import React from 'react';
import { Box, Flex, Grid, Heading, Text } from '@chakra-ui/react';

import { Story, Meta } from '@storybook/react';

export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: 'Colors',
} as Meta;

const MainColors = [
  { colorName: 'white', colorHex: '#fdfdfd', colorRGB: '253,253,253' },
  { colorName: 'black', colorHex: '#0D0D0D', colorRGB: '13, 13, 13' },
  { colorName: 'pink', colorHex: '#ff3864', colorRGB: '255,56,100' },
  { colorName: 'purple', colorHex: '#b66ad6', colorRGB: '182,106,214' },
  { colorName: 'yellow', colorHex: '#fcfb75', colorRGB: '252,251,117' },
  { colorName: 'orange', colorHex: '#fd5807', colorRGB: '253,88,7' },
  { colorName: 'violet', colorHex: '#bc1da0', colorRGB: '188,29,160' },
  { colorName: 'blue', colorHex: '#4530C7', colorRGB: '69,48`,199' },
  { colorName: 'green', colorHex: '#38ff70', colorRGB: '56,255,112' },
];

const GrayColors = [
  { colorName: 'gray.900', colorHex: '#2b2c34', colorRGB: '43,44,52' },
  { colorName: 'gray.800', colorHex: '#404148', colorRGB: '64,65,72' },
  { colorName: 'gray.700', colorHex: '#55565d', colorRGB: '85,86,93' },
  { colorName: 'gray.600', colorHex: '#6b6b71', colorRGB: '107,107,113' },
  { colorName: 'gray.500', colorHex: '#808085', colorRGB: '128,128,133' },
  { colorName: 'gray.400', colorHex: '#95969a', colorRGB: '149,150,154' },
  { colorName: 'gray.300', colorHex: '#bfc0c2', colorRGB: '191,192,194' },

  { colorName: 'gray.200', colorHex: '#d5d5d6', colorRGB: '213,213,214' },
  { colorName: 'gray.100', colorHex: '#eaeaeb', colorRGB: '234,234,235' },
];

// const Gradients = [
//   { colorOne: 'Orange', colorTwo: 'Violet' },
//   { colorOne: 'Pink', colorTwo: 'Grey.900' },
//   { colorOne: 'Pink', colorTwo: 'Violet', colorThree: 'Blue' },
//   { colorOne: 'Dark', colorTwo: 'Brown', colorThree: 'Purple' },
// ];

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
            bgGradient="linear-gradient(90.76deg, violet -1.58%, orange 99.34%)"
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

      <Heading
        as="h1"
        size="2xl"
        color="Black"
        variant="HeadingApp"
        mb={4}
        mt={12}
      >
        Grays
      </Heading>
      <Grid
        mt={7}
        gap={6}
        templateColumns="repeat( auto-fit, minmax(200px, 1fr) )"
      >
        {GrayColors.map((item, i) => (
          <Flex align="center" key={i}>
            <Box
              borderRadius="md"
              boxSize="3rem"
              boxShadow="inner"
              mr={3}
              bg={item.colorName}
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
    </Box>
  </>
);

export const Colors = Template.bind({});
