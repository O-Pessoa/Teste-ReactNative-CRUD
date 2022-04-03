import React from 'react';
import {useColorScheme} from 'react-native';
import {Provider} from 'react-redux';
import {ThemeProvider} from 'styled-components/native';
import Themes from '~/theme';
import Routes from './routes';
import store from './services/store';

const App: React.FC = () => {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <Provider store={store}>
      <ThemeProvider theme={isDarkMode ? Themes.dark : Themes.light}>
        <Routes />
      </ThemeProvider>
    </Provider>
  );
};

export default App;
