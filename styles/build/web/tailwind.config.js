/** @type {import('tailwindcss').Config} */
 module.exports = {
  mode: "jit",
  content: ["./src/**/*.{ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      stone: {
        50: "#fafaf9",
        100: "#f5f5f4",
        200: "#e7e5e4",
        300: "#d6d3d1",
        400: "#a8a29e",
        500: "#78716c",
        600: "#57534e",
        700: "#44403c",
        800: "#292524",
        900: "#1c1917"
      },
      rose: {
        50: "#FFF1F2",
        100: "#FFE4E6",
        200: "#FECDD3",
        300: "#FDA4AF",
        400: "#FB7185",
        500: "#F43F5E",
        600: "#E11D48",
        700: "#BE123C",
        800: "#9F1239",
        900: "#881337"
      },
      base: {
        white: "#fff",
        black: "#000"
      },
      fontSizeMedium: "16px",
      fontSizeSmall: "14px",
      fontSizeLarge: "24px",
      fontSizeXlarge: "40px",
      fontSizeXxlarge: "60px",
      fontSizeHuge: "186px",
      fontWeightRegular: "400",
      fontWeightBold: "700",
      textCaseUpper: "uppercase",
      textCaseNormal: "none",
      leading: {
        01: "24",
        02: "32",
        03: "40",
        04: "72",
        05: "167"
      },
      borderWidth: {
        01: "1px",
        02: "2px"
      },
      borderDefault: {
        color: "#a8a29e",
        width: "1px",
        style: "solid"
      },
      borderSubtle: {
        color: "#d6d3d1",
        width: "1px",
        style: "solid"
      },
      surface: {
        mainBg: "#f5f5f4",
        accentBg: "#E11D48"
      },
      text: {
        mainText: "#1c1917",
        onAccentBg: "#fafaf9"
      },
      border: {
        subtleBorder: "#d6d3d1",
        highContrastBorder: "#a8a29e"
      }
    },
  },
}