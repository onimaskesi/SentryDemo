const getRandomNumber = () => Math.floor(Math.random() * 10000);

const getRandomString = () => {
  return Math.random().toString(36).substr(2);
};

const getRandomToken = () => {
  return getRandomString() + getRandomString();
};

const userID = getRandomNumber();
const userName = `onimaskesi${getRandomNumber()}`;
const token = getRandomToken();

export default {userID, userName, token};
