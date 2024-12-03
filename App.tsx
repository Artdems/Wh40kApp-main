/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import { SafeAreaView } from 'react-native';

import { ProviderStore } from './src/store/provider.store';
import {  Provider as PaperProvider } from 'react-native-paper';
import { persistor } from "./src/store/store";
import { PersistGate } from "redux-persist/integration/react";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { SafeAreaProvider } from 'react-native-safe-area-context';
import RootNavigator from './navigation/RootNavigator';

function App(): JSX.Element {

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>

      <ProviderStore>
        <PersistGate persistor={persistor}>
          <PaperProvider>
            <SafeAreaProvider>
              <SafeAreaView style={{ backgroundColor:'white',flex: 1 }}>
                <RootNavigator />
              </SafeAreaView>
            </SafeAreaProvider>
          </PaperProvider>
        </PersistGate>
      </ProviderStore>
    </GestureHandlerRootView>
  );
}

export default App;
