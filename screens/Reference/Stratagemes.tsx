import React,{ ScrollView, Text, View } from 'react-native';
import styles from '../../src/style/battleForgeStyle';
import Stratageme from '../../src/components/Stratageme';
import Header from '../../src/components/Header';

const Stratagemes = ({route} : any) => {

    const stratagem = route.params.item;

    return (
        <View style={styles.scrollContainer}>
            <Header showBackIcon={true} title={"Stratagème"}/>
            <ScrollView indicatorStyle="white">
                <View style={{padding:30}}>
                    {stratagem.map((item : any) => (              
                        <Stratageme key={item.ID} items={item}/>
                    ))}
                </View>
            </ScrollView>
        </View>
    );
}
    

  export default Stratagemes;