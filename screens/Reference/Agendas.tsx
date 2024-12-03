import React,{ ScrollView, Text, View } from 'react-native';
import styles from '../../src/style/battleForgeStyle';
import labelStyle from '../../src/style/LabelStyle';
import Stratageme from '../../src/components/Stratageme';
import Header from '../../src/components/Header';
import ViewRule from '../../src/components/ViewRule';

const Agendas = ({route} : any) => {

    const agends = route.params.item;

    return (
        <View style={styles.scrollContainer}>
            <Header showBackIcon={true} title={"Agendas"}/>
            <ScrollView indicatorStyle="white">
                <View style={{padding:30}}>
                    <Text style={[labelStyle.LabelLargeWhite, {marginBottom : 30}]}>Si votre armée de Croisade comprend des unités de cette faction, vous pouvez sélectionner des Agendas parmi ceux présentés ici.</Text>
                    {agends.map((item : any) => (              
                        <ViewRule key={item.ID} items={item}/>
                    ))}
                </View>
            </ScrollView>
        </View>
    );
}
    

  export default Agendas;