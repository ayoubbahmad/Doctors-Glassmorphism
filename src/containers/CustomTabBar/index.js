import { BlurView } from '@react-native-community/blur';
import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export default function CustomTabBar({ state, descriptors, navigation }) {
  const focusedOptions = descriptors[state.routes[state.index].key].options;

  const insets = useSafeAreaInsets();

  if (focusedOptions.tabBarVisible === false) {
    return null;
  }

  // <BlurView
  //         style={{
  //           justifyContent: 'center',
  //           // minHeight: HEIGHT * 0.7,
  //           // maxHeight: HEIGHT * 0.9,
  //           height: HEIGHT * 0.9,
  //         }}
  //         blurType="light"
  //         blurAmount={4}
  //         reducedTransparencyFallbackColor="white"
  //       >

  // 			</BlurView>

  return (
    <LinearGradient
      colors={['#ffffff90', '#ffffff00']}
      start={{ x: 0, y: 1 }}
      end={{ x: 0, y: 0 }}
      locations={[1, 0]}
      style={{
        borderRadius: 16,
        bottom: insets.bottom,
        position: 'absolute',
        marginHorizontal: 24,
        right: 0,
        left: 0,

        borderWidth: 1,
        borderColor: '#fff',
      }}
    >
      <BlurView
        style={{
          flexDirection: 'row',
          paddingVertical: 24,
        }}
        blurType="light"
        blurAmount={10}
        reducedTransparencyFallbackColor="white"
      >
        {state.routes.map((route, index) => {
          const { options } = descriptors[route.key];
          const label =
            options.tabBarLabel !== undefined
              ? options.tabBarLabel
              : options.title !== undefined
              ? options.title
              : route.name;

          const isFocused = state.index === index;

          const onPress = () => {
            const event = navigation.emit({
              type: 'tabPress',
              target: route.key,
              canPreventDefault: true,
            });

            if (!isFocused && !event.defaultPrevented) {
              navigation.navigate(route.name);
            }
          };

          const onLongPress = () => {
            navigation.emit({
              type: 'tabLongPress',
              target: route.key,
            });
          };

          return (
            <TouchableOpacity
              key={label}
              accessibilityRole="button"
              accessibilityState={isFocused ? { selected: true } : {}}
              accessibilityLabel={options.tabBarAccessibilityLabel}
              testID={options.tabBarTestID}
              onPress={onPress}
              onLongPress={onLongPress}
              style={{ flex: 1, alignItems: 'center' }}
            >
              <Text style={{ color: isFocused ? '#673ab7' : '#222' }}>{label}</Text>
            </TouchableOpacity>
          );
        })}
      </BlurView>
    </LinearGradient>
  );
}
