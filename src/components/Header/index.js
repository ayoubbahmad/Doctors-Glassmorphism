import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Image, Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default function Header() {
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
        <Ionicons name="reorder-three-outline" size={36} color="#25305E" />
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
}
