import React,{ ScrollView, Text, View } from 'react-native';
import rule from '../../src/Data/rule.json';
import styles from '../../src/style/battleForgeStyle';
import Header from '../../src/components/Header';

const GeneralRule = ({route} : any) => {

    const rules = rule.Rule;
    const items = route.params.item;
    const type = route.params.type;

    return(
        <ScrollView indicatorStyle="white">
            {(type === "core" ? (
                rules.map((item) => (
                    (item.Name === items) && (
                        <View style={styles.scrollContainer} key={item.ID}>                            
                            <Header showBackIcon={true} title={item.Name}/>  
                            <View style={styles.BackGroundGeneralRule}>           
                                <Text style={styles.text}>{item.Description}</Text>
                            </View>
                        </View>
                    )
                ))
            ) : (
                <View style={styles.scrollContainer} key={items.ID}>
                    <Header showBackIcon={true} title={items.Name}/>  
                    <View style={styles.BackGroundGeneralRule}>           
                        <Text style={styles.text}>{items.Description}</Text>
                        {items.RulesChild.map((item : any) => (   
                            <View key={item.ID}>
                                <Text style={styles.title2}>{item.Title}</Text>                          
                                <Text style={styles.text}>{item.Description}</Text>
                            </View>
                        ))}
                    </View>
                </View>
            ))}
        </ScrollView>
    );
}

  export default GeneralRule;