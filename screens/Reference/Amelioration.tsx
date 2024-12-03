import React,{ ScrollView, Text, View } from 'react-native';
import styles from '../../src/style/battleForgeStyle';
import Enhancement from '../../src/components/Enhancement';
import Header from '../../src/components/Header';

//@ts-ignore
const Enhancements = ({route}) => {

    const enhancements = route.params.item;

    return (
      <View style={styles.scrollContainer}>
        <Header showBackIcon={true} title={"Amélioration"}/>
          <ScrollView indicatorStyle="white">
            <View style={{padding : 30}}>
              {enhancements.map((item : any) => (
                <Enhancement key={item.ID}  items={item}/>
              ))}
            </View>
          </ScrollView>
      </View>
    );
  }

export default Enhancements;