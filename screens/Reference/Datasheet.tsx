import React,{ ScrollView, Text, TouchableOpacity, View } from 'react-native';
import styles from '../../src/style/referencesStyle';
import data from '../../src/Data/data.json';
import rule from '../../src/Data/rule.json'
import { useNavigation } from '@react-navigation/native';
import { useState } from 'react';
import Weapon from '../../src/components/Weapons';
import { IcArrowDown, IcArrowUp } from '../../src/components/Arrow';
import Header from '../../src/components/Header';

//@ts-ignore
export const Datasheet = ({route}) => {

    const navigation = useNavigation();
    const datasheet = route.params.item;
    const armyRule = route.params.armyRule;
    const faction = route.params.faction;

    const [isVisibleDist, setIsVisibleDist] = useState(false);
    const [isVisibleMelee, setIsVisibleMelee] = useState(false);
    const [isVisibleCapaciter, setIsVisibleCapaciter] = useState(false);
    const [isVisibleWargear, setIsVisibleWargear] = useState(false);
    const [isVisibleLeader, setIsVisibleLeader] = useState(false);
    const [isVisibleWarOption, setIsVisibleWarOption] = useState(false); 
    const [isVisibleCompo, setIsVisibleCompo] = useState(false);
    const [isVisibleKeyWord, setIsVisibleKeyWord] = useState(false);   


    return (
        <View style={styles.scrollContainer}>
            <Header showBackIcon={true} title={datasheet.Name}/>
            <ScrollView indicatorStyle="white">  
                {datasheet.Statistique.map((item : any) => (
                    <View key={item.ID}>  
                        {(item.Name !== "") && (
                            <View style={styles.DatasheetTitle}>
                                <Text style={styles.DatasheetTitleText}>{item.Name}</Text>
                            </View>
                        )}     
                        <View style={styles.DatasheetStatistique}>
                            <View style={styles.carac}>
                                <Text style={styles.caracText}>M</Text>
                                <Text style={styles.StatData}>{item.Mouvement}"</Text>
                            </View>
                            <View style={styles.carac}>
                                <Text style={styles.caracText}>E</Text>
                                <Text style={styles.StatData}>{item.Thougnes}</Text>
                            </View>
                            <View style={styles.carac}>
                                <Text style={styles.caracText}>Svg</Text>
                                <Text style={styles.StatData}>{item.Sauvgarde}+</Text>
                            </View>
                            <View style={styles.carac}>
                                <Text style={styles.caracText}>PV</Text>
                                <Text style={styles.StatData}>{item.Wound}</Text>
                            </View>
                            <View style={styles.carac}>
                                <Text style={styles.caracText}>L</Text>
                                <Text style={styles.StatData}>{item.LeaderShip}+</Text>
                            </View>
                            <View style={styles.carac}>
                                <Text style={styles.caracText}>CO</Text>
                                <Text style={styles.StatData}>{item.ObjectifControl}</Text>
                            </View>
                        </View>   
                    </View>
                ))}
                {((datasheet.InvulnerableSave !== "") && (
                    <View style={styles.DatasheetTitle}>
                        <View style={styles.titleAndPoint}>
                            <Text style={styles.DatasheetTitleText}>Sauvegarde Invulnérable</Text>
                            <Text style={styles.DatasheetTitleText}>{datasheet.InvulnerableSave}</Text>
                        </View>
                    </View>
                ))}
                {((datasheet.RangedWeapons.length === 0) ? (null) : (
                    <View>
                        {isVisibleDist ? (
                            <View>
                                <TouchableOpacity style={styles.DatasheetMenu} onPress={() => {
                                    setIsVisibleDist(!isVisibleDist);
                                }}>
                                    <Text style={styles.DatasheetTitleText}>Arme de Tire</Text>  
                                    <IcArrowUp/>                                      
                                </TouchableOpacity>
                                <View style={styles.backgroundWeapon}>
                                    <View style={styles.WeaponStatTitle}>
                                        <View style={styles.WeaponTitle}>
                                            <View style={styles.caracTitle}>
                                                <Text style={styles.WeaponcaracText}>Portée</Text>
                                            </View>
                                            <View style={styles.caracTitle}>
                                                <Text style={styles.WeaponcaracText}>A</Text>
                                            </View>
                                            <View style={styles.caracTitle}>
                                                <Text style={styles.WeaponcaracText}>CT</Text>
                                            </View>
                                            <View style={styles.caracTitle}>
                                                <Text style={styles.WeaponcaracText}>F</Text>
                                            </View>
                                            <View style={styles.caracTitle}>
                                                <Text style={styles.WeaponcaracText}>PA</Text>
                                            </View>
                                            <View style={styles.caracTitle}>
                                                <Text style={styles.WeaponcaracText}>D</Text>
                                            </View>
                                        </View>
                                    </View>
                                    <Weapon items={datasheet.RangedWeapons} navigation={navigation}/>                  
                                </View>
                            </View>
                        ) : (
                            <View>
                                <TouchableOpacity  style={styles.DatasheetMenu} onPress={() => {
                                    setIsVisibleDist(!isVisibleDist);
                                }}>
                                    <Text style={styles.DatasheetTitleText}>Arme de Tire</Text>                  
                                    <IcArrowDown/>
                                </TouchableOpacity>
                            </View>
                        )}
                    </View>
                ))}
                {((datasheet.MeleeWeapons.length === 0) ? (null) : (       
                    <View>
                        {isVisibleMelee ? (
                            <View>
                                <View>
                                    <TouchableOpacity  style={styles.DatasheetMenu} onPress={() => {
                                        setIsVisibleMelee(!isVisibleMelee);
                                    }}>
                                        <Text style={styles.DatasheetTitleText}>Arme de Melee</Text>
                                        <IcArrowUp/>
                                    </TouchableOpacity>
                                </View>
                                <View style={styles.backgroundWeapon}>
                                    <View style={styles.WeaponStatTitle}>
                                        <View style={styles.WeaponTitle}>
                                            <View style={styles.caracCombat}>
                                                <Text style={styles.WeaponcaracText}>Portée</Text>
                                            </View>
                                            <View style={styles.caracCombat}>
                                                <Text style={styles.WeaponcaracText}>A</Text>
                                            </View>
                                            <View style={styles.caracCombat}>
                                                <Text style={styles.WeaponcaracText}>CC</Text>
                                            </View>
                                            <View style={styles.caracCombat}>
                                                <Text style={styles.WeaponcaracText}>F</Text>
                                            </View>
                                            <View style={styles.caracCombat}>
                                                <Text style={styles.WeaponcaracText}>PA</Text>
                                            </View>
                                            <View style={styles.caracCombat}>
                                                <Text style={styles.WeaponcaracText}>D</Text>
                                            </View>
                                        </View>
                                    </View>
                                    <Weapon items={datasheet.MeleeWeapons} navigation={navigation}/>  
                                </View>
                            </View>
                        ) : (
                            <View>
                                <TouchableOpacity  style={styles.DatasheetMenu} onPress={() => {
                                    setIsVisibleMelee(!isVisibleMelee);
                                }}>
                                    <Text style={styles.DatasheetTitleText}>Arme de Melee</Text>
                                    <IcArrowDown/>
                                </TouchableOpacity>
                            </View>
                        )}
                    </View>
                ))}
                <View>
                    {isVisibleCapaciter ? (
                        <View>
                            <TouchableOpacity  style={styles.DatasheetMenu} onPress={() => {
                                setIsVisibleCapaciter(!isVisibleCapaciter);
                            }}>
                                <Text style={styles.DatasheetTitleText}>Capaciter</Text>
                                <IcArrowUp/>
                            </TouchableOpacity>
                            <View style={styles.backgroundWeapon}>                      
                                {((datasheet.CoreRule.length !== 0) && (
                                    <View>
                                        <Text style={styles.text}>Core</Text>
                                        <View style={styles.KeywordStyle}>
                                            {datasheet.CoreRule.map((core : any) => (
                                                <TouchableOpacity key={core.ID} onPress={() => {
                                                    //@ts-ignore
                                                    navigation.navigate("Règle Commune", {
                                                        item : core.Rule,
                                                        type : "core",
                                                    });
                                                }}>
                                                    <Text style={styles.dashedBorderText}>{core.Name}</Text>
                                                </TouchableOpacity>
                                            ))}
                                        </View>
                                    </View>
                                ))}
                                <View>
                                    <Text style={styles.text}>Capaciter de Faction</Text>
                                    <View style={styles.KeywordStyle}>
                                        {armyRule.map((army : any) => (
                                            <TouchableOpacity key={army.ID} onPress={() => {
                                                //@ts-ignore
                                                navigation.navigate("Règle Commune", {
                                                    item : army,
                                                    type : "faction",
                                                });
                                            }} >
                                                <Text style={styles.dashedBorderText}>{army.Name}</Text>
                                            </TouchableOpacity>
                                        ))}
                                    </View>
                                </View>
                                <View>
                                    <Text style={styles.text}>Capaciter d'unité</Text>
                                    <View style={styles.KeywordStyle}>
                                        {datasheet.DatasheetAbilities.map((rule : any) => (
                                            <View key={rule.ID}>
                                                <Text style={styles.datasheetAbilityTitle}>{rule.Name}</Text>                          
                                                <Text style={styles.datasheetAbilityText}>{rule.Description}</Text>
                                            </View>
                                        ))}
                                    </View>
                                </View>
                            </View>
                        </View>
                    ) : (
                        <View>
                            <TouchableOpacity  style={styles.DatasheetMenu} onPress={() => {
                                setIsVisibleCapaciter(!isVisibleCapaciter);
                            }}>
                                <Text style={styles.DatasheetTitleText}>Capaciter</Text>
                                <IcArrowDown/>
                            </TouchableOpacity>
                        </View>
                    )}
                </View>
                {((datasheet.WargearAbilities.length !== 0) && (
                    <View>
                        {isVisibleWargear ? (
                            <View>
                                <TouchableOpacity  style={styles.DatasheetMenu} onPress={() => {
                                    setIsVisibleWargear(!isVisibleWargear);
                                }}>
                                    <Text style={styles.DatasheetTitleText}>Capaciter d'équipement</Text>
                                    <IcArrowUp/>
                                </TouchableOpacity>
                                <View style={styles.backgroundWeapon}>
                                    <View>
                                        <View style={styles.KeywordStyle}>
                                            {datasheet.WargearAbilities.map((rule : any) => (
                                                <View key={rule.ID}>
                                                    <Text style={styles.datasheetAbilityTitle}>{rule.Name}</Text>                          
                                                    <Text style={styles.datasheetAbilityText}>{rule.Description}</Text>
                                                </View>
                                            ))}
                                        </View>
                                    </View>
                                </View>
                            </View>
                        ) : (
                            <View>
                                <TouchableOpacity  style={styles.DatasheetMenu} onPress={() => {
                                    setIsVisibleWargear(!isVisibleWargear);
                                }}>
                                    <Text style={styles.DatasheetTitleText}>Capaciter d'équipement</Text>
                                    <IcArrowDown/>
                                </TouchableOpacity>
                            </View>
                        )}
                    </View>
                ))}
                {((datasheet.Leader.length !== 0) && (
                    <View>
                        {isVisibleLeader ? (
                            <View>
                                <TouchableOpacity  style={styles.DatasheetMenu} onPress={() => {
                                    setIsVisibleLeader(!isVisibleLeader);
                                }}>
                                    <Text style={styles.DatasheetTitleText}>Leader</Text>
                                    <IcArrowUp/>
                                </TouchableOpacity>
                                <View style={styles.backgroundWeapon}>
                                    <View>
                                        <Text style={styles.datasheetSmallText}>Cette unité peut être attacher au unités suivante :</Text>
                                        {datasheet.Leader.map((unit: any) => (
                                            <View key={unit.ID}>                        
                                                <Text style={styles.datasheetSmallText}>     - {unit.Name}</Text>
                                            </View>
                                        ))}
                                    </View>
                                </View>
                            </View>
                        ) : (
                            <View>
                                <TouchableOpacity  style={styles.DatasheetMenu} onPress={() => {
                                    setIsVisibleLeader(!isVisibleLeader);
                                }}>
                                    <Text style={styles.DatasheetTitleText}>Leader</Text>
                                    <IcArrowDown/>
                                </TouchableOpacity>
                            </View>
                        )}
                    </View>
                ))}
                {((datasheet.WargearOption.length !== 0) && (
                    <View>
                        {isVisibleWarOption ? (
                            <View>
                                <TouchableOpacity  style={styles.DatasheetMenu} onPress={() => {
                                    setIsVisibleWarOption(!isVisibleWarOption);
                                }}>
                                <Text style={styles.DatasheetTitleText}>Option d'Équipement</Text>
                                <IcArrowUp/>
                                </TouchableOpacity>
                                <View style={styles.backgroundWeapon}>
                                    <View>
                                        {datasheet.WargearOption.map((unit : any) => (
                                            <View key={unit.ID}>                        
                                                <Text style={styles.datasheetSmallText}>{unit.Description}</Text>
                                            </View>
                                        ))}
                                    </View>
                                </View>
                            </View>
                        ) : (
                            <View>
                                <TouchableOpacity  style={styles.DatasheetMenu} onPress={() => {
                                    setIsVisibleWarOption(!isVisibleWarOption);
                                }}>
                                    <Text style={styles.DatasheetTitleText}>Option d'Équipement</Text>
                                    <IcArrowDown/>
                                </TouchableOpacity>
                            </View>
                        )}
                    </View>
                ))}
                <View>
                    {isVisibleCompo ? (
                        <View>
                            <TouchableOpacity  style={styles.DatasheetMenu} onPress={() => {
                                setIsVisibleCompo(!isVisibleCompo);
                            }}>
                                <Text style={styles.DatasheetTitleText}>Composition d'Unité</Text>
                                <IcArrowUp/>
                            </TouchableOpacity>
                            <View style={styles.backgroundWeapon}>
                                <View>
                                    {datasheet.UnitComposition.Composition.map((unit : any) => (
                                        (unit.Model.map((model : any) => (
                                            <View key={model.ID}>                        
                                                <Text style={styles.datasheetSmallText}>                                  
                                                    - {model.Min}
                                                    {(model.Max !== "") && ('-' + (model.Max))}
                                                    {' '}{model.Name}
                                                    {(model.Descritpion !== "") && (' - ' + (model.Descritpion))}
                                                </Text>
                                            </View>
                                        )))
                                    ))}
                                </View>
                                <View>
                                    {datasheet.UnitComposition.Wargear.map((unit : any) => (
                                        <View key={unit.ID}>                        
                                            <Text style={styles.datasheetSmallText}>{unit.Text}</Text>
                                        </View>
                                    ))}
                                </View>
                                <View style={styles.TableauUnitCompoContaineur}>
                                    <View style={styles.TableauUnitCompoHeader}>
                                        <Text style={styles.TableauUnitHeaderName}>Nom du Model</Text>
                                        <Text style={styles.TableauUnitHeaderCost}>Nombre</Text>
                                        <Text style={styles.TableauUnitHeaderCost}>Points</Text>
                                    </View>                          
                                    {datasheet.UnitComposition.TablePoints.map((ligne : any, index : number) => (                            
                                        <View key={ligne.ID} style={[
                                            styles.TableauUnitCompoComptent,
                                            { backgroundColor: index % 2 === 0 ? 'white' : 'lightgray' }
                                        ]}>
                                            <View style={styles.TableauUnitCompoComptentColonne}>
                                                {ligne.Model.map((model : any) => (                            
                                                    <View key={model.ID}  style={styles.TableauUnitCompoComptent}>
                                                        <Text style={styles.TableauUnitComptentName}>{model.Name}</Text>                                  
                                                        <Text style={styles.TableauUnitComptentCost}>{model.Count}</Text>
                                                    </View>
                                                ))}
                                            </View>
                                            <Text style={styles.TableauUnitComptentCost}>{ligne.Points}</Text>
                                        </View>
                                    ))}
                                </View>
                            </View>
                        </View>
                    ) : (
                        <View>
                            <TouchableOpacity  style={styles.DatasheetMenu} onPress={() => {
                                setIsVisibleCompo(!isVisibleCompo);
                            }}>
                                <Text style={styles.DatasheetTitleText}>Composition d'Unité</Text>
                                <IcArrowDown/>
                            </TouchableOpacity>
                        </View>
                    )}
                </View>
                <View>
                    {isVisibleKeyWord ? (
                        <View>
                            <TouchableOpacity  style={styles.DatasheetMenu} onPress={() => {
                                setIsVisibleKeyWord(!isVisibleKeyWord);
                            }}>
                                <Text style={styles.DatasheetTitleText}>Mots Clef</Text>
                                <IcArrowUp/>
                            </TouchableOpacity>
                            <View style={styles.backgroundWeapon}>
                                <View style={styles.datasheetSmallTextContainer}>                     
                                    <Text style={styles.datasheetSmallText}>
                                        Mots Cléf : <Text style={styles.datasheetSmallTextBold}>{datasheet.KeyWord}</Text>
                                    </Text>
                                </View>
                                <View style={styles.datasheetSmallTextContainerBlue}>                     
                                    <Text style={styles.datasheetSmallTextWhite}>
                                        Mots Cléf de Faction : <Text style={styles.datasheetSmallTextBoldWhite}>{faction}</Text>
                                    </Text>
                                </View>
                            </View>
                        </View>
                    ) : (
                        <View>
                            <TouchableOpacity  style={styles.DatasheetMenu} onPress={() => {
                                setIsVisibleKeyWord(!isVisibleKeyWord);
                            }}>
                                <Text style={styles.DatasheetTitleText}>Mots Clef</Text>
                                <IcArrowDown/>
                            </TouchableOpacity>
                        </View>
                    )}
                </View>
            </ScrollView>
        </View>
    );
}

export default Datasheet;