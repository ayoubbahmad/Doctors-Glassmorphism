/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import { NavigationContainer } from '@react-navigation/native';
import App from 'containers/App';
import React from 'react';
import 'react-native-gesture-handler';

const app: () => React$Node = () => {
  return <App />;
};

export default app;
