import { useState } from 'react';
import { StyleSheet } from 'react-native';
import { Screen, ScreenStack } from 'react-native-screens';
import type { Dispatch, SetStateAction } from 'react';
import ParentScreen from './ParentScreen';
import ChildScreen from './ChildScreen';

export type ScreensRendererProps = {
  index: number;
  setArray: Dispatch<SetStateAction<number[]>>;
};
const screens = [ParentScreen, ChildScreen];

export const ScreenRenderer = ({ index, setArray }: ScreensRendererProps) => {
  const Component: any = screens[index];
  const [willAppear, setWillAppear] = useState(true);
  const [disappear, setDisappear] = useState(true);

  return (
    <Screen
      key={index}
      activityState={2}
      onWillAppear={() => setWillAppear(c => !c)} // Need to be on both screen to reproduce the issue
      onDisappear={() => setDisappear(c => !c)} // Need to be on both screen to reproduce the issue
      style={StyleSheet.absoluteFill}
    >
      <Component
        setArray={setArray}
        willAppear={willAppear}
        disappear={disappear}
      />
    </Screen>
  );
};

const App = () => {
  // This array represent the screen stack
  // It is either
  // [1] only Parent screen displayed
  // or [1, 2] Parent and Child Screen are in the stack
  const [array, setArray] = useState([1]);

  return (
    <ScreenStack style={{ flex: 1 }}>
      {array.map((r, index) => {
        return <ScreenRenderer key={index} index={index} setArray={setArray} />;
      })}
    </ScreenStack>
  );
};

export default App;