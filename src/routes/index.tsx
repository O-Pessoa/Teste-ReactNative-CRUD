import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Home from '~/pages/Home';
import Form from '~/pages/Form';
import {useTheme} from 'styled-components';

export type RootStackParamList = {
  Home: undefined;
  Form?: {uid: string};
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const Routes: React.FC = () => {
  const theme = useTheme();
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerStyle: {backgroundColor: theme.colors.primary},
          headerTintColor: theme.colors.backgroundSecondary,
          headerBackTitleVisible: false,
          headerTitleAlign: 'center',
          title: 'Usuários',
        }}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Form" component={Form} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
