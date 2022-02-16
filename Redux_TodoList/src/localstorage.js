import AsyncStorage from '@react-native-async-storage/async-storage';

export const storeData = async (key, value) => {
  try {
    const jsonValue = JSON.stringify(value);
    // console.log(jsonValue, 'Value setData..');

    await AsyncStorage.setItem(key, jsonValue);
  } catch (e) {
    console.log('Error in storeData ====> ', e);
  }
};

export const getData = async key => {
  try {
    const jsonValue = await AsyncStorage.getItem(key);
    // console.log('jsonValue', jsonValue);
    if (jsonValue != null) return JSON.parse(jsonValue);
    return null;

    // return jsonValue != null ? JSON.parse(jsonValue) : null;
  } catch (e) {
    console.log('Error in getData ====> ', e);
  }
};
