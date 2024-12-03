import React,{ ScrollView, Text, TouchableOpacity, View } from 'react-native';
import labelStyle from '../style/LabelStyle';
import buttonStyle from '../style/ButtonStyle';
import { useState } from 'react';
import DiceRule from './DiceRule';
import { IcArrowDown, IcArrowUp } from './Arrow';

const TableauTrait = (props : any) => {

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
                    </TouchableOpacity>
                    <View style={buttonStyle.ContenteRule}>                        
                        {items.RuleChild.map((item : any) => (
                            <DiceRule key={item.ID} items={item}/>
                        ))}
                    </View> 
                </View>
            ) : (
                <TouchableOpacity style={buttonStyle.CloseMenuTop} onPress={() => {
                    setIsVisible(!isVisible);
                }}>                                        
                    <IcArrowDown/>
                    <Text style={labelStyle.LabelBoldMediumWhite}>{items.Name}</Text>
                </TouchableOpacity>
            )}
        </View>
    );
}

export default TableauTrait;