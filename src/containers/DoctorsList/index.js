import { BlurView } from '@react-native-community/blur';
import React from 'react';
import { View, Text, Dimensions, Image, ImageBackground } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import LinearGradient from 'react-native-linear-gradient';
import Fontisto from 'react-native-vector-icons/Fontisto';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import { data } from './mockData';

const { width: WIDTH } = Dimensions.get('window');

export default function DoctorsList() {
  return (
    <FlatList
      data={data}
      keyExtractor={(item) => `${item._id}`}
      horizontal
      showsHorizontalScrollIndicator={false}
      ItemSeparatorComponent={() => <View style={{ width: 8 }} />}
      style={{ flexGrow: 0, width: '100%', marginVertical: 12 }}
      contentContainerStyle={{ paddingHorizontal: 12 }}
      renderItem={({ item }) => {
        return (
          <BlurView
            blurType="light"
            blurAmount={10}
            reducedTransparencyFallbackColor="white"
            style={{
              borderRadius: 12,
              width: WIDTH * 0.44,
              paddingTop: 8,
            }}
          >
            <LinearGradient
              colors={['#EDEFF120', '#DAD0C620']}
              start={{ x: 0, y: 1 }}
              end={{ x: 1, y: 1 }}
              locations={[1, 0]}
              style={{
                overflow: 'hidden',
                flexGrow: 1,
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <Image
                source={item.image}
                style={{ height: 200, width: '100%' }}
                resizeMode="contain"
              />

              <BlurView
                blurType="light"
                blurAmount={5}
                reducedTransparencyFallbackColor="white"
                style={{
                  width: '100%',
                  bottom: 0,
                  position: 'absolute',
                }}
              >
                <LinearGradient
                  colors={['#FFFFFF', '#FFFFFF00']}
                  start={{ x: 0, y: 0 }}
                  end={{ x: 0, y: 1 }}
                  locations={[0.9, 0]}
                  style={{ padding: 8 }}
                >
                  <Text style={{ fontSize: 16, fontWeight: '600' }}>Dr. {item.name}</Text>
                  <Text style={{ fontSize: 14, fontWeight: '100' }}>{item.speciality}</Text>

                  <View
                    style={{
                      flexDirection: 'row',
                      paddingHorizontal: 8,
                      paddingTop: 4,
                      alignItems: 'center',
                    }}
                  >
                    <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center' }}>
                      <SimpleLineIcons name="star" size={16} color="#25305E" />
                      <Text
                        style={{
                          color: '#25305E',
                          fontWeight: '600',
                          fontSize: 16,
                          paddingHorizontal: 4,
                        }}
                      >
                        {item.rate}
                      </Text>
                    </View>
                    <Fontisto name="phone" size={24} color="#25305E" style={{ padding: 4 }} />
                  </View>
                </LinearGradient>
              </BlurView>
            </LinearGradient>
          </BlurView>
        );
      }}
    />
  );
}
