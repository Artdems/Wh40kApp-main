import React,{ ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { Icon } from 'react-native-paper';
import image from '../../src/assets/images/image';



export const IcArrowDown = () => { 

    return (
        <View  style={{alignItems:"center", justifyContent:"center", marginHorizontal : 10}}>                                         
            <Icon size={24} source={image.IcArrowDownWhite}  />   
        </View>
    );
}

export const IcArrowUp = () => { 

    return (
        <View  style={{ transform: 'rotate(180deg)', alignItems:"center", justifyContent:"center", marginHorizontal : 10 }}>                                         
            <Icon size={24} source={image.IcArrowDownWhite}  />   
        </View>
    );
}