import React,{ ScrollView, Text, TouchableOpacity, View } from 'react-native';
import labelStyle from '../style/LabelStyle';
import buttonStyle from '../style/ButtonStyle';
import { useState } from 'react';
import { IcArrowDown, IcArrowUp } from './Arrow';

const DiceRule = (props : any) => {

    const {items, visible} = props;

    const [isVisible, setIsVisible] = useState(visible);

    return (
        <View>
            {isVisible ? (
                <View>
                    <TouchableOpacity style={buttonStyle.OpenMenuTop} onPress={() => {
                        setIsVisible(!isVisible);
                    }}>                                        
                        <IcArrowUp/>
                        <Text style={labelStyle.LabelBoldMediumWhite}>{items.Name}</Text>
                        <View style={{flexDirection: 'row', right:5}}>
                            {items.DiceCondition.map((item : any) => (
                                <View key={item.ID} style={{backgroundColor:"white",borderRadius:3, height:20, width:20, alignItems:"center", justifyContent:"center", margin:5}}>
                                    <Text style={{color:'black'}}>{item.DiceValue}</Text>
                                </View>
                            ))}
                        </View>
                    </TouchableOpacity>
                    <View style={buttonStyle.ContenteRule}>                        
                        <Text style={labelStyle.LabelSmallGrey}>{items.Description}</Text>
                    </View> 
                </View>
            ) : (
                <TouchableOpacity style={buttonStyle.CloseMenuTop} onPress={() => {
                    setIsVisible(!isVisible);
                }}>                                        
                    <IcArrowDown/>
                    <Text style={labelStyle.LabelBoldMediumWhite}>{items.Name}</Text>
                    <View style={{flexDirection: 'row', right:5}}>
                        {items.DiceCondition.map((item : any) => (
                            <View key={item.ID} style={{backgroundColor:"white",borderRadius:3, height:20, width:20, alignItems:"center", justifyContent:"center", margin:5}}>
                                <Text style={{color:'black'}}>{item.DiceValue}</Text>
                            </View>
                        ))}
                    </View>
                </TouchableOpacity>
            )}
        </View>
    );
}

export default DiceRule;