import React,{ ScrollView, Text, TouchableOpacity, View } from 'react-native';
import styles from '../style/referencesStyle';
import { useState } from 'react';
import { useNavigation } from '@react-navigation/native';

const Weapon = (props : any) => {

    const navigation = useNavigation();
    const {items} = props;

    return(
        <View>
            {items.map((item : any) => (
                <View key={item.ID} style={styles.WeaponMargin}>
                    <View style={styles.WeaponNameTitle}>
                        <Text style={styles.WeaponTitleText}>{item.Name}</Text>
                    </View>
                    <View style={styles.WeaponTitle}>
                        <View style={styles.carac}>
                            {(item.Range === "Melee") ? (
                                <Text style={styles.WeaponcaracText}>{item.Range}</Text>
                            ):(
                                <Text style={styles.WeaponcaracText}>{item.Range}"</Text>
                            )} 
                        </View>
                        <View style={styles.carac}>
                            <Text style={styles.WeaponcaracText}>{item.Attack}</Text>
                        </View>
                        <View style={styles.carac}>
                            <Text style={styles.WeaponcaracText}>{item.SkillStrike}+</Text>
                        </View>
                        <View style={styles.carac}>
                            <Text style={styles.WeaponcaracText}>{item.Strength}</Text>
                        </View>
                        <View style={styles.carac}>
                            {(item.ArmorPenetration === "0") ? (                           
                                <Text style={styles.WeaponcaracText}>{item.ArmorPenetration}</Text>
                            ):(
                                <Text style={styles.WeaponcaracText}>-{item.ArmorPenetration}</Text>
                            )}              
                        </View>
                        <View style={styles.carac}>
                            <Text style={styles.WeaponcaracText}>{item.Degat}</Text>
                        </View>
                    </View>
                    <View style={styles.KeywordStyle}>
                        {item.KeyWord.map((keyword : any) => (
                            <TouchableOpacity key={keyword.ID} onPress={() => {
                                //@ts-ignore
                                navigation.navigate("Règle Commune", {
                                    item : keyword.Rule,
                                    type : "core",
                                });
                            }} >
                                <Text style={styles.dashedBorderText}>{keyword.Name}</Text>
                            </TouchableOpacity>
                        ))}
                    </View>
                </View>
            ))}
        </View>
    )
}

export default Weapon;