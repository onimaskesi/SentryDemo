import React from 'react';
import {TouchableOpacity, Text} from 'react-native';
import styles from './ButtonStyle';

export default ({onPress, title, styleName = 'primary'}) => {
  const style = styles[styleName];

  return (
    <TouchableOpacity style={style.container} onPress={onPress}>
      <Text style={style.text}>{title.toUpperCase()}</Text>
    </TouchableOpacity>
  );
};
