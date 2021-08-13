import {StyleSheet} from 'react-native';
import colors from '../../style/colors';

const baseStyle = StyleSheet.create({
  container: {
    flex: 1,
    borderWidth: 2,
    paddingBottom: 50,
    paddingTop: 50,
    margin: 10,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});

const primary = StyleSheet.create({
  ...baseStyle,
  container: {
    ...baseStyle.container,
    borderColor: 'white',
    backgroundColor: colors.blue,
  },
  text: {
    ...baseStyle.text,
    color: colors.backgroundColor,
  },
});

const error = StyleSheet.create({
  ...baseStyle,
  container: {
    ...baseStyle.container,
    borderColor: 'white',
    backgroundColor: colors.red,
  },
  text: {
    ...baseStyle.text,
    color: 'white',
  },
});

export default {primary, error};
