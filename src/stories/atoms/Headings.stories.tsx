import React from 'react';
import { Heading, Text, SimpleGrid } from '@chakra-ui/react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: 'Components/Atoms/Headings',
  component: Heading,
} as ComponentMeta<typeof Heading>;

export const Primary: ComponentStory<typeof Heading> = () => (
  <>
    <SimpleGrid columns={{ base: 1 }} my="2rem" ml={{ lg: '3rem' }}>
      <Heading as="h1" fontSize="9xl" color="black" mb={4}>
        Marketing
      </Heading>
      <Text fontSize="9xl">Text test</Text>
      <Heading as="h1" fontSize="9xl" color="black" mb={4}>
        h1 Heading / 9XL
      </Heading>
      <Heading as="h2" fontSize="8xl" color="black" mb={4}>
        h2 Heading / 8XL
      </Heading>
      <Heading as="h3" fontSize="7xl" color="black" mb={4}>
        h3 Heading / 7XL
      </Heading>
      <Heading as="h4" fontSize="6xl" color="black" mb={4}>
        h4 Heading / 6XL
      </Heading>
      <Heading as="h5" fontSize="5xl" color="black" mb={4}>
        h5 Heading / 5XL
      </Heading>
      <Heading as="h4" fontSize="4xl" color="black" mb={4}>
        h6 Heading / 4XL
      </Heading>
      <Heading as="h4" fontSize="3xl" color="black" mb={4}>
        h4 ... but Heading / 3XL
      </Heading>

      <Heading as="h1" fontSize="9xl" color="black" variant="HeadingApp" mb={4}>
        App
      </Heading>
      <Heading as="h1" fontSize="9xl" color="black" variant="HeadingApp" mb={4}>
        h1 Heading / 9XL
      </Heading>
      <Heading as="h2" fontSize="8xl" color="black" variant="HeadingApp" mb={4}>
        h2 Heading / 8XL
      </Heading>
      <Heading as="h3" fontSize="7xl" color="black" variant="HeadingApp" mb={4}>
        h3 Heading / 7XL
      </Heading>
      <Heading as="h4" fontSize="6xl" color="black" variant="HeadingApp" mb={4}>
        h4 Heading / 6XL
      </Heading>
      <Heading as="h5" fontSize="5xl" color="black" variant="HeadingApp" mb={4}>
        h5 Heading / 5XL
      </Heading>
      <Heading as="h6" fontSize="4xl" color="black" variant="HeadingApp" mb={4}>
        h6 Heading / 4XL
      </Heading>
      <Heading as="h4" fontSize="3xl" color="black" variant="HeadingApp" mb={4}>
        h4 ... but Heading / 3xl
      </Heading>
    </SimpleGrid>
  </>
);
