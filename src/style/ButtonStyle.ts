import { StyleSheet} from 'react-native';
import theme from './theme'
import labelStyle from './LabelStyle';

const buttonStyle = StyleSheet.create({
    
    TouchableitemList:{
        backgroundColor:  theme.colors.PrimaryColor,      
        flexDirection: 'row',              
        borderRadius: 7,
        marginVertical : 3,
        paddingVertical : 15,
        paddingHorizontal : 30   
      },
    TouchableitemListDisable:{
        backgroundColor:  theme.colors.DarkGrey,      
        flexDirection: 'row',              
        borderRadius: 7,
        marginVertical : 3,
        paddingVertical : 15,
        paddingHorizontal : 30   
      },
    OpenMenuTop :{
      backgroundColor:  theme.colors.BlueGrey, 
      flexDirection: 'row',
      justifyContent:'space-around',  
      textAlign:'center',    
      borderTopLeftRadius: 7,     
      borderTopRightRadius: 7,  
      marginTop : 3,
      paddingVertical : 15,
      paddingHorizontal : 10  
    },
    CloseMenuTop :{
      backgroundColor:  theme.colors.BlueGrey, 
      flexDirection: 'row',
      justifyContent:'space-around',    
      textAlign:'center',             
      borderRadius: 7,
      marginVertical : 3,
      paddingVertical : 15,
      paddingHorizontal : 10 
    },
    
    ContenteRule:{                    
      backgroundColor:  theme.colors.PrimaryColor,
      borderRadius: 10,
      borderTopLeftRadius: 0,
      borderTopRightRadius: 0,
      padding:20
    },
});

export default buttonStyle;