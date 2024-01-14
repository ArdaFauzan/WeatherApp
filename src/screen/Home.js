import React, { useState } from 'react'
import { FlatList, Image, ImageBackground, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { deviceHeight, deviceWidth } from './Dimension'
import Card from './Card';


const Home = (props) => {
  const [city, setCity] = useState('');
  const cities = [
    {
      name: 'Jakarta',
      image: require('../assets/jakarta.jpg')
    },
    {
      name: 'Bogor',
      image: require('../assets/bogor.jpeg')
    },
    {
      name: 'Depok',
      image: require('../assets/depok.jpg')
    },
    {
      name: 'Tangerang',
      image: require('../assets/tangerang.jpg')
    },
    {
      name: 'Bekasi',
      image: require('../assets/bekasi.jpg')
    },

  ]
  return (
    <View>
      <ImageBackground
        source={require('../assets/background.jpg')}
        style={{
          height: deviceHeight,
          width: deviceWidth
        }}
        imageStyle={{
          opacity: 0.6,
          backgroundColor: '#000000'
        }}
      />

      <View style={{ position: 'absolute' }}>
        <View style={{
          marginVertical: 20,
          marginHorizontal: 10,
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          width: deviceWidth - 20,
        }}>
          <Image
            source={require('../assets/menu.png')}
            style={{
              height: 46,
              width: 46
            }} />
          <Image
            source={require('../assets/foto.jpg')}
            style={{
              height: 50,
              width: 50,
              borderRadius: 25
            }} />
        </View>

        <View style={{
          paddingHorizontal: 20,
          marginTop: 100,
        }}>
          <Text style={{
            color: 'white',
            fontSize: 40,
            fontWeight: 'bold',
          }}>HELLO A.F</Text>
          <Text style={{
            fontSize: 17,
            color: 'white',
          }}>Search The City By The Name</Text>

          <View style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            borderRadius: 50,
            borderWidth: 2,
            borderColor: 'white',
            marginTop: 16,
            paddingHorizontal: 10,
          }}>
            <TextInput
              value={city}
              onChangeText={val => setCity(val)}
              placeholder='Search City'
              placeholderTextColor='white'
              style={{
                paddingHorizontal: 10,
                color: 'white',
                fontSize: 15,
              }} />
            <TouchableOpacity onPress={() => props.navigation.navigate('Details', { name: city })}>
              <Image
                source={require('../assets/search.png')}
                style={{ width: 22, height: 22, }}
              />
            </TouchableOpacity>
          </View>
        </View>

        <View style={{ position: 'relative' }}>
          <Text style={{
            color: 'white',
            fontSize: 22,
            paddingHorizontal: 10,
            marginTop: 10,
            marginTop: 190,
            marginBottom: 10
          }}>My Locations</Text>
          <FlatList
            horizontal
            data={cities}
            renderItem={({ item }) => (
              <Card name={item.name} image={item.image} navigation={props.navigation} />
            )}
          />
        </View>

      </View>
    </View>
  )
}

export default Home;
