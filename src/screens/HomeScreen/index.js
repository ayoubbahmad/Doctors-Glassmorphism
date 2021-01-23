import React from 'react';

import { View, Image, Text, StyleSheet, Dimensions } from 'react-native';
import { BlurView } from '@react-native-community/blur';
import { FlatList, TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import LinearGradient from 'react-native-linear-gradient';
import DoctorsList from 'containers/DoctorsList';
import RecomendedDoctorsList from 'containers/RecomendedDoctorsList';

const { width: WIDTH } = Dimensions.get('window');

// '#62BDC2', '#25305E', '#EDEFF1', '#DAD0C6', '#578DB0'

const Header = () => {
  const insets = useSafeAreaInsets();
  const navigation = useNavigation();

  return (
    <View
      style={{
        flexDirection: 'row',
        width: '100%',
        position: 'absolute',
        top: insets.top,
        padding: 16,
        justifyContent: 'space-between',
        alignItems: 'center',
      }}
    >
      <TouchableOpacity
        onPress={navigation.toggleDrawer}
        style={{
          padding: 4,
        }}
      >
        {/* <BlurView
          style={{
            paddingVertical: 4,
            paddingHorizontal: 8,
            borderRadius: 12,
            // borderWidth: 1,
            // borderColor: '#fff',
          }}
          blurType="light"
          blurAmount={10}
          reducedTransparencyFallbackColor="white"
        > */}
        <Ionicons name="reorder-three-outline" size={36} color="#25305E" />
        {/* </BlurView> */}
      </TouchableOpacity>

      <Text style={{ fontWeight: '500', fontSize: 16, color: '#25305E' }}>Home</Text>

      <Image
        source={require('assets/icons/avatarDoctor.png')}
        style={{ borderRadius: 16 }}
        height={40}
        width={40}
      />
    </View>
  );
};

export default function HomeScreen() {
  const navigation = useNavigation();
  const insets = useSafeAreaInsets();
  return (
    <View style={styles.container}>
      {/* <Image
        key={'blurryImage'}
        // source={require('assets/images/background/background2.jpg')}
        source={{ uri: uri6 }}
        style={styles.absolute}
        blurRadius={32}
      /> */}

      <LinearGradient
        colors={['#62BDC2', '#EDEFF1', '#25305E', '#DAD0C6', '#578DB0']}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        // locations={[4, 3, 2, 1, 0]}
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

      {/* <View style={{}}> */}
      <DoctorsList />
      {/* </View> */}

      <BlurView
        blurType="light"
        blurAmount={10}
        reducedTransparencyFallbackColor="white"
        style={{
          borderRadius: 30,
          overflow: 'hidden',
          flexGrow: 1,
          // marginBottom: Math.max(insets.bottom + 80, 80),
          // marginTop: Math.max(insets.top + 72, 72),
          // marginTop: 12,
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
      {/* </View> */}
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
