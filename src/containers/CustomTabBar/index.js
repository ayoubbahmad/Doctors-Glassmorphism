import { BlurView } from '@react-native-community/blur';
import React from 'react';
import { View, Text, TouchableOpacity, Dimensions } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';

const { width: WIDTH } = Dimensions.get('window');
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
    // LinearGradient
    // <View
    //   // colors={['#ffffff70', '#ffffff10', '#00000000']}
    //   // start={{ x: 0, y: 1 }}
    //   // end={{ x: 0, y: 0 }}
    //   // locations={[1, 0.5, 0]}
    //   style={{
    //     bottom: insets.bottom,
    //     position: 'absolute',
    //     // marginHorizontal: 24,
    //     right: 0,
    //     left: 0,

    //     borderRadius: 24,
    //     borderTopWidth: 1,
    //     borderLeftWidth: 1,
    //     borderRightWidth: 1,
    //     borderColor: '#fff',
    //     overflow: 'hidden',
    //     backgroundColor: '#ffffff',
    //   }}
    // >
    <>
      {/* <View
        style={{
          width: WIDTH,
          // height: WIDTH * 0.1,

          position: 'absolute',
          bottom: 76,
        }}
      >
        <View
          style={{
            width: WIDTH,
            height: WIDTH,
            transform: [{ scaleY: 0.12 }],
            borderRadius: WIDTH,
            backgroundColor: 'white',
            marginBottom: -WIDTH / 2,
          }}
        />
      </View> */}

      {/* BlurView */}
      <BlurView
        style={{
          flexDirection: 'row',
          paddingVertical: 16,
          borderRadius: 28,
          // paddingBottom: insets.bottom,
          // backgroundColor: 'white',
          position: 'absolute',
          bottom: Math.max(insets.bottom + 8, 12),
          marginHorizontal: 12,

          borderColor: 'white',
          borderWidth: 1,

          // shadowColor: '#000000',
          // shadowOffset: { height: 3, width: 3 },
          // shadowOpacity: 1,
          // shadowRadius: 1,
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
              {/* <Text style={{ color: isFocused ? '#673ab7' : '#222' }}>{label}</Text> */}
              {/* <SimpleLineIcons name={options.iconName || 'home'} size={24} color="blue" /> */}
              {icon}
            </TouchableOpacity>
          );
        })}
      </BlurView>
    </>
    // </View>
  );
}
