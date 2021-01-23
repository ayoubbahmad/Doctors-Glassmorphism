import { BlurView } from '@react-native-community/blur';
import React from 'react';
import { Dimensions, Image, Text, View } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import LinearGradient from 'react-native-linear-gradient';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import { data } from './mockData';

const { width: WIDTH } = Dimensions.get('window');

export default function RecomendedDoctorsList() {
  const insets = useSafeAreaInsets();
  return (
    <FlatList
      data={data.sort((a, b) => b.rate - a.rate)}
      keyExtractor={(item) => `${item._id}`}
      showsVerticalScrollIndicator={false}
      ItemSeparatorComponent={() => <View style={{ height: 8 }} />}
      style={{ flexGrow: 0, width: '100%', overflow: 'visible' }}
      contentContainerStyle={{ paddingHorizontal: 12 }}
      ListFooterComponent={<View style={{ height: Math.max(insets.bottom + 80, 80) }} />}
      ListHeaderComponent={
        <Text
          style={{
            fontWeight: '400',
            fontSize: 20,
            color: '#25305E',
            marginBottom: 8,
          }}
        >
          Recomended
        </Text>
      }
      renderItem={({ item }) => {
        return (
          <BlurView
            blurType="light"
            blurAmount={10}
            reducedTransparencyFallbackColor="white"
            style={{
              borderRadius: 12,
              width: '100%',
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
                style={{ height: 100, width: 100, alignSelf: 'flex-start' }}
                resizeMode="contain"
              />
              <View
                style={{
                  width: '100%',
                  bottom: 0,
                  position: 'absolute',
                  height: '100%',
                  alignItems: 'flex-end',
                }}
              >
                <Text
                  style={{
                    fontSize: 16,
                    fontWeight: '600',
                    alignSelf: 'flex-end',
                    paddingHorizontal: 8,
                  }}
                >
                  Dr. {item.name}
                </Text>

                <Text
                  style={{
                    fontSize: 16,
                    fontWeight: '200',
                    alignSelf: 'flex-end',
                    paddingHorizontal: 8,
                  }}
                >
                  {item.speciality}
                </Text>
                <View
                  style={{
                    justifyContent: 'flex-end',
                    flexGrow: 1,
                    alignItems: 'flex-end',
                    paddingBottom: 8,
                  }}
                >
                  <View style={{ alignItems: 'center', flexDirection: 'row' }}>
                    <SimpleLineIcons name="star" size={16} color="#25305E" />
                    <Text
                      style={{
                        color: '#25305E',
                        fontWeight: '600',
                        fontSize: 16,
                        paddingHorizontal: 8,
                      }}
                    >
                      {item.rate}
                    </Text>
                  </View>
                </View>
              </View>
            </LinearGradient>
          </BlurView>
        );
      }}
    />
  );
}
