import React,{ ScrollView, Text, TouchableOpacity, View } from 'react-native';
import styles from '../../src/style/referencesStyle';
import data from '../../src/Data/data.json';
import { useNavigation } from '@react-navigation/native';
import Header from '../../src/components/Header';
import theme from '../../src/style/theme';
import buttonStyle from '../../src/style/ButtonStyle';
import LabelStyle from '../../src/style/LabelStyle';
import { Icon } from 'react-native-paper';
import image from '../../src/assets/images/image';

const Faction = () => { 

    const navigation = useNavigation();

    return (
        <View style={styles.scrollContainer}>
            
            <Header showBackIcon={false} title={"REFERENCE"}/>
            <ScrollView indicatorStyle="white">
                <View style={{padding:30}}>
                    <TouchableOpacity disabled={true} style={[buttonStyle.TouchableitemListDisable, {justifyContent:'space-between'}]}>
                        <Text style = {LabelStyle.LabelBoldMedium}>Règle de Base</Text>
                        <View  style={{ alignItems:"center", justifyContent:"center" }}>
                            <Icon source={image.IcArrowRightRed} color='black' size={20}/>
                        </View>
                    </TouchableOpacity>                
                    <View style={{height:1, backgroundColor:theme.colors.DarkGrey, marginVertical:20}}></View>  
                    {data.codex.map((item) => (
                        <TouchableOpacity disabled={(item.Detachement ? false : true)} style={[(item.Detachement ? buttonStyle.TouchableitemList : buttonStyle.TouchableitemListDisable), {justifyContent:'space-between'}]} key={item.ID} onPress={() => {
                            //@ts-ignore
                            navigation.navigate('Codex', {item : item,});
                        }}>
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
};

export default Faction;