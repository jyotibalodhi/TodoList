import React from 'react';
import {View, ImageBackground, Text} from 'react-native';
import image from '../../assets/Images/Empty.png';
import ListEmpty from './styles';

const Empty = props => {
  return (
    <View style={ListEmpty.main}>
      <ImageBackground style={ListEmpty.img} source={image}></ImageBackground>
      <Text style={ListEmpty.text}>Todo List Empty ✓</Text>
    </View>
  );
};

export default Empty;
