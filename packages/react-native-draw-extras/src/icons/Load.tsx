import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faBook } from '@fortawesome/free-solid-svg-icons';
import { StyleSheet, View } from 'react-native';

const Load = function App() {
  return (
    <View style={styles.screen}>
      <FontAwesomeIcon
        icon={faBook}
        size={30}
        style={{ color: 'blue' }}
      />
    </View>
  );
};

const MemoLoad = React.memo(Load);
export default MemoLoad;
const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
