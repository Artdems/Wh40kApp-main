import React,{ ScrollView, Text, TouchableOpacity, View } from 'react-native';
import styles from '../../src/style/referencesStyle';
import LabelStyle from '../../src/style/LabelStyle';
import buttonStyle from '../../src/style/ButtonStyle';
import { useNavigation } from '@react-navigation/native';
import Header from '../../src/components/Header';
import { Icon } from 'react-native-paper';
import image from '../../src/assets/images/image';
import theme from '../../src/style/theme';
import { useState } from 'react';


//@ts-ignore
const Codex = ({route}) => { 

    const items = route.params.item;
    const navigation = useNavigation();
    const [crusaderule] = useState<boolean>(items.CrusadeRules)

    return (
        <View style={styles.scrollContainer}>             
            <Header showBackIcon={true} title={items.Name}/>
            <ScrollView indicatorStyle="white">  
                <View style={{padding:30}}>
                    <TouchableOpacity disabled={true}  style={[buttonStyle.TouchableitemListDisable, {justifyContent:'space-between'}]} onPress={() => {
                        //@ts-ignore
                        navigation.navigate("Datasheets", {item : items,faction : items.Name});
                    }}>
                        <Text style = {LabelStyle.LabelBoldMedium}>Datasheet</Text>
                        <View  style={{ alignItems:"center", justifyContent:"center" }}>
                            <Icon source={image.IcArrowRightRed} color='black' size={20}/>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={[buttonStyle.TouchableitemList, {justifyContent:'space-between'}]} onPress={() => {
                        //@ts-ignore
                        navigation.navigate("Règle d'Armée", {item : items.ArmyRules,});
                    }}>
                        <Text style = {LabelStyle.LabelBoldMedium}>Règles d'Armée</Text>
                        <View  style={{ alignItems:"center", justifyContent:"center" }}>
                            <Icon source={image.IcArrowRightRed} color='black' size={20}/>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity disabled={!crusaderule} style={[(crusaderule ? buttonStyle.TouchableitemList : buttonStyle.TouchableitemListDisable), {justifyContent:'space-between'}]} onPress={() => {
                        //@ts-ignore
                        navigation.navigate("Règle de Croisade", {item : items.CrusadeRules,});
                    }}>
                        <Text style = {LabelStyle.LabelBoldMedium}>Règles de Croisade</Text>
                        <View  style={{ alignItems:"center", justifyContent:"center" }}>
                            <Icon source={image.IcArrowRightRed} color='black' size={20}/>
                        </View>
                    </TouchableOpacity>
                    <View style={{height:1, backgroundColor:theme.colors.DarkGrey, marginVertical:20}}></View>                
                    <Text style = {[LabelStyle.LabelLargeWhite, {fontWeight:'bold', marginBottom : 10}]}>DETACHEMENTS</Text>
                    {items.Detachement.map((item : any) => (
                        <TouchableOpacity style={[buttonStyle.TouchableitemList, {justifyContent:'space-between'}]} key={item.ID} onPress={() => {
                            //@ts-ignore
                            navigation.navigate("Detachement", {item : item,});
                        }} >
                            <Text style={LabelStyle.LabelBoldMedium}>{item.Name}</Text>
                        <View  style={{ alignItems:"center", justifyContent:"center" }}>
                            <Icon source={image.IcArrowRightRed} color='black' size={20}/>
                        </View>
                        </TouchableOpacity>
                    ))}
                </View> 
            </ScrollView>
        </View>
    );
}


export default Codex;