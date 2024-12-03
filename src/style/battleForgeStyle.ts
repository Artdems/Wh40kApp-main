
import { StyleSheet} from 'react-native';

import { Colors } from 'react-native/Libraries/NewAppScreen';

import { Dimensions } from 'react-native';

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


const styles = StyleSheet.create({
    text: {
      fontSize: 20,
      margin: 10
    },
    menuContainer: {
      position: 'absolute',
      top: 50, // Ajustez cette valeur en fonction de la position souhaitée
      right: 10, // Ajustez cette valeur en fonction de la position souhaitée
      backgroundColor: 'white',
      borderRadius: 5,
      padding: 10,
      shadowColor: 'black',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.2,
      shadowRadius: 2,
    },
    BackGroundGeneralRule: {
      backgroundColor: 'white'
    },
    InputItem:{
      backgroundColor: 'white',      
      flexDirection: 'row',              
      borderRadius: 10,
      fontSize: 20,
      margin: 2,
      padding : 10  
    },
    TouchableitemList:{
      backgroundColor: 'white',      
      flexDirection: 'row',              
      borderRadius: 10,
      fontSize: 20,
      margin: 2,   
    },
    TouchableitemListGrey:{
      backgroundColor: 'rgb(70, 70, 70)',             
      borderRadius: 10,
      margin: 2    
    },    
    TouchableitemListBlue: {
      backgroundColor: "rgb(19, 123, 155)",
      flexDirection: 'row',
      justifyContent: 'space-between',              
      borderRadius: 10,
      margin: 2
    },
    TouchableitemListPressable:{
      backgroundColor: '#FFD032',
      bottom: 0,      
      flexDirection: 'row',              
      borderRadius: 10,
      fontSize: 20,
      margin: 2,
      justifyContent: 'center'
    },
    TouchableitemListNotPressable:{
      backgroundColor: '#B08E1D', 
      bottom: 0,     
      flexDirection: 'row',              
      borderRadius: 10,
      fontSize: 20,
      margin: 2,
      justifyContent: 'center'
    },
    ItemsList: {
        fontSize: 25,
        margin: 10,
        color: 'black'
    },
    ItemsListWhite: {
      fontSize: 25,
      margin: 10,
      color:'white'
    },
    ItemsListGrey: {
      fontSize: 15,
      margin: 5,
      color: '#ABABAB'
    },
    PointsContainer: {
      flexDirection: 'row', // Alignement horizontal
      alignItems: 'center', // Centre le contenu verticalement
      flex: 0, // Empêche la vue de s'étendre
      width: 'auto', // Largeur minimale
      margin: 5,
      padding: 2
    },
    ItemsListPoint: {                    
      borderRadius: 10,
      backgroundColor : 'white',
      fontSize: 15,
      padding: 3
    },
    ItemsDatasheetPoint: {                    
      borderRadius: 10,
      backgroundColor : 'rgb(19, 123, 155)',
      fontSize: 15,
      padding: 3,
      color : 'white'
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
      backgroundColor: '#fff',
      paddingTop: 20
    },
    titleRooster: {
      fontSize: 40,
      fontWeight: 'bold',
      margin: 10,      
      color:"white",
      alignSelf: 'flex-start',
      width : calculatedWidthText
    },
    title: {
      fontSize: 40,
      fontWeight: 'bold',
      margin: 10,      
      color:"white",
      alignSelf: 'flex-start'
    },
    ViewTitle: {
      backgroundColor: "rgb(70, 70, 70)",
      flexDirection: 'row',
      justifyContent: 'space-between'
    },
    ViewTitleStick: {
      backgroundColor: "rgb(70, 70, 70)",
      flexDirection: 'row',
    },
    ViewDatasheet: {
      backgroundColor: "white",
      flexDirection: 'row',
      justifyContent: 'space-between', // Alignement horizontal
      alignItems: 'center',
    },
    ViewRule:{                    
      borderRadius: 10,
      margin:10
    },
    ContenteRule:{                    
      backgroundColor: "white",
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
      color:"white"
    },
    StatData :{    
      fontWeight: 'bold',    
      fontSize: 25,
      textAlign:'center',      
      textAlignVertical : 'center',
      color:"black",
      backgroundColor: 'white',
      borderColor: 'rgb(19, 123, 155)', // Couleur de la bordure
      borderWidth: 1,     // Épaisseur de la bordure
      borderStyle: 'solid',
      width: calculatedWidthStat,
      height: calculatedWidthStat
    },    
    StatText :{    
      fontWeight: 'bold',    
      fontSize: 25,
      textAlign:'center',
      color:"white",
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
      backgroundColor : 'white'
    },
    DatasheetStatistique :{
      flexDirection: 'row',
      backgroundColor: "rgb(70, 70, 70)"
    },    
    WeaponNameTitle :{
        flexDirection: 'row',
        backgroundColor: "rgb(70, 70, 70)",              
        borderRadius: 10,
      },
    DatasheetTitleText :{
      margin:10,
      fontWeight: 'bold',
      fontSize: 25,
      color:"white"
    },
    WeaponTitleText :{
      margin:10,
      fontWeight: 'bold',
      fontSize: 20,
      color:"white"
    },
    DatasheetTitle :{
      backgroundColor: "rgb(19, 123, 155)",
      borderColor: 'white', // Couleur de la bordure
      borderBottomWidth: 1,
      borderTopWidth: 1,      // Épaisseur de la bordure
      borderStyle: 'solid',
    },
    DatasheetMenu :{
      backgroundColor: "rgb(19, 123, 155)",
      padding: 10,
      justifyContent: 'space-between',        
      flexDirection: 'row',      
      textAlign:'center',
      borderColor: 'white', // Couleur de la bordure
      borderBottomWidth: 1,
      borderTopWidth: 1,      // Épaisseur de la bordure
      borderStyle: 'solid',
    },

    CloseMenu :{
      backgroundColor: "rgb(19, 123, 155)",
      padding: 10,
      justifyContent: 'space-between',        
      flexDirection: 'row',      
      textAlign:'center',
      borderRadius: 10
    },
    CloseMenuVert :{
      backgroundColor: "rgb(109, 225, 143)",
      padding: 10,
      justifyContent: 'space-between',        
      flexDirection: 'row',      
      textAlign:'center',
      borderRadius: 10
    },
    CloseMenuRouge :{
      backgroundColor: "rgb(243, 50, 11)",
      padding: 10,
      justifyContent: 'space-between',        
      flexDirection: 'row',      
      textAlign:'center',
      borderRadius: 10
    },

    OpenMenuTop :{
      backgroundColor: "rgb(19, 123, 155)",
      padding: 10,
      justifyContent: 'space-between',        
      flexDirection: 'row',      
      textAlign:'center',
      borderRadius: 10,
      borderBottomLeftRadius: 0,
      borderBottomRightRadius: 0
    },

    OpenMenuTopVert :{
      backgroundColor: "rgb(109, 225, 143)",
      padding: 10,
      justifyContent: 'space-between',        
      flexDirection: 'row',      
      textAlign:'center',
      borderRadius: 10,
      borderBottomLeftRadius: 0,
      borderBottomRightRadius: 0
    },
    OpenMenuTopRouge :{
      backgroundColor: "rgb(243, 50, 11)",
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
      iconItemTouche:{
        alignItems: 'center',
        alignSelf: 'center'
      },
      iconItemTouchePlus:{
        alignItems: 'center',
        alignSelf: 'center',
        borderRadius: 5,      
        borderWidth: 2,
        borderColor: 'white',
        margin:8,
      },
      iconItemTouchePlusDatasheet:{
        alignItems: 'center',
        alignSelf: 'center',
        borderRadius: 5,      
        borderWidth: 2,
        borderColor: 'black',
        margin:8,
      },
    iconItem:{
      margin:10,
      alignItems: 'center',
    },
    iconPlus:{
      margin:3,
    },
    background : {
      backgroundColor : 'black'
    },
    floatingButton: {
      position: 'absolute',
      bottom: 10,
      right: 10,
      backgroundColor: '#FFD032',
      borderRadius: 30, // Faites de cette valeur la moitié de la largeur/hauteur pour obtenir un cercle
      width: 60,
      height: 60,
      justifyContent: 'center',
      alignItems: 'center',
      elevation: 5,
    },
    input: {
      width: 300,
      height: 40,
      borderColor: 'gray',
      borderWidth: 1,
      paddingLeft: 10,
    },
  });

  export default styles;