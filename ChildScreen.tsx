import React, { useEffect } from 'react';
import { View } from 'react-native';

/**
 * Display a list of green square
 * and another View with borderBottomEndRadius
 */
const ChildScreen = ({ setArray }) => {
  useEffect(() => {
    // close automatically the view
    // not reproduce if put 500 ms
    setTimeout(() => setArray([1]), 550);
  }, [setArray]);

  const array = new Array(8).fill(null);

  return (
    <>
      {array.map((_, index) => {
        return (
          <View
            key={index}
            style={{
              height: 40,
              overflow: 'hidden', // removing hidden fix the issue
              backgroundColor: 'green',
            }}
          />
        );
      })}
      <View
        style={{
          height: 40,
          width: 60,
          backgroundColor: 'yellow',
          overflow: 'hidden', // removing hidden fix the issue
          borderTopRightRadius: 100,
          borderTopLeftRadius: 100,
          borderBottomEndRadius: 100,
          // borderBottomStartRadius: 100, // If we put the 4 radius, the issue is not reproduced
        }}
      />
    </>
  );
};
export default ChildScreen;