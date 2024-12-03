import { StyleSheet} from 'react-native';
import theme from './theme'

const headerStyles = StyleSheet.create({
    Header:{
        backgroundColor: theme.colors.PrimaryColor,
        height: theme.height.Header,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingLeft: 20,
        paddingRight: 20,
    },
    HeaderIcon:{
        borderColor: theme.colors.GreySeparator,
        borderWidth: 1,
        height: 40,
        width:40,
        borderRadius:10,
        verticalAlign: 'middle',
        alignSelf: 'center',
        alignItems: 'center',
    },
    HeaderIconHide:{
        height: 40,
        width:40,
        verticalAlign: 'middle',
        alignSelf: 'center',
        alignItems: 'center',
    },
    HeaderBackIcon:{
        marginTop: 11,
        marginRight:3,
        height: 15,
        width:15,
    },
    HeaderProfilIcon:{
        height: 25,
        width:25,
        marginTop: 5,
    },
    HeaderTitle:{
        verticalAlign: 'middle',
        alignSelf: 'center',
        textAlign: 'center',
        textAlignVertical: 'center'
    },
    HeaderTitleImage:{
        maxWidth: 105,
        maxHeight:31,
    }
});

export default headerStyles;