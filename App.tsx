import React, { useEffect, useState } from 'react';
import { Pressable, StyleSheet, View } from 'react-native';
import { Screen, ScreenStack } from 'react-native-screens';
import type { Dispatch, SetStateAction } from 'react';

export type ScreensRendererProps = {
  index: number;
  setArray: Dispatch<SetStateAction<number[]>>;
};

const App = () => {
  const [childDisplayed, setChildDisplayed] = useState(false);

  // enableFreeze doesn't fix the issue
  // enableFreeze(true);

  // autoclose the view
  useEffect(() => {
    if (childDisplayed) {
      setTimeout(() => {
        setChildDisplayed(false);
      }, 500);
    }
  }, [childDisplayed]);

  return (
    <ScreenStack style={StyleSheet.absoluteFill}>
      <Screen
        key="parent"
        activityState={2}
        style={StyleSheet.absoluteFill} >
        <Pressable
            style={styles.pressable}
            onPress={() => {
              console.log('onPress');
              setChildDisplayed(true);
            }}  />
      </Screen>
      {childDisplayed ? (
        <Screen
          key="child"
          activityState={2}
          style={StyleSheet.absoluteFill}>
            <View style={styles.square}/>
            <View style={styles.rounded}/>
        </Screen>) :
        <></> }
    </ScreenStack>
  );
};

const styles = StyleSheet.create({
  pressable: { width: 100, height: 100, backgroundColor: 'red' },
  square: {
    height: 40,
    overflow: 'hidden', // removing hidden fix the issue
    backgroundColor: 'green',
  },
  rounded: {
    height: 40,
    width: 60,
    backgroundColor: 'yellow',
    overflow: 'hidden', // removing hidden fix the issue
    borderTopRightRadius: 100,
    borderTopLeftRadius: 100,
    borderBottomEndRadius: 100,
    // borderBottomStartRadius: 100, // If we put the 4 radius, the issue is not reproduced
  },
});

export default App;
