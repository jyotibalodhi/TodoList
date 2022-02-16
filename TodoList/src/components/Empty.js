import React from 'react';
import {View, ImageBackground, Text, StyleSheet} from 'react-native';
import image from './Empty.png';

export default function Empty() {
  return (
    <View style={ListEmpty.main}>
      <ImageBackground style={ListEmpty.img} source={image}></ImageBackground>
      <Text style={ListEmpty.text}>Todo List Empty ✓</Text>
    </View>
  );
}

const ListEmpty = StyleSheet.create({
  main: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 650,
    marginVertical: '-25%',
  },
  img: {
    width: 350,
    height: 200,
  },
  text: {
    color: '#fff',
    fontFamily: 'poppins-bold',
    fontSize: 30,
    marginBottom: 10,
  },
});
