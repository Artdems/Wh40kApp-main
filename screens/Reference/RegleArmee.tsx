import React,{ ScrollView, Text, TouchableOpacity, View } from 'react-native';
import styles from '../../src/style/referencesStyle';
import ViewRule from '../../src/components/ViewRule';
import Header from '../../src/components/Header';

//@ts-ignore
const ArmyRules = ({route}) => {

    const rules = route.params.item;

    return (
        <View style={styles.scrollContainer}>
            <Header showBackIcon={true} title={"Règles d'Armée"}/>
            <ScrollView indicatorStyle="white">
                <View style={{padding:30}}>
                {rules.map((item : any) => (
                    <ViewRule key={item.ID} items={item}/>  
                ))}
                </View>
            </ScrollView>
        </View>
    );
}

export default ArmyRules;