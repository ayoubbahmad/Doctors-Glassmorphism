import { BlurView } from '@react-native-community/blur';
import Header from 'components/Header';
import DoctorsList from 'containers/DoctorsList';
import RecomendedDoctorsList from 'containers/RecomendedDoctorsList';
import React from 'react';
import { Dimensions, StyleSheet, View } from 'react-native';
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import LinearGradient from 'react-native-linear-gradient';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Ionicons from 'react-native-vector-icons/Ionicons';

const { width: WIDTH } = Dimensions.get('window');

// '#62BDC2', '#25305E', '#EDEFF1', '#DAD0C6', '#578DB0'

export default function HomeScreen() {
  const insets = useSafeAreaInsets();
  return (
    <View style={styles.container}>
      <LinearGradient
        colors={['#62BDC2', '#EDEFF1', '#25305E', '#DAD0C6', '#578DB0']}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={styles.absolute}
      />

      <BlurView
        style={styles.absolute}
        blurType="regular"
        blurAmount={10}
        reducedTransparencyFallbackColor="white"
      />

      <Header />

      <View
        style={{
          marginTop: Math.max(insets.top + 72, 72),
          flexDirection: 'row',
          alignItems: 'center',
          width: '100%',
          paddingHorizontal: 12,
        }}
      >
        <View style={{ flexDirection: 'row', alignItems: 'center', flex: 1 }}>
          <TextInput
            style={{
              padding: 12,
              backgroundColor: '#FFF',

              marginVertical: 8,
              borderRadius: 12,
              flex: 1,
              paddingLeft: 36,
            }}
            placeholder="Search"
          />
          <Ionicons
            name="search"
            size={24}
            color="#25305E"
            style={{ position: 'absolute', left: 8 }}
          />
        </View>

        <TouchableOpacity
          style={{
            padding: 8,
            backgroundColor: '#25305E',
            borderRadius: 12,
            justifyContent: 'center',
            alignItems: 'center',
            marginLeft: 12,
          }}
        >
          <Ionicons name="options" size={24} color="#FFF" />
        </TouchableOpacity>
      </View>

      <DoctorsList />

      <BlurView
        blurType="light"
        blurAmount={10}
        reducedTransparencyFallbackColor="white"
        style={{
          borderRadius: 30,
          overflow: 'hidden',
          flexGrow: 1,
          width: WIDTH,
          marginHorizontal: 12,
        }}
      >
        <LinearGradient
          colors={['#ffffff90', '#ffffff00']}
          start={{ x: 0, y: 1 }}
          end={{ x: 1, y: 1 }}
          locations={[1, 0]}
          style={{
            overflow: 'hidden',
            flex: 1,
            padding: 20,
            paddingBottom: 0,
          }}
        >
          <RecomendedDoctorsList />
        </LinearGradient>
      </BlurView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  absolute: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
});
