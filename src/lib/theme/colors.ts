export const baseColors = {
  shades: {
    white: "#fff",
    black: "#000",
  },
  neutral: {
    gray50: "#F6F6F6",
    gray100: "#E4E4E4",
    gray200: "#C8C8C8",
    gray300: "#ADADAD",
    gray400: "#919191",
    gray500: "#767676",
    gray600: "#595959",
    black700: "#3B3B3B",
    black800: "#1E1E1E",
    black900: "#0F0F0F",
  },
};

const font = {
  black: baseColors.neutral.black900,
  gray: baseColors.neutral.gray500,
};

const colors = { ...baseColors, font };
export default colors;
