import React, {useEffect, useState} from 'react';
import {View, Text} from 'react-native';
import styles from './ObjectInfoStyle';

export default ({obj}) => {
  const [objectInfoListState, setObjectInfoListState] = useState([]);

  const initObjectInfoList = () => {
    const objectInfoList = [];

    Object.keys(obj).forEach((key, index) => {
      objectInfoList.push(
        <View style={styles.container} key={index}>
          <Text style={styles.title}>{`${key}:`}</Text>
          <Text style={styles.info}>{obj[key]}</Text>
        </View>,
      );
    });
    setObjectInfoListState(objectInfoList);
  };

  useEffect(() => initObjectInfoList(), []);

  return <>{objectInfoListState}</>;
};
