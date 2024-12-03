import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Faction from './Faction';
import Codex from './Codex';
import ArmyRules from './RegleArmee';
import Detachement from './Detachement';
import Enhancements from './Amelioration';
import Stratagemes from './Stratagemes';
import Datasheets from './Datasheets';
import Datasheet from './Datasheet';
import GeneralRule from './RegleCommune';
import CrusadeRules from './CrusadeRules';
import Agendas from './Agendas';
import Requisitions from './Requisitions';
import SubRules from './SubRule';
import BattleTraits from './BattleTraits';

const Stack = createStackNavigator();

const BattleForgeNavigation = () => {
    return(
        <Stack.Navigator initialRouteName="Référence">
          <Stack.Screen name="Références" component={Faction} options={{ headerShown: false }}/>
          <Stack.Screen name="Codex" component={Codex} options={{ headerShown: false }}/>
          <Stack.Screen name="Règle d'Armée" component={ArmyRules} options={{ headerShown: false }}/>
          <Stack.Screen name="Detachement" component={Detachement} options={{ headerShown: false }}/>
          <Stack.Screen name="Amélioration" component={Enhancements} options={{ headerShown: false }}/>
          <Stack.Screen name="Stratagèmes" component={Stratagemes} options={{ headerShown: false }}/>
          <Stack.Screen name="Datasheets" component={Datasheets} options={{ headerShown: false }}/>
          <Stack.Screen name="Datasheet" component={Datasheet} options={{ headerShown: false }}/>
          <Stack.Screen name="Règle Commune" component={GeneralRule} options={{ headerShown: false }}/>
          <Stack.Screen name="Règle de Croisade" component={CrusadeRules} options={{ headerShown: false }}/>
          <Stack.Screen name="Agendas" component={Agendas} options={{ headerShown: false }}/>          
          <Stack.Screen name="Requisitions" component={Requisitions} options={{ headerShown: false }}/>          
          <Stack.Screen name="SubRules" component={SubRules} options={{ headerShown: false }}/>          
          <Stack.Screen name="BattleTraits" component={BattleTraits} options={{ headerShown: false }}/>
        </Stack.Navigator>
    );
}

export default BattleForgeNavigation;
