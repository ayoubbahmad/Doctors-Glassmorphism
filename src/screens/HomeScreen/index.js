import React from 'react';

import { View, Image, Text, StyleSheet } from 'react-native';
import { BlurView } from '@react-native-community/blur';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

const uri = 'https://image.freepik.com/vector-gratis/fondo-abstracto-azul-salud_66029-25.jpg';

export default function HomeScreen() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Image key={'blurryImage'} source={{ uri }} style={styles.absolute} />

      <BlurView
        style={styles.absolute}
        blurType="light"
        blurAmount={10}
        reducedTransparencyFallbackColor="white"
      />
      <View
        style={{
          width: '100%',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Image
          source={require('assets/images/doctors/doctor3.png')}
          // resizeMode="contain"
          style={{ width: '100%', height: '100%' }}
        />
        <BlurView
          blurType="light"
          blurAmount={10}
          reducedTransparencyFallbackColor="white"
          style={{
            position: 'absolute',
            // marginTop: -100,
            padding: 20,
            borderRadius: 30,
            width: 300,
            height: 150,
            borderWidth: 1,
            borderColor: '#fff',
            overflow: 'hidden',
          }}
        >
          <Text style={{ fontWeight: '500', fontSize: 24, color: '#000000C0' }}>Need help?</Text>

          <TouchableOpacity
            style={{
              padding: 8,
              backgroundColor: 'white',
              borderRadius: 4,
              justifyContent: 'center',
              alignItems: 'center',
            }}
            onPress={navigation.toggleDrawer}
          >
            <Text>Toggle Drawer</Text>
          </TouchableOpacity>
        </BlurView>
      </View>
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
