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
      <Text as="p" fontSize="2xl">
        text / 2 XL
      </Text>
      <Text as="p" fontSize="2xl" fontWeight={700}>
        text / 2 XL - Bold
      </Text>

      <Text as="p" fontSize="xl">
        text / XL
      </Text>
      <Text as="p" fontSize="xl" fontWeight={700}>
        text / XL - Bold
      </Text>

      <Text as="p" fontSize="lg">
        text / LG
      </Text>
      <Text as="p" fontSize="lg" fontWeight={700}>
        text / LG - Bold
      </Text>

      <Text as="p">text / Base</Text>
      <Text as="p" fontWeight={700}>
        text / Base - Bold
      </Text>

      <Text as="p" fontFamily="sourceCodePro">
        text / Base - code
      </Text>
      <Text as="p" fontFamily="sourceCodePro" fontWeight={700}>
        text / Base - Bold - code
      </Text>

      <Text as="p" fontSize="sm">
        text / SM
      </Text>
      <Text as="p" fontSize="sm" fontWeight={600}>
        text / SM - Semibold
      </Text>

      <Text as="p" fontSize="sm" fontFamily="sourceCodePro">
        text / SM - code
      </Text>
      <Text as="p" fontSize="sm" fontFamily="sourceCodePro" fontWeight={600}>
        text / SM - Semibold - code
      </Text>

      <Text as="p" fontSize="xs">
        text / XS
      </Text>
      <Text as="p" fontSize="xs" fontWeight={600}>
        text / XS - Semibold
      </Text>
    </SimpleGrid>
  </>
);
