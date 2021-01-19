import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import DrawerRouter from 'routers/DrawerRouter';

const Stack = createStackNavigator();

export default function AppRouter() {
  return (
    <Stack.Navigator initialRouteName="Drawer" headerMode="none">
      <Stack.Screen name="Drawer" component={DrawerRouter} />
    </Stack.Navigator>
  );
}
