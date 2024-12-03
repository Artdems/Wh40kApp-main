import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import Reference from '../../screens/Reference/ReferenceNavigation';
import BattleForge from '../../screens/BattleForge/BattleForgeNaviagion';
import Profil from '../../screens/Profile/ProfileNavigation';

import { Icon } from 'react-native-paper';
import image from '../../src/assets/images/image';

const Tab = createBottomTabNavigator();

const screenOptions = (route : any, color : any) => {
  let iconName;

  switch (route.name) {
    case 'Référence':
      iconName = image.IcReference;
      break;
    case 'Battle Forge':
      iconName = image.IcBattleForge;
      break;
    case 'Profile':
      iconName = image.IcUser;
      break;
    default:
      break;
  }
  return <Icon source={iconName} color={color} size={24} />;

};

const TabNavigator = () => {
  return (
    <>
      <Tab.Navigator screenOptions={({route}) => ({
        tabBarIcon: ({color}) => screenOptions(route, color),
        tabBarStyle: { backgroundColor: '"rgb(70, 70, 70)"' },
        tabBarActiveTintColor: '#FFD032',
        tabBarInactiveTintColor: 'white',
      })}>
        <Tab.Screen name="Référence" component={Reference} options={{ headerShown: false }}/>
        <Tab.Screen name="Battle Forge" component={BattleForge} options={{ headerShown: false }}/>
        <Tab.Screen name="Profile" component={Profil} options={{ headerShown: false }}/>
      </Tab.Navigator>
    </>
  );
};

export default TabNavigator;

