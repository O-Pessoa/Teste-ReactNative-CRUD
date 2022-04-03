import React from 'react';
import {useColorScheme} from 'react-native';
import {ThemeProvider} from 'styled-components/native';
import Themes from '~/theme';
import Routes from './routes';

const App: React.FC = () => {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <ThemeProvider theme={isDarkMode ? Themes.dark : Themes.light}>
      <Routes />
    </ThemeProvider>
  );
};

export default App;
