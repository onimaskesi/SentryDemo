import React from 'react';
import {SafeAreaView, StyleSheet, View} from 'react-native';
import Button from './components/Button';
import colors from './style/colors';
import strings from './strings';
import ObjectInfo from './components/ObjectInfo';
import getRandomUser from './utils/getRandomUser';
import {
  setSentryError,
  setSentryMessage,
  Tag,
  Context,
} from './services/Sentry';

const App = () => {
  const user = getRandomUser;

  const sendUserToSentry = () => {
    const message = 'User Values';

    const tag = new Tag('tag', 'userInfo');
    const context = new Context('user info', user);

    setSentryMessage(message, tag, context);
  };

  const sendErrorToSentry = () => {
    try {
      throw new Error('Error From The Button');
    } catch (error) {
      const tag = new Tag('tag', 'error from the button');
      setSentryError(error, tag, null);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.infoContainer}>
        <ObjectInfo obj={user} />
      </View>
      <View style={styles.buttonContainer}>
        <Button title={strings.sendButtonText} onPress={sendUserToSentry} />
        <Button
          title={strings.errorButtonText}
          onPress={sendErrorToSentry}
          styleName="error"
        />
      </View>
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.backgroundColor,
  },
  infoContainer: {
    flex: 1,
    justifyContent: 'center',
    alignSelf: 'center',
  },
  buttonContainer: {
    flex: 1,
    justifyContent: 'center',
  },
});
