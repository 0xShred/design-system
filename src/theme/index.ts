import { extendTheme } from '@chakra-ui/react';

// todo: old to remove
// import '../assets/css/fonts.css';

//updated fonts
import '@fontsource/uncial-antiqua/400.css';
import '@fontsource/source-sans-pro/400.css';
import '@fontsource/source-sans-pro/600.css';
import '@fontsource/source-sans-pro/700.css';
import '@fontsource/source-serif-pro/700.css';

import '../assets/css/globals.css';

import { Button } from './components/Button';
import { Card } from './components/Card/Card';
import { colors } from './colors';
import { Heading } from './components/typography/Heading';
import { Text } from './components/typography/Text';
// import { textStyles } from './texts';

const theme = extendTheme({
  styles: {
    global: {
      body: {
        color: 'white',
        bg: 'black',
        minHeight: '100vh',
        minWidth: '100vw',
      },
    },
  },
  colors,
  fonts: {
    // todo: old to remove
    // texturina: `'Texturina', serif`,
    // jetbrains: `'JetBrains Mono', monospace`,
    // rubik: `'Rubik Mono One', sans-serif`,
    // spaceMono: `'Space Mono', monospace;`,

    //updated fonts
    uncialAntiqua: `'Uncial Antiqua', cursive`,
    sourceSansPro: `'Source Sans Pro', sans-serif;`,
    sourceSerifPro: `'Source Serif Pro', serif;`,
  },
  components: {
    Button,
    Card,
    Text,
    Heading,
  },
});

export default theme;
