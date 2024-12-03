import React,{ ScrollView, Text, TouchableOpacity, View } from 'react-native';
import styles from '../../src/style/referencesStyle';
import { useNavigation } from '@react-navigation/native';
import Header from '../../src/components/Header';


//@ts-ignore
const Datasheets = ({route}) => {

    
    const navigation = useNavigation();
    const datasheet = route.params.item.Datasheet;
    const armyRule = route.params.item.ArmyRules;
    const faction = route.params.faction;

    return (
        <View style={styles.scrollContainer}>
            <Header showBackIcon={true} title={route.params.item.Name}/>
            <ScrollView indicatorStyle="white">
                {datasheet.map((item : any) => (
                    <TouchableOpacity style={styles.TouchableitemList} key={item.ID} onPress={() => {
                        //@ts-ignore
                        navigation.navigate("Datasheet", {
                        item : item,
                        armyRule : armyRule,
                        faction : faction
                        });
                    }} >
                        <Text style={styles.ItemsList}>{item.Name}</Text>
                    </TouchableOpacity>
                ))}
            </ScrollView>
        </View>
    );
}

export default Datasheets;