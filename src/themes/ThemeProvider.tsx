import React, {ReactNode} from 'react';

import {colors} from '../styles/colors';

type Props = {
  children: ReactNode;
};

export const ThemeContext = React.createContext({});

const ThemeProvider = ({children}: Props) => {
  const isLightTheme = true; // temporary

  const theme = {
    colors: isLightTheme ? colors.light : colors.dark,
  };

  return (
    <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>
  );
};

export default ThemeProvider;
