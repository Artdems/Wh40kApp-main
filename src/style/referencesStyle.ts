
import { StyleSheet} from 'react-native';

import { Colors } from 'react-native/Libraries/NewAppScreen';

import { Dimensions } from 'react-native';
import theme from './theme';

const {width} = Dimensions.get('screen');
const percentageWidthText = 68;
const calculatedWidthText = (percentageWidthText / 100) * width;

const percentageWidthTitre = 23;
const calculatedWidthTitre = (percentageWidthTitre / 100) * width;

const percentageWidthStat = 10;
const calculatedWidthStat = (percentageWidthStat / 100) * width;

const percentageWidthCompoName = 55;
const calculatedWidthCompoName = (percentageWidthCompoName / 100) * width;

const percentageWidthCompoCost = 15;
const calculatedWidthCompoCost = (percentageWidthCompoCost / 100) * width;

const percentageWidthStratageme = 60;
const calculatedWidthStratageme = (percentageWidthStratageme / 100) * width;

const styles = StyleSheet.create({
    text: {
      fontSize: 20,
      margin: 10
    },
    BackGroundGeneralRule: {
      backgroundColor: theme.colors.PrimaryColor
    },
    TouchableitemList:{
      backgroundColor:  theme.colors.PrimaryColor,      
      flexDirection: 'row',              
      borderRadius: 10,
      margin: 2    
    },
    ItemsList: {
        fontSize: 25,
        margin: 10
    },
    textStratagem: {
      fontSize: 20,
      marginBottom: 10,    
      marginTop: 10,
      marginRight: 10,
      alignSelf: 'flex-start',
      width: calculatedWidthText
    },
    textBold: {
      fontSize: 20,
      fontWeight: 'bold',
      marginBottom: 10,    
      marginTop: 10,
      marginLeft: 10,      
      width: calculatedWidthTitre
    },
    container: {
      flex: 1,
      backgroundColor:  theme.colors.PrimaryColor,
      paddingTop: 20
    },
    title: {
      fontSize: 40,
      fontWeight: 'bold',
      margin: 10,      
      color: theme.colors.PrimaryColor,
    },
    ViewTitle: {
      backgroundColor:  theme.colors.DarkGrey
    },
    ViewRule:{       
    },
    ContenteRule:{                    
      backgroundColor:  theme.colors.PrimaryColor,
      borderRadius: 10,
      borderTopLeftRadius: 0,
      borderTopRightRadius: 0
    },
    title2: {
      fontSize: 35,
      fontWeight: 'bold',
      margin: 10
    }, 
    title3: {
        fontSize: 26,
        fontWeight: 'bold',
        margin: 10
      },
    points: {
      fontSize: 26,
      fontWeight: 'bold',
      marginRight: 10,
      margin: 10
    },
    titleAndPoint :{
      flexDirection: 'row',
      justifyContent: 'space-between'
    },  
    caracText :{    
      fontWeight: 'bold',    
      fontSize: 25,
      textAlign:'center',
      color: theme.colors.PrimaryColor
    },
    StatData :{    
      fontWeight: 'bold',    
      fontSize: 25,
      textAlign:'center',      
      textAlignVertical : 'center',
      color:"black",
      backgroundColor:  theme.colors.PrimaryColor,
      borderColor:  theme.colors.BlueGrey, // Couleur de la bordure
      borderWidth: 1,     // Épaisseur de la bordure
      borderStyle: 'solid',
      width: calculatedWidthStat,
      height: calculatedWidthStat
    },    
    StatText :{    
      fontWeight: 'bold',    
      fontSize: 25,
      textAlign:'center',
      color: theme.colors.PrimaryColor,
      width : calculatedWidthStat
    },
    WeaponcaracText :{    
      fontWeight: 'bold',    
      fontSize: 20,
      textAlign:'center'
    },
    WeaponText :{    
      fontWeight: 'bold',    
      fontSize: 20,
      textAlign:'center',
      margin:10
    },
    carac :{
      margin : 20,
    },
    caracTitle :{
      margin : 18,
    },
    caracCombat :{
      margin : 20,
    },
    stratagem :{
      flexDirection: 'row',
    },
    backgroundWeapon : {
      backgroundColor :  theme.colors.PrimaryColor
    },
    DatasheetStatistique :{
      flexDirection: 'row',
      backgroundColor:  theme.colors.DarkGrey
    },    
    WeaponNameTitle :{
        flexDirection: 'row',
        backgroundColor:  theme.colors.DarkGrey,              
        borderRadius: 10,
      },
      DatasheetTitleStratageme :{
        margin:10,
        fontWeight: 'bold',
        fontSize: 25,
        color: theme.colors.PrimaryColor,
        width : calculatedWidthStratageme
      },
    DatasheetTitleText :{
      margin:10,
      fontWeight: 'bold',
      fontSize: 25,
      color: theme.colors.PrimaryColor
    },
    WeaponTitleText :{
      margin:10,
      fontWeight: 'bold',
      fontSize: 20,
      color: theme.colors.PrimaryColor
    },
    DatasheetTitle :{
      backgroundColor:  theme.colors.BlueGrey,
      borderColor:  theme.colors.PrimaryColor, // Couleur de la bordure
      borderBottomWidth: 1,
      borderTopWidth: 1,      // Épaisseur de la bordure
      borderStyle: 'solid',
    },
    DatasheetMenu :{
      backgroundColor:  theme.colors.BlueGrey,
      padding: 10,
      justifyContent: 'space-between',        
      flexDirection: 'row',      
      textAlign:'center',
      borderColor:  theme.colors.PrimaryColor, // Couleur de la bordure
      borderBottomWidth: 1,
      borderTopWidth: 1,      // Épaisseur de la bordure
      borderStyle: 'solid',
    },

    CloseMenu :{
      backgroundColor:  theme.colors.BlueGrey,
      padding: 10,
      justifyContent: 'space-between',        
      flexDirection: 'row',      
      textAlign:'center',
      borderRadius: 10
    },
    CloseMenuVert :{
      backgroundColor:  theme.colors.WhiteGreen,
      padding: 10,
      justifyContent: 'space-between',        
      flexDirection: 'row',      
      textAlign:'center',
      borderRadius: 10
    },
    CloseMenuRouge :{
      backgroundColor:  theme.colors.BloodRed,
      padding: 10,
      justifyContent: 'space-between',        
      flexDirection: 'row',      
      textAlign:'center',
      borderRadius: 10
    },

    OpenMenuTop :{
      backgroundColor:  theme.colors.BlueGrey,
      padding: 10,
      justifyContent: 'space-between',        
      flexDirection: 'row',      
      textAlign:'center',
      borderRadius: 10,
      borderBottomLeftRadius: 0,
      borderBottomRightRadius: 0
    },

    OpenMenuTopVert :{
      backgroundColor:  theme.colors.WhiteGreen,
      padding: 10,
      justifyContent: 'space-between',        
      flexDirection: 'row',      
      textAlign:'center',
      borderRadius: 10,
      borderBottomLeftRadius: 0,
      borderBottomRightRadius: 0
    },
    OpenMenuTopRouge :{
      backgroundColor:  theme.colors.BloodRed,
      padding: 10,
      justifyContent: 'space-between',        
      flexDirection: 'row',      
      textAlign:'center',
      borderRadius: 10,
      borderBottomLeftRadius: 0,
      borderBottomRightRadius: 0
    },






    WeaponStatTitle :{
      backgroundColor: "darkgrey",

    },
    WeaponTitle :{
      margin:10,
      flexDirection: 'row'
    },
    WeaponMargin :{
      margin:10
    },
    WeaponStatistique :{
      flexDirection: 'row'
    },
    KeywordStyle:{
      flexDirection: 'row',
      flexWrap: 'wrap'
    },
    input :{
      borderColor:"black",
      borderWidth:1,
      padding:20,
    },
    scrollContainer: {
      flex: 1,
      backgroundColor: 'black'
    },
    scrollContentContainer: {
      alignItems: 'center',
    },
    dashedBorderText: {
        fontSize: 15,
        borderColor: 'black', // Couleur de la bordure
        borderWidth: 1,      // Épaisseur de la bordure
        borderStyle: 'dashed', // Style de la bordure en pointillés
        padding: 10,      
        borderRadius: 10,
        marginLeft: 2,
        marginRight: 2
      },
      datasheetAbilityTitle: {
        fontSize: 15,// Style de la bordure en pointillés
        padding: 10,      
        borderRadius: 10,
        marginLeft: 2,
        marginRight: 2,
        color:'white',
        backgroundColor : 'black'
      },
      datasheetAbilityText: {
        fontSize: 15,
        margin: 10
      },
      datasheetSmallTextContainer: {        
        borderColor: 'black', // Couleur de la bordure
        borderWidth: 1,      // Épaisseur de la bordure
        borderStyle: 'solid',
        borderRadius: 10,
        margin: 10
      },
      
      datasheetSmallText: {
        fontSize: 15,
        margin: 5
      },
      
      datasheetSmallTextBold: {
        fontSize: 15,
        margin: 5,
        fontWeight: 'bold',
      },
      datasheetSmallTextContainerBlue: {        
        borderColor: 'black', // Couleur de la bordure
        borderWidth: 1,      // Épaisseur de la bordure
        borderStyle: 'solid',
        borderRadius: 10,
        backgroundColor: "rgb(19, 123, 155)",
        margin:10
      },
      
      datasheetSmallTextWhite: {
        fontSize: 15,
        margin: 5,
        color : 'white'
      },
      
      datasheetSmallTextBoldWhite: {
        fontSize: 15,
        margin: 5,
        fontWeight: 'bold',
        color : 'white',
        textTransform: 'uppercase'
      },
      TableauUnitCompoContaineur:{
        borderColor: 'black', // Couleur de la bordure
        borderWidth: 1,      // Épaisseur de la bordure
        borderStyle: 'solid',
        borderRadius: 10,
        margin: 5
      },
      TableauUnitCompoHeader:{
        backgroundColor: 'black',
        flexDirection: 'row',
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
      },
      TableauUnitHeaderName:{        
        width : calculatedWidthCompoName,
        fontSize: 15,
        margin: 5,
        color : 'white'
      },
      TableauUnitHeaderCost:{        
        width : calculatedWidthCompoCost,
        fontSize: 15,
        margin: 5,
        color : 'white',
        textAlign: 'center',
        borderLeftColor: 'grey', // Couleur de la bordure
        borderLeftWidth: 1,      // Épaisseur de la bordure
        borderStyle: 'solid',
      },
      TableauUnitCompoComptent:{
        flexDirection: 'row',
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
      },
      TableauUnitCompoComptentColonne:{
        flexDirection: 'column',
      },
      TableauUnitComptentName:{        
        width : calculatedWidthCompoName,
        fontSize: 15,
        margin: 5,
        color : 'black'
      },
      TableauUnitComptentCost:{        
        width : calculatedWidthCompoCost,
        fontSize: 15,
        margin: 5,
        color : 'black',
        textAlign: 'center',
        textAlignVertical : 'center',
        borderLeftColor: 'grey', // Couleur de la bordure
        borderLeftWidth: 1,      // Épaisseur de la bordure
        borderStyle: 'solid',
      },
    iconItem:{
      margin:10,
      alignItems: 'center',
    },
    background : {
      backgroundColor : 'black'
    },
    floatingButton: {
      position: 'absolute',
      bottom: 10,
      right: 10,
      backgroundColor: 'blue',
      borderRadius: 30, // Faites de cette valeur la moitié de la largeur/hauteur pour obtenir un cercle
      width: 60,
      height: 60,
      justifyContent: 'center',
      alignItems: 'center',
      elevation: 5,
    }
  });

  export default styles;