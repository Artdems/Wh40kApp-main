import React,{ ScrollView, Text, TouchableOpacity, View } from 'react-native';
import styles from '../../src/style/battleForgeStyle';
import ViewRule from '../../src/components/ViewRule';
import LabelStyle from '../../src/style/LabelStyle';
import buttonStyle from '../../src/style/ButtonStyle';
import { useNavigation } from '@react-navigation/native';
import Header from '../../src/components/Header';
import { Icon } from 'react-native-paper';
import image from '../../src/assets/images/image';
import theme from '../../src/style/theme';

//@ts-ignore
const CrusadeRules = ({route}) => {

    const navigation = useNavigation();
    const CrusadeRule = route.params.item;

    return (
        <View style={styles.scrollContainer}>            
            <Header showBackIcon={true} title={"Regle de Croisade"}/>
            <ScrollView indicatorStyle="white">
                <View style={{padding:30}}>
                    <TouchableOpacity  style={[buttonStyle.TouchableitemList, {justifyContent:'space-between'}]}  onPress={() => {
                        //@ts-ignore
                        navigation.navigate("Agendas", {
                            item : CrusadeRule.Agendas,
                        });
                    }}>
                        <Text style = {LabelStyle.LabelBoldMedium}>Agendas</Text>
                        <View  style={{ alignItems:"center", justifyContent:"center" }}>
                            <Icon source={image.IcArrowRightRed} color='black' size={20}/>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity  style={[buttonStyle.TouchableitemList, {justifyContent:'space-between'}]}  onPress={() => {
                        //@ts-ignore
                        navigation.navigate("Requisitions", {
                            item : CrusadeRule.Requisitions,
                        });
                    }}>
                        <Text style = {LabelStyle.LabelBoldMedium}>Réquisitions</Text>
                        <View  style={{ alignItems:"center", justifyContent:"center" }}>
                            <Icon source={image.IcArrowRightRed} color='black' size={20}/>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity  style={[buttonStyle.TouchableitemList, {justifyContent:'space-between'}]}  onPress={() => {
                        //@ts-ignore
                        navigation.navigate("BattleTraits", {
                            item : CrusadeRule.BattleTraits,
                        });
                    }}>
                        <Text style = {LabelStyle.LabelBoldMedium}>Traits de Combat</Text>
                        <View  style={{ alignItems:"center", justifyContent:"center" }}>
                            <Icon source={image.IcArrowRightRed} color='black' size={20}/>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity  style={[buttonStyle.TouchableitemList, {justifyContent:'space-between'}]}  onPress={() => {
                        //@ts-ignore
                        navigation.navigate("Amélioration", {
                            item : CrusadeRule.Enhancements,
                        });
                    }}>
                        <Text style = {LabelStyle.LabelBoldMedium}>Reliques de Croisade</Text>
                        <View  style={{ alignItems:"center", justifyContent:"center" }}>
                            <Icon source={image.IcArrowRightRed} color='black' size={20}/>
                        </View>
                    </TouchableOpacity>
                    {CrusadeRule.SubRule.map((item : any) => (
                        <TouchableOpacity style={[buttonStyle.TouchableitemList, {justifyContent:'space-between'}]} key={item.ID} onPress={() => {
                            //@ts-ignore
                            //navigation.navigate("Detachement", {item : item,});
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

  export default CrusadeRules;