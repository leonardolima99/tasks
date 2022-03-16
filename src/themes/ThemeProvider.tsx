import React, {ReactNode} from 'react';
import {useColorScheme} from 'react-native';

import {colors} from '../styles/colors';

type Props = {
  children: ReactNode;
};

export const ThemeContext = React.createContext({});

const ThemeProvider = ({children}: Props) => {
  const isLightTheme = useColorScheme() === 'light' ? true : false; // temporary

  const theme = {
    colors: isLightTheme ? colors.light : colors.dark,
  };

  return (
    <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>
  );
};

export default ThemeProvider;
