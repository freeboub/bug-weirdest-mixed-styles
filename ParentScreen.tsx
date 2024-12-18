import { useEffect, useState } from 'react';
import { Pressable, View } from 'react-native';

const ParentScreen = ({ setArray, disappear, willAppear }) => {
  const [canPlay, setCanPlay] = useState(true);

  useEffect(() => {
    setCanPlay(false);
  }, [disappear]);

  useEffect(() => {
    setCanPlay(true);
  }, [willAppear]);

  return (
    <>
      <Pressable
        style={{ width: 100, height: 100, backgroundColor: 'red' }}
        onPress={() => {
          console.log('onPress');
          setArray([1, 2]); // open the screen
        }}
      />
      {!!canPlay && (
        <>
          <View
            style={[{ height: 100, width: 100 }, { backgroundColor: 'yellow' }]}
          />
          {/*
          Adding the view change the behavior
          <View
            style={[{ height: 100, width: 100 }, { backgroundColor: 'yellow' }]}
          /> */}
        </>
      )}
    </>
  );
};

export default ParentScreen;