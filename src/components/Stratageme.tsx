import React, { useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import labelStyle from '../style/LabelStyle';
import buttonStyle from '../style/ButtonStyle';
import { IcArrowDown, IcArrowUp } from "./Arrow";
import theme from "../style/theme";

const Stratageme = (props : any) => {

    const {items} = props;

    const [isVisible, setIsVisible] = useState(false);

    const toggleVisibility = () => {
        setIsVisible(!isVisible);
    };

    const dynamicStyleOpen = (items.Type === 'you') ? [buttonStyle.OpenMenuTop, {}] : ((items.Type === 'both') ? [buttonStyle.OpenMenuTop, {backgroundColor : theme.colors.WhiteGreen}] : [buttonStyle.OpenMenuTop, {backgroundColor : theme.colors.BloodRed}]);
    const dynamicStyleClose = (items.Type === 'you') ? [buttonStyle.CloseMenuTop, {}] : ((items.Type === 'both') ? [buttonStyle.CloseMenuTop, {backgroundColor : theme.colors.WhiteGreen}] : [buttonStyle.CloseMenuTop, {backgroundColor : theme.colors.BloodRed}]);
    const dynamicStyleText = (items.Type === 'you') ? [labelStyle.LabelSmallBoldWhite, {color : theme.colors.BlueGrey}] : ((items.Type === 'both') ? [labelStyle.LabelSmallBoldWhite, {color : theme.colors.WhiteGreen}] : [labelStyle.LabelSmallBoldWhite, {color : theme.colors.BloodRed}]);

    return (
        <View>
            {isVisible ? (
                <View>
                    <TouchableOpacity style={dynamicStyleOpen} onPress={() => {
                        setIsVisible(!isVisible);
                    }}>
                        <IcArrowUp/>
                        <View style={{justifyContent:'space-between', flexDirection: 'row', flex:1}}>
                            <Text style={labelStyle.LabelBoldMediumWhite}>{items.Name}</Text>
                            <Text style={labelStyle.LabelBoldMediumWhite}>{items.Point}PC</Text>                            
                        </View>
                    </TouchableOpacity>
                    <View style={buttonStyle.ContenteRule}>
                        {items.When !== "" &&
                            <Text style={[labelStyle.LabelSmallGrey, {marginVertical : 5}]}><Text style={dynamicStyleText}>Quand : </Text>{items.When}</Text>
                        }
                        {items.Target !== "" &&
                        <Text style={[labelStyle.LabelSmallGrey, {marginVertical : 5}]}><Text style={dynamicStyleText}>Cible : </Text>{items.Target}</Text>
                        }
                        {items.Effet !== "" &&
                            <Text style={[labelStyle.LabelSmallGrey, {marginVertical : 5}]}><Text style={dynamicStyleText}>Effets : </Text>{items.Effet}</Text>
                        }
                        {items.Restrictions !== "" &&
                            <Text style={[labelStyle.LabelSmallGrey, {marginVertical : 5}]}><Text style={dynamicStyleText}>Restriction : </Text>{items.Restrictions}</Text>
                        }
                    </View> 
                </View>
            ) : (
                <TouchableOpacity style={dynamicStyleClose} onPress={() => {
                    setIsVisible(!isVisible);
                }}>
                    <IcArrowDown/>
                    <View style={{justifyContent:'space-between', flexDirection: 'row', flex:1}}>
                        <Text style={labelStyle.LabelBoldMediumWhite}>{items.Name}</Text>
                        <Text style={labelStyle.LabelBoldMediumWhite}>{items.Point}PC</Text>                            
                    </View>
                </TouchableOpacity>
            )}
        </View>
    );
}

export default Stratageme;