import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import CustomTabBar from 'containers/CustomTabBar';
import React from 'react';
import DetailsScreen from 'screens/DetailsScreen';
import HomeScreen from 'screens/HomeScreen';

const Tab = createBottomTabNavigator();

export default function BottomTabRouter() {
  return (
    <Tab.Navigator tabBar={(props) => <CustomTabBar {...props} />}>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Settings" component={DetailsScreen} />
      <Tab.Screen name="test" component={DetailsScreen} />
    </Tab.Navigator>
  );
}
