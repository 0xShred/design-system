import React from 'react';
import { Text, SimpleGrid } from '@chakra-ui/react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: 'Components/Atoms/Text',
  component: Text,
} as ComponentMeta<typeof Text>;

export const Primary: ComponentStory<typeof Text> = () => (
  <>
    <SimpleGrid columns={{ base: 1 }} my="2rem" ml={{ lg: '3rem' }}>
      <Text as="p" size="5xl">
        text / 5 XL
      </Text>
      <Text as="p" fontWeight={700}>
        text / 5 XL - Bold
      </Text>
    </SimpleGrid>
  </>
);
