
import {
  blueGrey900, cyan700, grey600, pinkA400, pinkA100, fullWhite,
  grey100, grey300, grey400, grey500,
  pinkA200,
  white, darkBlack, fullBlack,
} from 'material-ui/styles/colors';
import {fade} from 'material-ui/utils/colorManipulator';

// const lightBaseTheme = {
//   spacing: {
//     iconSize: 24,
//     desktopGutter: 24,
//     desktopGutterMore: 32,
//     desktopGutterLess: 16,
//     desktopGutterMini: 8,
//     desktopKeylineIncrement: 64,
//     desktopDropDownMenuItemHeight: 32,
//     desktopDropDownMenuFontSize: 15,
//     desktopDrawerMenuItemHeight: 48,
//     desktopSubheaderHeight: 48,
//     desktopToolbarHeight: 56,
//   },
//   fontFamily: 'Roboto, sans-serif',
//   palette: {
//     primary1Color: cyan500,
//     primary2Color: cyan700,
//     primary3Color: grey400,
//     accent1Color: pinkA200,
//     accent2Color: grey100,
//     accent3Color: grey500,
//     textColor: darkBlack,
//     alternateTextColor: white,
//     canvasColor: white,
//     borderColor: grey300,
//     disabledColor: fade(darkBlack, 0.3),
//     pickerHeaderColor: cyan500,
//     clockCircleColor: fade(darkBlack, 0.07),
//     shadowColor: fullBlack,
//   },
// };


 const Style = {
  spacing: {
    desktopToolbarHeight: 60,
  },
  fontFamily: 'Roboto, sans-serif',
  palette: {
    primary1Color: '#272127',
    primary2Color: cyan700,
    primary3Color: grey600,
    accent1Color: '#e5e5e5',
    accent2Color: '#272127',
    accent3Color: '#272127',
    textColor: fullWhite,
    alternateTextColor: '#fff',
    canvasColor: '#1b141c',
    borderColor: fade(fullWhite, 0.3),
    disabledColor: fade(fullWhite, 0.3),
    pickerHeaderColor: fade(fullWhite, 0.12),
    clockCircleColor: fade(fullWhite, 0.12)
  }
}


export default Style