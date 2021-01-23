import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import CustomTabBar from 'containers/CustomTabBar';
import React from 'react';
import DetailsScreen from 'screens/DetailsScreen';
import HomeScreen from 'screens/HomeScreen';

import Ionicons from 'react-native-vector-icons/Ionicons';
import ChatScreen from 'screens/ChatScreen';
import NotificationsScreen from 'screens/NotificationsScreen';
import MedicalAidScreen from 'screens/MedicalAidScreen';

const Tab = createBottomTabNavigator();

export default function BottomTabRouter() {
  return (
    <Tab.Navigator
      screenOptions
      tabBar={(props) => <CustomTabBar {...props} />}
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = focused ? 'ios-information-circle' : 'ios-information-circle-outline';
          } else if (route.name === 'Settings') {
            iconName = focused ? 'ios-list-box' : 'ios-list';
          }

          // You can return any component that you like here!
          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: 'tomato',
        inactiveTintColor: 'gray',
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          iconName: 'home',
          tabBarIcon: ({ color, size }) => <Ionicons name="home" color={color} size={size} />,
        }}
      />
      <Tab.Screen
        name="Chat"
        component={ChatScreen}
        options={{
          iconName: 'chat',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="chatbubble-ellipses" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Medical Aid"
        component={MedicalAidScreen}
        options={{
          iconName: 'medicalAid',
          tabBarIcon: ({ color, size }) => <Ionicons name="medkit" color={color} size={size} />,
        }}
      />
      <Tab.Screen
        name="notifications"
        component={NotificationsScreen}
        options={{
          iconName: 'notifications',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="notifications" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
