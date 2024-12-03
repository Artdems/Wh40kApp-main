import { StyleSheet} from 'react-native';
import theme from './theme'

const menuStyles = StyleSheet.create({

    SideMenuButtonStyle:{
        margin: 10
    },
    SideMenuButtonLabelStyle:{
        textAlignVertical: 'center',
        textAlign: 'left',
        fontFamily: theme.fonts.EfsFontBlack,
        color: theme.colors.DonorBlue,
        fontSize: 20,
        paddingHorizontal: 16,
        lineHeight: 25,
    },
    SideMenuReseauxSociaux:{
        flexDirection : 'row',
        justifyContent: 'space-between',
        borderColor : theme.colors.GreySeparator,
        position : 'absolute',
        bottom : 10,
        left:10,
        right: 10,
        height: 50,
        alignItems: 'center',
        borderWidth: 1,
        borderRadius: 10,
        padding: 10,
        margin:10
    },
    SideMenu:{        
        flex:1,
        backgroundColor: theme.colors.PrimaryColor,
    },
    FaceBookIcon:{        
        maxHeight: 20,
        maxWidth:11,
        margin:5,
        marginLeft: 20
    },    
    TwitterIcon:{        
        maxHeight: 20,
        maxWidth:25,
        margin:5,
    },    
    YoutubeIcon:{        
        maxHeight: 20,
        maxWidth:27,
        margin:5,
    },    
    LinkedinIcon:{        
        maxHeight: 20,
        maxWidth:20,
        margin:5,
    },    
    InsagramIcon:{        
        maxHeight: 20,
        maxWidth:20,
        margin:5,
        marginRight: 20
    },    
    LogoEFS:{
        maxHeight: 100,
        maxWidth: 100,
        alignSelf: 'center',
        margin : 20,
    },
});

export default menuStyles;