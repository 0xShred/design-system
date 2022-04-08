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
import { styles } from './styles';

const theme = extendTheme({
  colors,
  fonts: {
    uncialAntiqua: `'Uncial Antiqua', cursive`,
    sourceSansPro: `'Source Sans Pro', sans-serif;`,
    sourceSerifPro: `'Source Serif Pro', serif;`,
    sourceCodePro: `'Source Code Pro', monospace;`,
  },
  styles,
  components: {
    Button,
    Card,
    Text,
    Heading,
  },
});

export default extendTheme(theme);
