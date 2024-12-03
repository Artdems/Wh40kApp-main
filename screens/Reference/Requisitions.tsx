import React,{ ScrollView, Text, View } from 'react-native';
import styles from '../../src/style/battleForgeStyle';
import labelStyle from '../../src/style/LabelStyle';
import Stratageme from '../../src/components/Stratageme';
import Header from '../../src/components/Header';
import Requisition from '../../src/components/Requisition';

const Requisitions = ({route} : any) => {

    const requisition = route.params.item;

    return (
        <View style={styles.scrollContainer}>
            <Header showBackIcon={true} title={"Réquisitions"}/>
            <ScrollView indicatorStyle="white">
                <View style={{padding:30}}>
                    <Text style={[labelStyle.LabelLargeWhite, {marginBottom : 30}]}>Si votre armée de Croisade comprend des unités de cette faction, vous pouvez dépenser des points de Réquisition (PR) pour n'importe lequel des Réquisitions suivantes.</Text>
                    {requisition.map((item : any) => (              
                        <Requisition key={item.ID} items={item}/>
                    ))}
                </View>
            </ScrollView>
        </View>
    );
}
    

  export default Requisitions;