import { BlurView } from '@react-native-community/blur';
import { DrawerItem, DrawerItemList } from '@react-navigation/drawer';
import React from 'react';
import { Dimensions, Linking, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const { height: HEIGHT } = Dimensions.get('window');

export default function CustomDrawerContent(props) {
  return (
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
            height: HEIGHT * 0.9,
            borderWidth: 1,
            borderColor: '#fff',
          }}
          blurType="light"
          blurAmount={5}
          reducedTransparencyFallbackColor="white"
        >
          <DrawerItemList {...props} />
          <DrawerItem label="Help" onPress={() => Linking.openURL('https://ayoubbahmad.com/')} />
        </BlurView>
      </LinearGradient>
    </View>
  );
}
