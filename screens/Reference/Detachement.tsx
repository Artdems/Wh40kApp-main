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
const Detachement = ({route}) => {

    const navigation = useNavigation();
    const detachement = route.params.item;

    return (
        <View style={styles.scrollContainer}>            
            <Header showBackIcon={true} title={detachement.Name}/>
            <ScrollView indicatorStyle="white">
                <View style={{padding:30}}>
                    <TouchableOpacity  style={[buttonStyle.TouchableitemList, {justifyContent:'space-between'}]}  onPress={() => {
                        //@ts-ignore
                        navigation.navigate("Amélioration", {
                            item : detachement.Enhancements,
                        });
                    }}>
                        <Text style = {LabelStyle.LabelBoldMedium}>Amélioration</Text>
                        <View  style={{ alignItems:"center", justifyContent:"center" }}>
                            <Icon source={image.IcArrowRightRed} color='black' size={20}/>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity  style={[buttonStyle.TouchableitemList, {justifyContent:'space-between'}]}  onPress={() => {
                        //@ts-ignore
                        navigation.navigate("Stratagèmes", {
                            item : detachement.Stratagems,
                        });
                    }}>
                        <Text style = {LabelStyle.LabelBoldMedium}>Stratagèmes</Text>
                        <View  style={{ alignItems:"center", justifyContent:"center" }}>
                            <Icon source={image.IcArrowRightRed} color='black' size={20}/>
                        </View>
                    </TouchableOpacity>
                    <View style={{height:1, backgroundColor:theme.colors.DarkGrey, marginVertical:20}}></View>                
                    <Text style = {[LabelStyle.LabelLargeWhite, {fontWeight:'bold', marginBottom : 10}]}>REGLE DE DETACHEMENT</Text>
                    {detachement.Rule.map((item : any) => (
                        <ViewRule  key={item.ID} items={item} visible={true}/>
                    ))}
                </View>
            </ScrollView>
        </View>
    );
  }

  export default Detachement;