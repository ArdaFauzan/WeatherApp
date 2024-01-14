import React, { useEffect, useState } from 'react';
import { Image, ImageBackground, Text, TouchableOpacity, View } from 'react-native';
import { deviceHeight, deviceWidth } from './Dimension';
import { KEY_API } from './API';

const Details = (props) => {
    const [data, setData] = useState(null);
    const { name } = props.route.params;

    useEffect(() => {
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${name}&appid=${KEY_API}`)
            .then((res) => res.json())
            .then((res) => {
                console.log('API Response:', res);
                setData(res);
            })
            .catch((err) => console.error(err));
    }, [name]);

    const Data = ({ title, value }) =>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', }}>
            <Text style={{ color: '#7f8c8d', fontSize: 22 }}>{title}</Text>
            <Text style={{ color: 'white', fontSize: 22 }}>{value}</Text>
        </View>

    return (
        <View>
            <ImageBackground
                source={require('../assets/background2.jpg')}
                style={{
                    height: deviceHeight,
                    width: deviceWidth,
                    position: 'absolute',
                }}
                imageStyle={{
                    opacity: 0.6,
                    backgroundColor: '#000000',
                }}
            />

            <View>
                <TouchableOpacity onPress={() => props.navigation.goBack()}>
                    <Image source={require('../assets/back.png')}
                        style={{height: 20, width: 20, marginTop: 30, marginHorizontal: 10}}
                    />
                </TouchableOpacity>

                {data ? (
                    <View style={{
                        flexDirection: 'column',
                        justifyContent: 'space-evenly',
                        alignItems: 'center',
                        height: deviceHeight -80,
                    }}>
                        <View>
                            <Text style={{ color: '#ffffff', fontSize: 70, marginTop: -40, fontWeight: '600' }}>{name}</Text>
                            <Text style={{ fontSize: 22, color: '#ffffff', textAlign: 'center', fontWeight: '400' }}>{data['weather'][0]['main']}</Text>
                        </View>

                        <Text style={{ color: '#ffffff', fontSize: 60, marginTop: -20 }}>{(data['main']['temp'] - 273).toFixed(2)}&deg; C</Text>

                        <View>
                            <Text style={{ fontSize: 22, color: 'white', marginBottom: 16 }}>Weather Details</Text>
                            <View style={{ width: deviceWidth - 60 }}>
                                <Data value={data['wind']['speed']} title={'Wind'} />
                                <Data value={data['main']['pressure']} title={'Pressure'} />
                                <Data value={`${data['main']['humidity']}%`} title={'Humidity'} />
                                <Data value={data['visibility']} title={'Visibility'} />
                            </View>
                        </View>
                    </View>
                ) : null}
            </View>

        </View>
    );
};

export default Details;
