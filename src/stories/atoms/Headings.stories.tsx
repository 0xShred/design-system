import React from 'react';
import { Heading, SimpleGrid } from '@chakra-ui/react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: 'Headings',
  component: Heading,
} as ComponentMeta<typeof Heading>;

export const Primary: ComponentStory<typeof Heading> = () => (
  <>
    <SimpleGrid columns={{ base: 1 }} my="2rem" ml={{ lg: '3rem' }}>
      <Heading as="h1" size="4xl" color="black" mb={4}>
        Marketing
      </Heading>
      <Heading as="h1" size="4xl" color="black" mb={4}>
        h1 Heading / 4XL
      </Heading>
      <Heading as="h2" size="3xl" color="black" mb={4}>
        h2 Heading / 3XL
      </Heading>
      <Heading as="h3" size="2xl" color="black" mb={4}>
        h3 Heading / 2XL
      </Heading>
      <Heading as="h4" size="xl" color="black" mb={4}>
        h4 Heading / XL
      </Heading>
      <Heading as="h5" size="lg" color="black" mb={4}>
        h5 Heading / LG
      </Heading>
      <Heading as="h6" size="md" color="black" mb={4}>
        h6 Heading / MD
      </Heading>
      <Heading as="h4" size="sm" color="black" mb={4}>
        h4 ... but Heading / SM
      </Heading>

      <Heading as="h1" size="4xl" color="black" variant="HeadingApp" mb={4}>
        App
      </Heading>
      <Heading as="h1" size="4xl" color="black" variant="HeadingApp" mb={4}>
        h1 Heading / 4XL
      </Heading>
      <Heading as="h2" size="3xl" color="black" variant="HeadingApp" mb={4}>
        h2 Heading / 3XL
      </Heading>
      <Heading as="h3" size="2xl" color="black" variant="HeadingApp" mb={4}>
        h3 Heading / 2XL
      </Heading>
      <Heading as="h4" size="xl" color="black" variant="HeadingApp" mb={4}>
        h4 Heading / XL
      </Heading>
      <Heading as="h5" size="lg" color="black" variant="HeadingApp" mb={4}>
        h5 Heading / LG
      </Heading>
      <Heading as="h6" size="md" color="black" variant="HeadingApp" mb={4}>
        h6 Heading / MD
      </Heading>
      <Heading as="h4" size="sm" color="black" variant="HeadingApp" mb={4}>
        h4 ... but Heading / SM
      </Heading>
    </SimpleGrid>
  </>
);
