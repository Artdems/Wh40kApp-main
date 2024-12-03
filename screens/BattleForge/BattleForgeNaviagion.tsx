import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import BattleForge from './BattleForge';

const Stack = createStackNavigator();

const BattleForgeNavigation = () => {
    return(
        <Stack.Navigator initialRouteName="Battle Forge">
            <Stack.Screen name="Battle Forge" component={BattleForge} options={{headerShown: false}}/>
        </Stack.Navigator>
    );
}

export default BattleForgeNavigation;
