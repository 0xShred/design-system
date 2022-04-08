export const Heading = {
  // Styles for the base style
  baseStyle: {
    fontFamily: 'uncialAntiqua',
    fontWeight: '400',
    letterSpacing: '-1px',
  },

  variants: {
    shadow: {
      textShadow: '0 0 0.125em hsl(0 0% 100% / 0.3), 0 0 0.20em red',
    },
    noShadow: {
      textShadow: 'none',
    },
    HeadingApp: {
      fontFamily: 'sourceSerifPro',
      fontWeight: 700,
    },
  },
  // The default `size` or `variant` values
  defaultProps: {
    // variant: 'shadow',
  },
};
