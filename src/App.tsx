import React from 'react';
import {useColorScheme} from 'react-native';
import {ThemeProvider} from 'styled-components/native';
import Themes from '~/theme';
import Home from '~/pages/Home';

const App: React.FC = () => {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <ThemeProvider theme={isDarkMode ? Themes.dark : Themes.light}>
      <Home />
    </ThemeProvider>
  );
};

export default App;
