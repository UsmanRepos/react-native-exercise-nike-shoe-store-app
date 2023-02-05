
import React, { useState } from 'react';
import * as Fonts from 'expo-font';
import AppLoading from 'expo-app-loading';
import Navigator from './navigation';

const getFonts = () => Fonts.loadAsync({
  'CarmenSans-Thin': require('./assets/fonts/CarmenSans-Thin.otf'),
  'CarmenSans-SemiBold': require('./assets/fonts/CarmenSans-SemiBold.otf'),
  'CarmenSans-Regular': require('./assets/fonts/CarmenSans-Regular.otf'),
  'CocoGothic-Bold': require('./assets/fonts/CocoGothic-Bold.ttf'),
  'CocoGothic': require('./assets/fonts/CocoGothic.ttf'),
});

export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  if (fontsLoaded) {
    return (
      <>
        <Navigator />
      </>
    );
  }
  else {
    return (
      <AppLoading
        startAsync={getFonts}
        onFinish={() => setFontsLoaded(true)}
        onError={console.warn}
      />
    );
  }
};


