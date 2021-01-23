import { BlurView } from '@react-native-community/blur';
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

export default function MedicalAidScreen() {
  return (
    <View style={styles.container}>
      <LinearGradient
        colors={['#25305E', '#DAD0C6', '#62BDC2', '#578DB0', '#EDEFF1']}
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
      <Text style={styles.screenName}>Medical Aid Screen</Text>
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
  screenName: {
    fontWeight: '200',
    fontSize: 24,
  },
});
