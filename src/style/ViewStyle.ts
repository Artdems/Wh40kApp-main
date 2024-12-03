import { StyleSheet } from 'react-native';
import theme from './theme'

const viewStyles = StyleSheet.create({

    BackgroundStyle:{
        backgroundColor: theme.colors.PrimaryColor,
        flex:1,
    },
    FrameStyleBase: {
        shadowColor: 'transparent',
    },
    FramedIconStyleBase: {
        borderColor: theme.colors.GreySeparator, 
        backgroundColor: 'transparent',
        shadowColor: 'transparent', 
        margin: 0,
        borderRadius: 10,
        padding: 5,
        resizeMode: 'contain', 
        overflow: 'hidden', 
    },
    AutoCompletePopupStyle: {
        shadowColor: 'transparent',
        borderColor: theme.colors.GreySeparator, 
        fontSize: 14,
        fontFamily: theme.fonts.EfsFont,
        padding: 20,
        borderRadius: 10,
        height: 30,
        alignSelf: 'flex-start', 
    },
    BoxViewSeparator: {
        height: 1,
        backgroundColor: theme.colors.GreySeparator, 
    },
    ViewFramedIconLegalNotice:{
        flexDirection: 'row',
        margin: 10,
        alignItems: 'center'
    },   
    FrameIcon: {
        backgroundColor: theme.colors.DonorLightBlue,
        fontFamily: theme.fonts.EfsFont,
        marginVertical:15,
        marginLeft:15,
        padding: 10,
        borderRadius: 8,
    },   
    WarningIcon: {
        backgroundColor: theme.colors.DonorLightRed,
        fontFamily: theme.fonts.EfsFont,
        marginVertical:15,
        marginLeft:15,
        padding: 10,
        borderRadius: 8,
    },
    FrameIconUserPreferences: {
        backgroundColor: theme.colors.DonorLightBlue,
        marginVertical:5,
        marginLeft:5,
        borderRadius: 8,
    },
    RoundFrameIcon: {
        backgroundColor: '#efefef',
        fontFamily: theme.fonts.EfsFont,
        margin:3,
        borderRadius: 25,
        padding: 8,
    },
    IconLegalNotice:{
        alignSelf: 'center',
        marginTop: 10
    }
});

export default viewStyles;