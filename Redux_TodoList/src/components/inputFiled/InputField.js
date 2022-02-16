import React from 'react';
import {useState, useEffect} from 'react';
import {TextInput, View, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import fieldStyles from './styles';

const InputField = props => {
  const {submitHandler, inputValue, editHandler} = props;

  const [value, setValue] = useState('');

  useEffect(() => {
    setValue(inputValue ?? '');
    return () => {
      null; //
    };
  }, [inputValue]);

  const onChangeText = text => {
    try {
      setValue(text);
    } catch (error) {
      console.log('Error in onChangeText ===>>>', error);
    }
  };

  return (
    <View style={fieldStyles.row}>
      <View>
        <TextInput
          style={fieldStyles.inputFeild}
          placeholder="Add Task..."
          defaultValue={value}
          onChangeText={onChangeText}
          value={value}
        />
      </View>
      <TouchableOpacity
        onPress={() => {
          inputValue
            ? setValue(editHandler(value))
            : setValue(submitHandler(value));
        }}>
        <Icon
          style={fieldStyles.btn}
          name={inputValue ? 'pencil' : 'plus-circle'}
          size={30}
        />
      </TouchableOpacity>
    </View>
  );
};

export default InputField;
