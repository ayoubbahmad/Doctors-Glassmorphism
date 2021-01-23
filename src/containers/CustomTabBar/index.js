import { BlurView } from '@react-native-community/blur';
import React from 'react';
import { TouchableOpacity } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export default function CustomTabBar({ state, descriptors, navigation }) {
  const focusedOptions = descriptors[state.routes[state.index].key].options;

  const insets = useSafeAreaInsets();

  if (focusedOptions.tabBarVisible === false) {
    return null;
  }

  return (
    <BlurView
      style={{
        flexDirection: 'row',
        paddingVertical: 16,
        borderRadius: 28,
        position: 'absolute',
        bottom: Math.max(insets.bottom + 8, 12),
        marginHorizontal: 12,

        borderColor: 'white',
        borderWidth: 1,
      }}
      blurType="light"
      blurAmount={8}
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

        const icon =
          options.tabBarIcon !== undefined &&
          options.tabBarIcon({
            color: isFocused ? '#25305E' : '#62BDC2',
            size: 24,
          });

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
            {icon}
          </TouchableOpacity>
        );
      })}
    </BlurView>
  );
}
