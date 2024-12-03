import { Dimensions, Platform } from 'react-native';
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';

const { height, width } = Dimensions.get('screen');

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    PrimaryColor: '#FFFFFF',
    DarkGrey : '#464646',
    BlueGrey : '#15648F',
    WhiteGreen : '#21786C',
    BloodRed : '#BF221E'
  },
  size: {
    PageTitleSize: 32,
    TitleSize: 22,
    LargeSize: 20,
    MediumSize: 18,
    NormalSize: 14,
    SmallSize: 12,
    ExtraSmallSize: 10,
    Title1Size: 26,
    Title2Size: 24,
    Title3Size: 22,
    Title4Size: 20,
    Title5Size: 18,
    Title6Size: 16,
  },
};

export default theme;