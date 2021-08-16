import * as Sentry from '@sentry/react-native';

Sentry.init({
  dsn: 'https://b9684b08a09f4dc3b3f2b7181b95f387@o955878.ingest.sentry.io/5905245',
});

function SentryParam(name, value) {
  this.name = name;
  this.value = value;
}

function Tag(name, value) {
  SentryParam.call(this, name, value);
  if (typeof value !== 'string') {
    this.value = JSON.stringify(value);
  }
}

function Context(name, value) {
  SentryParam.call(this, name, value);
  if (typeof value !== 'object') {
    this.value = {val: this.value};
  }
}

const getScope = (tag, context) => {
  return scope => {
    scope.clear();
    tag && scope.setTag(tag.name, tag.value);
    context && scope.setContext(context.name, context.value);
    return scope;
  };
};

const setSentryError = (error, tag, context) =>
  Sentry.captureException(error, getScope(tag, context));

const setSentryMessage = (message, tag, context) =>
  Sentry.captureMessage(message, getScope(tag, context));

export {setSentryError, setSentryMessage, Tag, Context};
