import {StyleSheet} from 'react-native';
import colors from '../../style/colors';

const baseStyle = StyleSheet.create({
  text: {
    padding: 10,
    fontSize: 20,
  },
});

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  title: {
    ...baseStyle.text,
    paddingRight: 0,
    color: colors.blue,
  },
  info: {
    color: 'white',
    ...baseStyle.text,
  },
});
