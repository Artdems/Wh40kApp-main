import React,{ ScrollView, Text, View } from 'react-native';
import styles from '../../src/style/battleForgeStyle';
import labelStyle from '../../src/style/LabelStyle';
import Stratageme from '../../src/components/Stratageme';
import Header from '../../src/components/Header';
import TableauTrait from '../../src/components/TableauTrait';

const BattleTraits = ({route} : any) => {

    const battleTrais = route.params.item;

    return (
        <View style={styles.scrollContainer}>
            <Header showBackIcon={true} title={"Agendas"}/>
            <ScrollView indicatorStyle="white">
                <View style={{padding:30}}>
                    <Text style={[labelStyle.LabelLargeWhite, {marginBottom : 30}]}>Si votre armée de Croisade comprend des unités de cette faction, vous pouvez utiliser l'une des tables présentées ici pour déterminer quel Trait de Combat cette unité a gagné.</Text>
                    {battleTrais.map((item : any) => (              
                        <TableauTrait key={item.ID} items={item}/>
                    ))}
                </View>
            </ScrollView>
        </View>
    );
}
    

  export default BattleTraits;