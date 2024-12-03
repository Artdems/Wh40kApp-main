import React, { useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import labelStyle from '../style/LabelStyle';
import buttonStyle from '../style/ButtonStyle';
import { IcArrowDown, IcArrowUp } from "./Arrow";

const Enhancement = (props : any) => {

    const {items, visible} = props;

    const [isVisible, setIsVisible] = useState(visible);

    const toggleVisibility = () => {
        setIsVisible(!isVisible);
    };

    return (
        <View>
            {isVisible ? (
                <View>
                    <TouchableOpacity style={buttonStyle.OpenMenuTop} onPress={() => {
                        setIsVisible(!isVisible);
                    }}>
                        <IcArrowUp/>
                        <View style={{justifyContent:'space-between', flexDirection: 'row', flex:1}}>
                            <Text style={labelStyle.LabelBoldMediumWhite}>{items.Name}</Text>
                            <Text style={labelStyle.LabelBoldMediumWhite}>{items.Point}</Text>
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
                    <View style={{justifyContent:'space-between', flexDirection: 'row', flex:1}}>
                        <Text style={labelStyle.LabelBoldMediumWhite}>{items.Name}</Text>
                        <Text style={labelStyle.LabelBoldMediumWhite}>{items.Point}</Text>
                    </View>
                </TouchableOpacity>
            )}
        </View>
    );
}

export default Enhancement