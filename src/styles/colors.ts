const WHITE_SMOKE = '#F8F8F8';
/* const BUNKER = '#282D35'; // background */
const BUNKER = '#141419'; // background
const WHISPER = '#EBEBEB'; // title
/* const WHISPER = '#DADADA'; // title */
const GAINSBORO = '#DADADA'; // subtitle
/* const GAINSBORO = '#575767'; // subtitle */
const SNOW = '#FAFAFA';
/* const LICORICE = '#373A47'; // check - background */
const LICORICE = '#292B35'; // check - background
/* const DOLPHIN = '#737387'; */
const COMET = '#575767'; // divider
const BLACK_RUSSIAN = '#0E0E11';
/* const BLACK_RUSSIAN_2 = '#1B1E23'; */
const BLACK_RUSSIAN_80 = 'rgba(14, 14, 17, .8)';
const GHOST = '#B9B9BE';
/* const ROYAL_BLUE = '#2E5CFF'; */
const ROYAL_BLUE = '#1294F2';
/* const DODGER_BLUE = '#3F4EA0'; */
const DODGER_BLUE = '#3F4EA0';
/* const LIGHT_GRAY = '#D0D0D0'; */
const DARK_GRAY = '#AFAFAF';
const BLACK_70 = 'rgba(0, 0, 0, .7)';
const BLACK_50 = 'rgba(0, 0, 0, .5)';
const BLACK_25 = 'rgba(0, 0, 0, .25)';
const BLACK_06 = 'rgba(0, 0, 0, .06)';
const BLACK_05 = 'rgba(0, 0, 0, .03)';
const WHITE_50 = 'rgba(255, 255, 255, .5)';
const WHITE_25 = 'rgba(255, 255, 255, .25)';
const WHITE_10 = 'rgba(255, 255, 255, .1)';
const WHITE_05 = 'rgba(255, 255, 255, .05)';
const CINNABAR = '#DB4437';
const SUNSET_ORANGE = '#EF4A3C';

const common = {
  BACKGROUND_TRANSPARENT: BLACK_70,
  BUTTON_TEXT: WHITE_SMOKE,
};

const light = {
  ...common,
  BACKGROUND: WHITE_SMOKE,
  BACKGROUND_SECONDARY: BLACK_06,
  BACKGROUND_TERTIARY: SNOW,
  TITLE: BLACK_RUSSIAN,
  SUB_TITLE: COMET,
  DIVIDER: BLACK_05,
  STATUS: COMET,
  TEXT: COMET,
  TEXT_SECONDARY: GHOST,
  SHADOW: BLACK_25,
  BORDER: GAINSBORO,
  CHECK: COMET,
  PRIMARY: ROYAL_BLUE,
  DANGER: CINNABAR,
  INPUT_TEXT: BLACK_RUSSIAN_80,
  INPUT_BORDER: BLACK_25,
  PLACEHOLDER: BLACK_50,
};

const dark = {
  ...common,
  BACKGROUND: BUNKER,
  BACKGROUND_SECONDARY: WHITE_10,
  BACKGROUND_TERTIARY: LICORICE,
  TITLE: GAINSBORO,
  SUB_TITLE: COMET,
  DIVIDER: WHITE_05,
  STATUS: WHISPER,
  TEXT: GAINSBORO,
  TEXT_SECONDARY: COMET,
  SHADOW: BLACK_25,
  BORDER: BLACK_RUSSIAN,
  CHECK: DARK_GRAY,
  PRIMARY: DODGER_BLUE,
  DANGER: SUNSET_ORANGE,
  INPUT_TEXT: GAINSBORO,
  INPUT_BORDER: WHITE_25,
  PLACEHOLDER: WHITE_50,
};

/* const dark = {
  ...common,
  BACKGROUND: BUNKER,
  BACKGROUND_SECONDARY: WHITE_10,
  BACKGROUND_TERTIARY: LICORICE,
  TITLE: WHISPER,
  SUB_TITLE: GAINSBORO,
  DIVIDER: COMET,
  TEXT: GAINSBORO,
  TEXT_SECONDARY: DOLPHIN,
  SHADOW: BLACK_25,
  BORDER: BLACK_RUSSIAN_2,
  PRIMARY: DODGER_BLUE,
  DANGER: SUNSET_ORANGE,
  INPUT_TEXT: GAINSBORO,
  INPUT_BORDER: WHITE_25,
  PLACEHOLDER: WHITE_50,
}; */

export const colors = {light, dark};
