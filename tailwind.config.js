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
      fontSizeSmall: "0.875rem",
      fontSizeMedium: "1rem",
      fontSizeLarge: "1.438rem",
      fontSizeXlarge: "2.563rem",
      fontSizeXxlarge: "3.625rem",
      fontSizeHuge: "10.563rem",
      fontNormal: "400",
      fontBold: "700",
      textCaseUpper: "uppercase",
      textCaseNormal: "none",
      leading: {
        default: 1,
        standard: 1.25,
        reading: 1.5,
        display: 0.84
      },
      borderWidth: {
        01: "1px",
        02: "2px"
      },
      borderDefault: {
        color: "#78716c",
        width: "1px",
        style: "solid"
      },
      borderSubtle: {
        color: "#e7e5e4",
        width: "1px",
        style: "solid"
      },
      displayHero: {
        fontWeight: "800",
        lineHeight: 0.84,
        fontSize: "10.563rem",
        letterSpacing: "-1.6",
        fontFamily: "manrope",
        textCase: "uppercase"
      },
      displayText: {
        fontWeight: "700",
        lineHeight: 1.25,
        fontSize: "3.625rem",
        textCase: "none",
        letterSpacing: "-1.6",
        fontFamily: "manrope"
      },
      trackingNormal: "0",
      trackingTight: "-0.5",
      trackingTighter: "-1.6",
      titleText: {
        fontWeight: "700",
        lineHeight: 1.25,
        fontSize: "2.563rem",
        letterSpacing: "0",
        fontFamily: "manrope",
        textCase: "none",
        paragraphSpacing: "spacing.06"
      },
      subtitleText: {
        fontWeight: "700",
        lineHeight: 1.5,
        fontSize: "1.438rem",
        letterSpacing: "-0.5",
        fontFamily: "manrope",
        textCase: "none"
      },
      bodyText: {
        fontWeight: "400",
        lineHeight: 1.25,
        fontSize: "1rem",
        letterSpacing: "0",
        fontFamily: "manrope",
        textCase: "none"
      },
      bodyLowText: {
        fontWeight: "400",
        lineHeight: 1.25,
        fontSize: "0.875rem",
        letterSpacing: "0",
        fontFamily: "manrope",
        textCase: "none"
      },
      labelText: {
        fontWeight: "700",
        lineHeight: 1,
        fontSize: "0.875rem",
        letterSpacing: "0",
        fontFamily: "manrope",
        textCase: "none"
      },
      sansFamily: "manrope",
      radiusNone: "0",
      radiusSm: "0.125rem",
      rounded: "0.25rem",
      textNoUnderline: "none",
      textUnderline: "underline",
      fontExtrabold: "800",
      spacing: {
        10: "11.391rem",
        11: "17.086rem",
        01: "0.188rem",
        02: "0.313rem",
        03: "0.438rem",
        04: "0.688rem",
        05: "1rem",
        06: "1.5rem",
        07: "2.25rem",
        08: "3.375rem",
        09: "7.594rem"
      },
      spacingHeroButton: "1.125rem",
      small: "0.875rem",
      medium: "1rem",
      large: "1.438rem",
      xlarge: "2.563rem",
      xxlarge: "3.625rem",
      xxxlarge: "5.875rem",
      huge: "10.563rem",
      borderHeroButton: {
        color: "#F43F5E",
        width: "2px",
        style: "solid"
      },
      labelButtonHero: {
        fontFamily: "manrope",
        fontWeight: "400",
        lineHeight: 1,
        fontSize: "1.438rem",
        textCase: "none"
      },
      mediumParagraph: "spacing.06",
      surface: {
        mainBg: "#1c1917",
        accentBg: "#F43F5E"
      },
      text: {
        mainText: "#f5f5f4",
        secondaryText: "#a8a29e",
        onAccentBg: "#1c1917",
        accentText: "#FB7185"
      },
      border: {
        subtleBorder: "#e7e5e4",
        highContrastBorder: "#78716c"
      }
    },
  },
}