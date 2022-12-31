const defaultTheme = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['-apple-system', 'Inter Tight', ...defaultTheme.fontFamily.sans],
        'mono' : ['IBM Plex Mono', ...defaultTheme.fontFamily.mono]
      },
      colors: {
        "primary": {
          "25": "#FFFBFE",
          "50": "#F6EDFF",
          "100": "#EADDFF",
          "200": "#D0BCFF",
          "300": "#B69DF8",
          "400": "#9A82DB",
          "500": "#7F67BE",
          "600": "#6750A4",
          "700": "#4F378B",
          "800": "#381E72",
          "900": "#21005D",
        },
        "secondary": {
          "50": "#F6EDFF",
          "100": "#E8DEF8",
          "200": "#CCC2DC",
          "300": "#B0A7C0",
          "400": "#958DA5",
          "500": "#7A7289",
          "600": "#625B71",
          "700": "#4A4458",
          "800": "#332D41",
          "900": "#1D192B"
        },
        "tertiary": {
          "50": "#FFECF1",
          "100": "#FFD8E4",
          "200": "#EFB8C8",
          "300": "#D29DAC",
          "400": "#B58392",
          "500": "#986977",
          "600": "#7D5260",
          "700": "#633B48",
          "800": "#492532",
          "900": "#31111D"
        },
        "neutral-material": {
          "25": "#FFFBFE",
          "50": "#F4EFF4",
          "100": "#E6E1E5",
          "200": "#C9C5CA",
          "300": "#AEAAAE",
          "400": "#939094",
          "500": "#787579",
          "600": "#605D62",
          "700": "#484649",
          "800": "#313033",
          "900": "#1C1B1F"
        }
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
