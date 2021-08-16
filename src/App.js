import React from 'react';
import {SafeAreaView, StyleSheet, View} from 'react-native';
import * as Sentry from '@sentry/react-native';
import Button from './components/Button';
import colors from './style/colors';
import strings from './strings';
import ObjectInfo from './components/ObjectInfo';

Sentry.init({
  dsn: 'https://b9684b08a09f4dc3b3f2b7181b95f387@o955878.ingest.sentry.io/5905245',
});

const getRandomNumber = () => Math.floor(Math.random() * 10000);

const getRandomString = () => {
  return Math.random().toString(36).substr(2);
};

const getRandomToken = () => {
  return getRandomString() + getRandomString();
};

const App = () => {
  const userID = getRandomNumber();
  const userName = `onimaskesi${getRandomNumber()}`;
  const token = getRandomToken();

  const user = {
    userID,
    userName,
    token,
  };

  const sendUserToSentry = () => {
    Sentry.setContext('user', user);
    Sentry.setTag('tag', 'user');
    Sentry.captureMessage('Whats up Sentry, i have a user for you', {
      contexts: {
        onlyForSend: {token: token},
      },
    });
  };

  const sendErrorToSentry = () => {
    try {
      throw new Error('Error From My Button');
    } catch (error) {
      Sentry.setTag('tag', 'error');
      Sentry.captureException(error);
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
