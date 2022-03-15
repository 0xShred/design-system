export const Heading = {
  // Styles for the base style
  baseStyle: {
    fontFamily: 'uncialAntiqua',
    fontWeight: '400',
    letterSpacing: '-1px',
  },
  // Styles for the size variations

  sizes: {
    '4xl': {
      fontSize: ['4rem', null, '6.5rem'],
    },
    '3xl': {
      fontSize: ['3.5rem', null, '5rem'],
    },
    '2xl': {
      fontSize: ['2.75rem', null, '4rem'],
    },
    xl: {
      fontSize: ['2rem', null, '3rem'],
    },
    lg: {
      fontSize: ['1.625rem', null, '2.25rem'],
    },
    md: {
      fontSize: ['1.375rem', null, '1.75rem'],
    },
    sm: {
      fontSize: ['1rem', null, '1.25rem'],
    },
  },
  // Styles for the visual style variations

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
    // headingOne: {
    //   fontFamily: 'uncial',
    //   letterSpacing: '1.2px',
    //   color: 'white',
    // },
    // headingTwo: {
    //   fontFamily: 'uncial',
    //   letterSpacing: '1.2px',
    //   textShadow: '0 0 0.125em hsl(0 0% 100% / 0.3), 0 0 0.20em red',
    //   color: 'white',
    // },
    // headingThree: {
    //   fontFamily: 'uncial',
    //   letterSpacing: '1.2px',
    //   color: 'red',
    // },
    // labels: {
    //   fontFamily: 'texturina',
    //   letterSpacing: '2px',
    //   color: 'white',
    // },
  },
  // The default `size` or `variant` values
  defaultProps: {
    // variant: 'shadow',
  },
};
