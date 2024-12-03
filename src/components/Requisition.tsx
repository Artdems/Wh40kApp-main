import React, { useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import labelStyle from '../style/LabelStyle';
import buttonStyle from '../style/ButtonStyle';
import { IcArrowDown, IcArrowUp } from "./Arrow";
import theme from "../style/theme";

const Requisition = (props : any) => {

    const {items} = props;

    const [isVisible, setIsVisible] = useState(false);

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
                            <Text style={labelStyle.LabelBoldMediumWhite}>{items.Couts}PR</Text>                            
                        </View>
                    </TouchableOpacity>
                    <View style={buttonStyle.ContenteRule}>
                        <Text style={[labelStyle.LabelSmallGrey, {marginVertical : 5}]}>{items.Description}</Text>
                    </View> 
                </View>
            ) : (
                <TouchableOpacity style={buttonStyle.CloseMenuTop} onPress={() => {
                    setIsVisible(!isVisible);
                }}>
                    <IcArrowDown/>
                    <View style={{justifyContent:'space-between', flexDirection: 'row', flex:1}}>
                        <Text style={labelStyle.LabelBoldMediumWhite}>{items.Name}</Text>
                        <Text style={labelStyle.LabelBoldMediumWhite}>{items.Couts}PR</Text>                            
                    </View>
                </TouchableOpacity>
            )}
        </View>
    );
}

export default Requisition;