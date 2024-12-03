import React,{ ScrollView, Text, TouchableOpacity, View } from 'react-native';
import labelStyle from '../style/LabelStyle';
import buttonStyle from '../style/ButtonStyle';
import { useState } from 'react';
import { IcArrowDown, IcArrowUp } from './Arrow';

const ViewRule = (props : any) => {

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
                        <Text style={labelStyle.LabelSmallGrey}>{items.Description}</Text>
                        {items.RulesChild.map((item : any) => (
                            <View key={item.ID}>
                                <Text style={[labelStyle.LabelNormalBlod, {marginVertical : 10}]}>{item.Title}</Text>                          
                                <Text style={labelStyle.LabelSmallGrey}>{item.Description}</Text>
                            </View>
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

export default ViewRule;