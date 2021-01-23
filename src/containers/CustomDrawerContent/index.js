import { DrawerContentScrollView, DrawerItem, DrawerItemList } from '@react-navigation/drawer';
import React from 'react';

import { BlurView } from '@react-native-community/blur';
import { Dimensions, Linking, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import LinearGradient from 'react-native-linear-gradient';

const { height: HEIGHT } = Dimensions.get('window');

export default function CustomDrawerContent(props) {
  const insets = useSafeAreaInsets();
  return (
    // <DrawerContentScrollView style={{ backgroundColor: 'red' }} scrollEnabled={false} {...props}>

    <View
      style={{
        justifyContent: 'center',
        flex: 1,
      }}
    >
      <LinearGradient
        colors={['#ffffff90', '#ffffff00']}
        start={{ x: 0, y: 1 }}
        end={{ x: 1, y: 1 }}
        locations={[1, 0]}
        style={{
          overflow: 'hidden',
          borderTopRightRadius: 16,
          borderBottomRightRadius: 16,
        }}
      >
        <BlurView
          style={{
            justifyContent: 'center',
            // minHeight: HEIGHT * 0.7,
            // maxHeight: HEIGHT * 0.9,
            height: HEIGHT * 0.9,

            borderWidth: 1,
            borderColor: '#fff',
          }}
          blurType="light"
          blurAmount={5}
          reducedTransparencyFallbackColor="white"
        >
          <DrawerItemList {...props} />
          <DrawerItem label="Help" onPress={() => Linking.openURL('https://mywebsite.com/help')} />
        </BlurView>
      </LinearGradient>
    </View>
    // </DrawerContentScrollView>
  );
}
