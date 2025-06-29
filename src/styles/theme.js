const breakpoints = {
  xs: 480,
  sm: 768,
  md: 1024,
  lg: 1280,
  xl: 1440,
};

const toRem = (px) => `${px / 16}rem`;

const theme = {
  COLORS: {
    // Light
    LIGHT_100: "#FFFFFF",
    LIGHT_200: "#FFFAF1",
    LIGHT_300: "#E1E1E6",
    LIGHT_400: "#C4C4CC",
    LIGHT_500: "#7C7C8A",
    LIGHT_600: "#76797B",
    LIGHT_700: "#4D585E",

    // Dark
    DARK_100: "#000405",
    DARK_200: "#00070A",
    DARK_300: "#000204",
    DARK_400: "#000A0F",
    DARK_500: "#000C12",
    DARK_600: "#00111A",
    DARK_700: "#001119",
    DARK_800: "#0D161B",
    DARK_900: "#0D1D25",
    DARK_1000: "#192227",

    // Tomato Tints
    TOMATO_100: "#750310",
    TOMATO_200: "#92000E",
    TOMATO_300: "#AB222E",
    TOMATO_400: "#AB4D55",

    // Carrot Tint
    CARROT_100: "#FBA94C",

    // Mint Tint
    MINT_100: "#04D361",

    // Cake Tints
    CAKE_100: "#065E7C",
    CAKE_200: "#82F3FF",
  },

  MEDIA: {
    xs: `(min-width: ${toRem(breakpoints.xs)})`,
    sm: `(min-width: ${toRem(breakpoints.sm)})`,
    md: `(min-width: ${toRem(breakpoints.md)})`,
    lg: `(min-width: ${toRem(breakpoints.lg)})`,
    xl: `(min-width: ${toRem(breakpoints.xl)})`,
  },
};

export default theme;
